export interface Role {
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

export const profile = {
  name: 'Attila Szabo',
  title: 'Engineering Leader | Simulation & AI Systems | Software & Platform Engineering | Technical & Delivery Leadership',
  location: 'Greater Calgary Metropolitan Area',
  email: 'attilaszaboo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/attilaszaboo',

  summary: [
    'Engineering leader with 25+ years of experience building and evolving complex simulation and platform systems.',
    "Across NVIDIA Omniverse and Autodesk 3ds Max, I've operated at the intersection of technical architecture, delivery ownership, and team development — setting SDK standards, leading large-scale codebase hardening efforts (7M+ LOC), improving engineering quality systems, and driving predictable execution across cross-functional teams.",
    'While serving as an Agile Product Owner, I functioned as the accountable engineering delivery lead for a cross-functional team, owning sprint commitments, negotiating scope, influencing architecture, and mentoring engineers — in an environment where people management was intentionally separated from delivery leadership to preserve healthy team dynamics.',
    "More recently at NVIDIA, I've focused on engineering execution and operational excellence across simulation and rendering teams, including designing AI-assisted workflows that reduced triage effort by ~90% and improved backlog health.",
    "I'm particularly interested in engineering leadership roles within simulation, AI-enabled systems, and platform-focused organizations — where strong technical architecture and thoughtful team development go hand in hand.",
  ],

  experience: [
    {
      name: 'NVIDIA',
      duration: '3 years 11 months',
      logo: '/logos/nvidia_logo.jfif',
      roles: [
        {
          title: 'Senior Technical Program Manager – Platform & Simulation Systems, Omniverse',
          period: 'March 2025 – January 2026',
          location: 'Calgary, AB',
          description: null,
          bullets: [
            "Led engineering execution alignment across 4 platform teams within Omniverse's simulation and rendering stack, proactively surfacing risks and resolving cross-team dependencies impacting delivery quality.",
            'Improved delivery predictability by introducing structured reporting rhythms and execution checkpoints across interdependent engineering teams.',
            'Designed and deployed an AI-assisted defect triage workflow, reducing expert triage effort by ~90% while improving backlog health and time-to-resolution.',
            'Provided data-driven delivery insights to engineering and product leadership, influencing prioritization and scope tradeoffs.',
          ],
        },
        {
          title: 'Senior Software Developer – Omniverse, Simready / Asset Validation / AI Engineering',
          period: 'March 2022 – March 2025',
          location: 'Calgary, Alberta, Canada',
          description:
            "Senior engineer contributing to simulation-ready asset pipelines and AI-enabled tooling within Omniverse's developer platform.",
          bullets: [
            'Built AI-assisted pipelines to classify 3D robot assets and infer component structure, enabling automated conversion of OpenUSD assets into simulation-ready formats.',
            'Created Python-based APIs for converting OpenUSD assets into simulation-ready representations, and demonstrated them through a proof-of-concept Omniverse Kit extension used by ISV engineering teams.',
            'Designed Asset Validator rules to ensure 3D assets matched the requirements and profiles of multiple simulation runtimes, reducing downstream failures.',
            {
              text: "Enhanced Pixar's OpenUSD USDView attribute editor with resolved-label display, improving asset inspection and debugging workflows (merged PR #3300).",
              href: 'https://github.com/PixarAnimationStudios/OpenUSD/pull/3300',
            },
          ],
        },
      ],
    },
    {
      name: 'Autodesk',
      duration: '23 years',
      logo: '/logos/autodesk_logo.jfif',
      roles: [
        {
          title: 'Agile Product Owner / Engineering Delivery Lead – 3ds Max',
          period: '2017 – 2022',
          location: 'Greater Montreal Metropolitan Area',
          description: null,
          bullets: [
            'Functioned as accountable engineering delivery lead for a cross-functional team of 8 (engineers, architect, QA, UX), owning sprint commitments and delivery outcomes.',
            'Negotiated scope and timelines through structured requirement decomposition and capacity modeling, improving roadmap predictability.',
            'Assigned work, reviewed designs prior to implementation, and influenced architectural direction across platform initiatives.',
            'Drove platform security hardening initiatives, developing Safe Scene Script Execution and 3ds Max Security Tools to mitigate arbitrary code execution risks across desktop and cloud workflows.',
            'Led modernization efforts bringing Python support and improving the Python API (pymxs), strengthening the developer ecosystem.',
            'Recruited, mentored, and provided structured feedback to interns and contractors, with multiple interns converting to full-time contributors.',
            'Addressed performance challenges by distinguishing between skill gaps and motivation issues, adjusting scope or pairing for mentorship.',
          ],
        },
        {
          title: 'Principal Software Developer / Software Security Champion / Senior Software Developer – 3ds Max',
          period: 'March 1999 – 2019',
          location: 'Montreal, Canada Area',
          description: null,
          bullets: [
            'Led initiatives that increased product stability by ~70% and reduced startup time by ~50%, significantly improving user and internal team productivity.',
            'Set technical standards for the 3ds Max C++ SDK, ensuring binary backward compatibility across releases and supporting a large external developer ecosystem.',
            'Designed and led security hardening strategy for a 7M+ LOC codebase, significantly improving platform security posture.',
            'Contributed to core platform features (Xrefs), SDK evolution, and automated test frameworks, influencing long-term architectural direction.',
          ],
        },
      ],
    },
    {
      name: 'Softimage',
      duration: '1 year',
      roles: [
        {
          title: 'Software Developer',
          period: '1997 – 1998',
          location: null,
          description:
            "Implemented features and maintained XSI, Softimage's 3D animation and modeling software package. Improved object and sub-object selection, scene explorer, and animation controls.",
          bullets: [],
        },
      ],
    },
  ] as Company[],

  education: [
    {
      school: 'Concordia University',
      degree: 'Master of Computer Science',
      field: 'Software Engineering and Computer Graphics',
      period: '2005 – 2008',
      logo: '/logos/concordia_university_logo.jfif',
    },
    {
      school: 'Technical University of Cluj Napoca',
      degree: 'B.Sc., Computer Science',
      field: null,
      period: '1987 – 1992',
      logo: '/logos/1631391351421.jfif',
    },
  ] as Education[],

  skills: [
    'Engineering Management',
    'Software Architecture',
    'Technical Leadership',
    'Cross-Functional Leadership',
    'AI and Simulation Systems',
  ],

  expertise: [
    {
      area: 'Languages',
      items: ['C++', 'Python'],
    },
    {
      area: 'Domains',
      items: ['OpenUSD', 'NVIDIA Omniverse', 'SDK and plugin systems'],
    },
    {
      area: 'System Exposure',
      items: ['GPU hardware and kernel execution'],
    },
    {
      area: 'Execution and Tooling',
      items: ['Jira', 'Confluence', 'CI/CD pipelines', 'Automated benchmarking'],
    },
    {
      area: 'AI/ML',
      items: ['LLM training fundamentals', 'LLM inference fundamentals', 'Agentic AI', 'LLM-assisted workflow automation'],
    },
  ] as ExpertiseGroup[],

  languages: ['English', 'French', 'Hungarian', 'Romanian'],

  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      date: 'March 2026',
      href: 'https://www.credly.com/badges/f0863f7a-b473-490d-99b1-41c6c4e79fe1/linked_in_profile',
      logo: '/logos/amazon_web_services_logo.jfif',
    },
    {
      name: 'Agentic AI',
      issuer: 'DeepLearning.AI',
      date: 'October 2025',
      href: 'https://learn.deeplearning.ai/certificates/ec663e90-88ae-442f-ba6c-c70829eb456e',
      logo: '/logos/deeplearningai_logo.jfif',
    },
    {
      name: 'Retrieval Augmented Generation (RAG)',
      issuer: 'DeepLearning.AI',
      date: 'October 2025',
      href: 'https://www.coursera.org/account/accomplishments/records/QB52DIBMKGJM',
      logo: '/logos/deeplearningai_logo.jfif',
    },
    {
      name: 'Neural Networks and Deep Learning',
      issuer: 'DeepLearning.AI',
      date: 'April 2022',
      href: 'https://coursera.org/verify/6CFJRLRLTRRD',
      logo: '/logos/deeplearningai_logo.jfif',
    },
    { name: 'Machine Learning Foundations: A Case Study Approach' },
    { name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization' },
    { name: 'Agile Product Owner Role: Foundations' },
    { name: 'Stay Lean with Kanban' },
  ] as Certification[],

