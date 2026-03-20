import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const profileMdPath = path.join(root, 'profile.md')
const profileTsPath = path.join(root, 'src', 'data', 'profile.ts')

const companyLogos = {
  NVIDIA: '/logos/nvidia_logo.jfif',
  Autodesk: '/logos/autodesk_logo.jfif',
}

const educationLogos = {
  'Concordia University': '/logos/concordia_university_logo.jfif',
  'Technical University of Cluj Napoca': '/logos/1631391351421.jfif',
}

const certificationLogos = {
  'AWS Certified Cloud Practitioner': '/logos/amazon_web_services_logo.jfif',
  'Agentic AI': '/logos/deeplearningai_logo.jfif',
  'Retrieval Augmented Generation (RAG)': '/logos/deeplearningai_logo.jfif',
  'Neural Networks and Deep Learning': '/logos/deeplearningai_logo.jfif',
}

function normalize(markdown) {
  return markdown.replace(/\r\n/g, '\n')
}

function splitSections(content) {
  const lines = content.split('\n')
  const sections = new Map()
  let current = null
  let buffer = []

  for (const line of lines) {
    const m = line.match(/^##\s+(.*)$/)
    if (m) {
      if (current) {
        sections.set(current, buffer.join('\n').trim())
      }
      current = m[1].trim()
      buffer = []
      continue
    }

    if (current) {
      buffer.push(line)
    }
  }

  if (current) {
    sections.set(current, buffer.join('\n').trim())
  }

  return sections
}

function parseTop(content) {
  const lines = content.split('\n').map((l) => l.trim())
  const name = (lines.find((l) => l.startsWith('# ')) || '# Unknown').replace(/^#\s+/, '').trim()
  const title = (lines.find((l) => l.startsWith('**') && l.endsWith('**')) || '**Profile**')
    .replace(/^\*\*/, '')
    .replace(/\*\*$/, '')
    .trim()

  const location = lines.find((l) => l.toLowerCase().includes('area')) || ''
  const email = lines.find((l) => l.includes('@')) || ''
  const linkedinLine = lines.find((l) => l.includes('linkedin.com')) || ''
  const linkedin = (linkedinLine.match(/\((https?:\/\/[^)]+)\)/) || [])[1] || ''

  return { name, title, location, email, linkedin }
}

function parseBullets(sectionText) {
  return sectionText
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('- '))
    .map((l) => l.slice(2).trim())
}

function parseSummary(text) {
  return text
    .split(/\n\s*\n/)
    .map((s) => s.trim())
    .filter((s) => s && s !== '---')
}

function parseExpertise(text) {
  return parseBullets(text).map((line) => {
    const idx = line.indexOf(':')
    if (idx === -1) return { area: line, items: [] }
    const area = line.slice(0, idx).trim()
    const items = line
      .slice(idx + 1)
      .split(',')
      .map((i) => i.trim())
      .filter(Boolean)
    return { area, items }
  })
}

function parseEducation(text) {
  const chunks = text
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter(Boolean)

  return chunks
    .map((chunk) => {
      const lines = chunk.split('\n').map((l) => l.trim()).filter(Boolean)
      const schoolLine = lines.find((l) => l.startsWith('**') && l.endsWith('**'))
      const detailLine = lines.find((l) => l.includes('·'))
      if (!schoolLine || !detailLine) return null

      const school = schoolLine.replace(/^\*\*/, '').replace(/\*\*$/, '').trim()
      const [degreeField, period] = detailLine.split('·').map((s) => s.trim())

      let degree = degreeField
      let field = null
      if (degreeField.includes(',')) {
        const [d, ...rest] = degreeField.split(',')
        degree = d.trim()
        field = rest.join(',').trim() || null
      }

      return {
        school,
        degree,
        field,
        period,
        logo: educationLogos[school],
      }
    })
    .filter(Boolean)
}