  patents: ['Modifying subobjects of geometry objects based on per-subobject objects'],

  projects: [
    {
      name: 'GPU Study Notes',
      period: 'February 2026 – March 2026',
      role: 'Independent project',
      description:
        'Study notes about GPU architecture and software layers, focused on how changes across the stack affect workload performance and architectural trade-offs.',
      href: 'https://github.com/attilaszaboo/gpu-study-notes',
    },
    {
      name: 'AI Assistant Bug Triage System',
      period: 'August 2025 – January 2026',
      role: 'Senior Technical Program Manager, NVIDIA Omniverse',
      description:
        'Designed and deployed an AI-assisted defect triage workflow, reducing expert triage effort by ~90%. The system used team context, bug metadata, source code, and crafted prompts to route bugs to the correct team with a confidence score.',
    },
    {
      name: 'Simready Asset Validation',
      period: 'March 2024 – March 2025',
      role: 'Senior Software Developer, NVIDIA Omniverse',
      description:
        'Worked with subject matter experts to progressively refine the Simready standard for ground truth labels, traffic lights, and environments for 3D assets used in autonomous vehicle simulations. Implemented corresponding asset validators.',
      href: 'https://docs.omniverse.nvidia.com/extensions/latest/ext_asset-validator.html',
    },
    {
      name: 'Safe Scene Script Execution',
      period: 'March 2020 – January 2021',
      role: 'Agile Product Owner / Engineering Delivery Lead, Autodesk 3ds Max',
      description:
        "Safe Scene Script Execution enhances 3ds Max's security by blocking scripted commands embedded in scene files if they have the potential for harmful action. Led vision definition, requirement balancing, user story creation, and stakeholder communication.",
      href: 'https://help.autodesk.com/view/3DSMAX/2022/ENU/?guid=GUID-7D0E9C58-0BA2-4D17-822E-A3962D68A2F1',
    },
    {
      name: '3ds Max Scene Security Tools',
      period: 'October 2018 – September 2020',
      role: 'Agile Product Owner / Engineering Delivery Lead, Autodesk 3ds Max',
      description:
        'Protect 3ds Max users from known malicious 3rd party scripts embedded in scene files. First-ever plugin built and released for multiple versions of 3ds Max simultaneously. Downloaded tens of thousands of times with a 5-star rating.',
      href: 'https://apps.autodesk.com/3DSMAX/en/Detail/Index?id=7342616782204846316&appLang=en&os=Win64',
    },
    {
      name: 'Scene File Save Performance Improvements',
      period: 'June 2021 – November 2021',
      role: 'Agile Product Owner / Engineering Delivery Lead, Autodesk 3ds Max',
      description:
        '3ds Max scene files used in production can take several minutes to load. Starting with 3ds Max 2022 Update 3, they load more than twice as fast. Helped prioritize and de-risk delivery while coordinating internal and external stakeholder communication.',
    },
  ] as Project[],

  recommendations: [
    {
      name: 'Blago Taskov',
      role: 'Director @ NVIDIA | Next-Gen Real-time Photo-realistic Pathtracing',
      relationship: 'Blago worked with Attila on the same team',
      date: 'January 2026',
      text:
        'I worked with Atilla on Omniverse and was impressed by his execution and clarity. He drove complex, cross-team programs forward, improved our processes, and introduced practical AI workflows that saved real time without sacrificing quality. Strong communicator, highly reliable, and great at turning ambiguity into results. I would gladly work with him again.',
    },
    {
      name: 'Hugo Windisch',
      role: 'Developer at Autodesk',
      relationship: 'Hugo reported to Attila',
      date: 'February 2022',
      text:
        'I worked in the 3dsMax core team for four years at Autodesk. This team specializes in less visible parts of 3dsMax like scripting (MAXScript, Python), software security, C++ SDK, and file IO. Attila was the technical product owner for this team, acting as a tech lead with the developers and as a contact point for users. His tech lead work helped simplify many difficult situations and was highly appreciated by the team. His interview approach with customers was also very effective and consistently led to more customer-friendly solutions than initially envisioned.',
    },
    {
      name: 'Meg Valentine',
      role: 'Senior Enterprise Customer Success Manager | Program Manager',
      relationship: 'Meg worked with Attila on different teams',
      date: 'February 2022',
      text:
        'I had the pleasure of working with Attila Szabo when he worked as the Technical Product Owner of 3ds Max at Autodesk. He spent months in requirements gathering, communications, and validation sessions with major enterprise customers in game production pipelines. Customers repeatedly praised his organization, communication, insistence on excellence, and thoroughness. I highly recommend Attila and look forward to seeing what great steps he will take next.',
    },
    {
      name: 'Changsoo Eun',
      role: 'An artist who also makes tools for artists',
      relationship: 'Beta tester for 3ds Max',
      date: 'February 2022',
      text:
        'Attila is great at solving complex customer problems, advocating for users, and focusing on quality. I have known him for years as a 3ds Max beta tester. As PO of the core team, he balanced many different user requests and communicated very clearly with a calm voice. He consistently sought complete solutions instead of isolated features.',
    },
    {
      name: 'Kelcey Simpson',
      role: 'LX, DX and User Experience Design and Strategy',
      relationship: 'Kelcey worked with Attila on the same team',
      date: 'February 2022',
      text:
        'I worked with Attila in many of his roles at Autodesk. He is a brilliant problem solver and can effectively communicate opportunities and constraints to non-technical partners. He brings passion, wisdom, and expertise, and is direct about what is needed while finding pragmatic ways to deliver it.',
    },
    {
      name: 'Stephane Beaule',
      role: 'Retired',
      relationship: 'Worked with Attila on the same team as Software Security Architect',
      date: 'February 2022',
      text:
        'Attila has extensive software development experience and strong technical and project management skills. As product owner for the 3ds Max core agile team, he was excellent at managing and prioritizing a large backlog, communicating with customers, and driving critical security improvements in a large and mature codebase.',
    },
  ] as Recommendation[],
}