function parseCertifications(text) {
  return parseBullets(text).map((line) => {
    const url = (line.match(/https?:\/\/\S+/) || [])[0]
    const clean = (url ? line.replace(url, '') : line).replace(/,\s*$/, '')
    const parts = clean.split(',').map((p) => p.trim()).filter(Boolean)

    const cert = { name: parts[0] || line }
    const looksLikeDate = (value) => /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/i.test(value)

    if (parts.length >= 3) {
      cert.issuer = parts[1]
      cert.date = parts[2]
    } else if (parts.length >= 2) {
      if (looksLikeDate(parts[1])) {
        cert.date = parts[1]
      } else {
        cert.name = `${parts[0]}, ${parts[1]}`
      }
    }

    if (url) cert.href = url
    if (certificationLogos[cert.name]) cert.logo = certificationLogos[cert.name]

    return cert
  })
}

function parseBulletItem(text) {
  const linkMatch = text.match(/\[(.*?)\]\((https?:\/\/[^)]+)\)/)
  if (!linkMatch) return text
  return {
    text: text.replace(linkMatch[0], linkMatch[1]),
    href: linkMatch[2],
  }
}

function parseExperience(text) {
  const companyBlocks = text
    .split(/\n---\n/)
    .map((b) => b.trim())
    .filter((b) => b.startsWith('### '))

  return companyBlocks.map((block) => {
    const lines = block.split('\n')
    const header = lines[0].trim()
    const m = header.match(/^###\s+(.*?)\s+\*\((.*?)\)\*$/)
    const name = m ? m[1].trim() : header.replace(/^###\s+/, '').trim()
    const duration = m ? m[2].trim() : ''

    const roles = []
    let i = 1

    while (i < lines.length) {
      const line = lines[i].trim()
      if (!line.startsWith('#### ')) {
        i += 1
        continue
      }

      const title = line.replace(/^####\s+/, '').trim()
      i += 1
      while (i < lines.length && !lines[i].trim()) i += 1

      let period = ''
      let location = null
      if (i < lines.length && lines[i].trim().startsWith('*') && lines[i].trim().endsWith('*')) {
        const periodLine = lines[i].trim().slice(1, -1)
        const [periodPart, locationPart] = periodLine.split('·').map((s) => s.trim())
        period = (periodPart || '').replace(/\(.*?\)/g, '').trim()
        location = locationPart || null
        i += 1
      }

      const desc = []
      const bullets = []

      while (i < lines.length) {
        const cur = lines[i].trim()
        if (!cur) {
          i += 1
          continue
        }
        if (cur.startsWith('#### ') || cur.startsWith('### ')) break

        if (cur.startsWith('- ')) bullets.push(parseBulletItem(cur.slice(2).trim()))
        else desc.push(cur)
        i += 1
      }

      roles.push({
        title,
        period,
        location,
        description: desc.length ? desc.join(' ') : null,
        bullets,
      })
    }

    return {
      name,
      duration,
      logo: companyLogos[name],
      roles,
    }
  })
}

function parseProjects(text) {
  const chunks = text
    .split(/\n###\s+/)
    .map((c, i) => (i === 0 ? c : `### ${c}`))
    .filter((c) => c.trim().startsWith('### '))

  return chunks.map((chunk) => {
    const lines = chunk.split('\n').map((l) => l.trim())
    const name = lines[0].replace(/^###\s+/, '').trim()
    const start = (lines.find((l) => l.startsWith('Start Date:')) || '').replace('Start Date:', '').trim()
    const end = (lines.find((l) => l.startsWith('End Date:')) || '').replace('End Date:', '').trim()
    const role = (lines.find((l) => l.startsWith('Role:')) || '').replace('Role:', '').trim() || 'N/A'

    const urlLine = lines.find((l) => l.startsWith('Project URL:')) || ''
    const href = (urlLine.match(/\((https?:\/\/[^)]+)\)/) || [])[1]

    const descStart = lines.findIndex((l) => l.startsWith('Description:'))
    const desc = []
    if (descStart >= 0) {
      desc.push(lines[descStart].replace('Description:', '').trim())
      for (let i = descStart + 1; i < lines.length; i += 1) {
        const cur = lines[i]
        if (!cur || cur.startsWith('### ')) break
        desc.push(cur.replace(/^-\s*/, '').trim())
      }
    }

    return {
      name,
      period: `${start} – ${end}`,
      role,
      description: desc.join(' ').trim(),
      ...(href ? { href } : {}),
    }
  })
}

function parseRecommendations(text) {
  const chunks = text
    .split(/\n###\s+/)
    .map((c, i) => (i === 0 ? c : `### ${c}`))
    .filter((c) => c.trim().startsWith('### '))

  return chunks.map((chunk) => {
    const lines = chunk.split('\n').map((l) => l.trim())
    const name = lines[0].replace(/^###\s+/, '').trim()
    const role = (lines.find((l) => l.startsWith('Role:')) || '').replace('Role:', '').trim()
    const relationship = (lines.find((l) => l.startsWith('Relationship:')) || '').replace('Relationship:', '').trim()
    const date = (lines.find((l) => l.startsWith('Date:')) || '').replace('Date:', '').trim()

    let t = lines.findIndex((l) => l.startsWith('Date:')) + 1
    while (t < lines.length && !lines[t]) t += 1
    const textBody = lines.slice(t).filter(Boolean).join(' ').trim()

    return { name, role, relationship, date, text: textBody }
  })
}

function toTs(value, indent = 0) {
  const pad = '  '.repeat(indent)
  const nextPad = '  '.repeat(indent + 1)

  if (value === null) return 'null'
  if (typeof value === 'string') return JSON.stringify(value)
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    return `[\n${value.map((v) => `${nextPad}${toTs(v, indent + 1)}`).join(',\n')}\n${pad}]`
  }

  const entries = Object.entries(value).filter(([, v]) => v !== undefined)
  if (!entries.length) return '{}'
  return `{\n${entries.map(([k, v]) => `${nextPad}${k}: ${toTs(v, indent + 1)}`).join(',\n')}\n${pad}}`
}

function generateTs(profile) {
  return `export interface Role {
  title: string
  period: string
  location: string | null
  description: string | null
  bullets: Array<string | { text: string; href: string }>
}

export interface Company {
  name: string
  duration: string
  logo?: string
  roles: Role[]
}

export interface Certification {
  name: string
  issuer?: string
  date?: string
  href?: string
  logo?: string
}

export interface Education {
  school: string
  degree: string
  field: string | null
  period: string
  logo?: string
}

export interface Project {
  name: string
  period: string
  role: string
  description: string
  href?: string
}

export interface ExpertiseGroup {
  area: string
  items: string[]
}

export interface Recommendation {
  name: string
  role: string
  relationship: string
  date: string
  text: string
}

export const profile = ${toTs(profile)}
`
}

function main() {
  const markdown = normalize(fs.readFileSync(profileMdPath, 'utf8'))
  const sections = splitSections(markdown)
  const top = parseTop(markdown)

  const profile = {
    ...top,
    summary: parseSummary(sections.get('Summary') || ''),
    experience: parseExperience(sections.get('Experience') || ''),
    education: parseEducation(sections.get('Education') || ''),
    expertise: parseExpertise(sections.get('Technical and Domain Expertise') || ''),
    skills: parseBullets(sections.get('Top Skills') || ''),
    languages: parseBullets(sections.get('Languages') || ''),
    certifications: parseCertifications(sections.get('Certifications') || ''),
    patents: parseBullets(sections.get('Patents') || ''),
    projects: parseProjects(sections.get('Projects') || ''),
    recommendations: parseRecommendations(sections.get('Recommendations Received') || ''),
  }

  fs.writeFileSync(profileTsPath, generateTs(profile), 'utf8')
  console.log('Synced profile.md -> src/data/profile.ts')
}

main()
