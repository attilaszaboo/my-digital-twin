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
  name: "Attila Szabo",
  title: "Engineering Leader | Simulation & AI Systems | Software & Platform Engineering | Technical & Delivery Leadership",
  location: "*2017 – 2022 (5 years) · Greater Montreal Metropolitan Area*",
  email: "attilaszaboo@gmail.com",
  linkedin: "https://www.linkedin.com/in/attilaszaboo",
  summary: [
    "Engineering leader with 25+ years of experience building and evolving complex simulation and platform systems.",
    "Across NVIDIA Omniverse and Autodesk 3ds Max, I've operated at the intersection of technical architecture, delivery ownership, and team development — setting SDK standards, leading large-scale codebase hardening efforts (7M+ LOC), improving engineering quality systems, and driving predictable execution across cross-functional teams.",
    "While serving as an Agile Product Owner, I functioned as the accountable engineering delivery lead for a cross-functional team, owning sprint commitments, negotiating scope, influencing architecture, and mentoring engineers — in an environment where people management was intentionally separated from delivery leadership to preserve healthy team dynamics.",
    "More recently at NVIDIA, I've focused on engineering execution and operational excellence across simulation and rendering teams, including designing AI-assisted workflows that reduced triage effort by ~90% and improved backlog health.",
    "I'm particularly interested in engineering leadership roles within simulation, AI-enabled systems, and platform-focused organizations — where strong technical architecture and thoughtful team development go hand in hand."
  ],
  experience: [
    {
      name: "NVIDIA",
      duration: "3 years 11 months",
      logo: "/logos/nvidia_logo.jfif",
      roles: [
        {
          title: "Senior Technical Program Manager – Platform & Simulation Systems, Omniverse",
          period: "March 2025 – January 2026",
          location: "Calgary, AB",
          description: null,
          bullets: [
            "Led engineering execution alignment across 4 platform teams within Omniverse's simulation and rendering stack, proactively surfacing risks and resolving cross-team dependencies impacting delivery quality.",
            "Improved delivery predictability by introducing structured reporting rhythms and execution checkpoints across interdependent engineering teams.",
            "Designed and deployed an AI-assisted defect triage workflow, reducing expert triage effort by ~90% while improving backlog health and time-to-resolution.",
            "Provided data-driven delivery insights to engineering and product leadership, influencing prioritization and scope tradeoffs."
          ]
        },
        {
          title: "Senior Software Developer – Omniverse, Simready / Asset Validation / AI Engineering",
          period: "March 2022 – March 2025",
          location: "Calgary, Alberta, Canada",
          description: "Senior engineer contributing to simulation-ready asset pipelines and AI-enabled tooling within Omniverse's developer platform.",
          bullets: [
            "Built AI-assisted pipelines to classify 3D robot assets and infer component structure, enabling automated conversion of OpenUSD assets into simulation-ready formats.",
            "Created Python-based APIs for converting OpenUSD assets into simulation-ready representations, and demonstrated them through a proof-of-concept Omniverse Kit extension used by ISV engineering teams.",
            "Designed Asset Validator rules to ensure 3D assets matched the requirements and profiles of multiple simulation runtimes, reducing downstream failures.",
            {
              text: "Enhanced Pixar's OpenUSD USDView's attribute editor with resolved-label display, improving asset inspection and debugging workflows (merged PR #3300).",
              href: "https://github.com/PixarAnimationStudios/OpenUSD/pull/3300"
            }
          ]
        }
      ]
    },
    {
      name: "Autodesk",
      duration: "23 years",
      logo: "/logos/autodesk_logo.jfif",
      roles: [
        {
          title: "Agile Product Owner / Engineering Delivery Lead – 3ds Max",
          period: "2017 – 2022",
          location: "Greater Montreal Metropolitan Area",
          description: null,
          bullets: [
            "Functioned as accountable engineering delivery lead for a cross-functional team of 8 (engineers, architect, QA, UX), owning sprint commitments and delivery outcomes.",
            "Negotiated scope and timelines through structured requirement decomposition and capacity modeling, improving roadmap predictability.",
            "Assigned work, reviewed designs prior to implementation, and influenced architectural direction across platform initiatives.",
            "Drove platform security hardening initiatives, developing Safe Scene Script Execution and 3ds Max Security Tools to mitigate arbitrary code execution risks across desktop and cloud workflows, strengthening protection for a large user base.",
            "Led modernization efforts bringing Python support and improving the Python API (pymxs), strengthening the developer ecosystem.",
            "Recruited, mentored, and provided structured feedback to interns and contractors, with multiple interns converting to full-time contributors.",
            "Addressed performance challenges by distinguishing between skill gaps and motivation issues, adjusting scope or pairing for mentorship to improve outcomes."
          ]
        },
        {
          title: "Principal Software Developer / Software Security Champion / Senior Software Developer – 3ds Max",
          period: "March 1999 – 2019",
          location: "Montreal, Canada Area",
          description: null,
          bullets: [
            "Led initiatives that increased product stability by ~70% and reduced startup time by ~50%, significantly improving user and internal team productivity.",
            "Set technical standards for the 3ds Max C++ SDK, ensuring binary backward compatibility across releases and supporting a large external developer ecosystem.",
            "Designed and led security hardening strategy for a 7M+ LOC codebase, significantly improving platform security posture.",
            "Contributed to core platform features (Xrefs), SDK evolution, and automated test frameworks, influencing long-term architectural direction."
          ]
        }
      ]
    },
    {
      name: "Softimage",
      duration: "",
      roles: [
        {
          title: "Software Developer",
          period: "1997 – 1998",
          location: null,
          description: "Implemented features and maintained XSI, Softimage's 3D animation and modeling software package. Improved object and sub-object selection, scene explorer, and animation controls. ---",
          bullets: []
        }
      ]
    }
  ],
  education: [
    {
      school: "Concordia University",
      degree: "Master of Computer Science",
      field: "Software Engineering and Computer Graphics",
      period: "2005 – 2008",
      logo: "/logos/concordia_university_logo.jfif"
    },
    {
      school: "Technical University of Cluj Napoca",
      degree: "B.Sc.",
      field: "Computer Science",
      period: "1987 – 1992",
      logo: "/logos/1631391351421.jfif"
    }
  ],
  expertise: [
    {
      area: "Languages",
      items: [
        "C++",
        "Python"
      ]
    },
    {
      area: "Domains",
      items: [
        "OpenUSD",
        "NVIDIA Omniverse",
        "SDK & plugin systems"
      ]
    },
    {
      area: "System Exposure",
      items: [
        "GPU hardware and kernel execution"
      ]
    },
    {
      area: "Execution & Tooling",
      items: [
        "Jira",
        "Confluence",
        "CI/CD pipelines",
        "automated benchmarking"
      ]
    },
    {
      area: "AI/ML",
      items: [
        "LLM training & inference fundamentals",
        "Agentic AI",
        "applied LLM-assisted workflow automation"
      ]
    }
  ],
  skills: [
    "Engineering Management",
    "Sofwtare Architecture",
    "Technical Leadership",
    "Cross-Functional Leadership",
    "AI And Simulation Systems"
  ],
  languages: [
    "English",
    "French",
    "Hungarian",
    "Romanian"
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      date: "March 2026",
      href: "https://www.credly.com/badges/f0863f7a-b473-490d-99b1-41c6c4e79fe1/linked_in_profile",
      logo: "/logos/amazon_web_services_logo.jfif"
    },
    {
      name: "Agentic AI",
      issuer: "DeepLearning.AI",
      date: "October 2025",
      href: "https://learn.deeplearning.ai/certificates/ec663e90-88ae-442f-ba6c-c70829eb456e",
      logo: "/logos/deeplearningai_logo.jfif"
    },
    {
      name: "Retrieval Augmented Generation (RAG)",
      issuer: "DeepLearning.AI",
      date: "October 2025",
      href: "https://www.coursera.org/account/accomplishments/records/QB52DIBMKGJM",
      logo: "/logos/deeplearningai_logo.jfif"
    },
    {
      name: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "April 2022",
      href: "https://coursera.org/verify/6CFJRLRLTRRD",
      logo: "/logos/deeplearningai_logo.jfif"
    },
    {
      name: "Machine Learning",
      issuer: "Coursera",
      date: "Nov 2015",
      href: "https://www.coursera.org/account/accomplishments/verify/V7JRWUP6QGSH"
    },
    {
      name: "Stay Lean with Kanban"
    },
    {
      name: "Agile Product Owner Role: Foundations"
    },
    {
      name: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization"
    }
  ],
  patents: [
    "Modifying subobjects of geometry objects based on per-subobject objects"
  ],
  projects: [
    {
      name: "GPU Study Notes",
      period: "February 2026 – March 2026",
      role: "None",
      description: "Study notes about how GPUs and the software layers that bring them to life work together, and how subtle changes in any of the layers of the software stack affect the performance of GPU workfloads. The goal of these notes is to build up the mental model and vocabulary needed to engage confidently and meaningfully in technical conversations, and understand architectural trade-offs across GPU platforms.",
      href: "https://github.com/attilaszaboo/gpu-study-notes"
    },
    {
      name: "Scene File Save Performance improvements",
      period: "June 2021 – November 2021",
      role: "Agile Product Owner / Engineering Delivery Lead - 3ds Max at Autodesk",
      description: "3ds Max Scene Files used in production can take several minutes to load (10 min or more). Thanks to Larry Minton's genius, they load more than twice as fast starting with 3ds Max 2022 Update 3. More improvements will be released soon with the next major release of 3ds Max. As a technical product owner, I helped my agile team prioritize and de-risk this project, communicate with external and internal stakeholders about achievements and status."
    },
    {
      name: "Safe Scene Script Execution",
      period: "March 2020 – January 2021",
      role: "Agile Product Owner / Engineering Delivery Lead - 3ds Max at Autodesk",
      description: "Safe Scene Script Execution enhances 3ds Max's security by blocking scripted commands embedded in 3ds Max scene files if they have the potential for harmful action. This feature complements the Scene Security Tools, because it prevents new, never fingerprinted malicious scripts from executing. As a technical product owner, I led I worked with domain experts, UX specialists and users to define the vision and mission for the project, brainstormed and balanced requirements that were often at odds with each other, created user stories with acceptance criteria, prioritized backlog to ensure critical functionality was delivered in a timely manner, informed external and internal stakeholders of risks and status.",
      href: "https://help.autodesk.com/view/3DSMAX/2022/ENU/?guid=GUID-7D0E9C58-0BA2-4D17-822E-A3962D68A2F1"
    },
    {
      name: "3ds Max Scene Security Tools",
      period: "October 2018 – September 2020",
      role: "Agile Product Owner / Engineering Delivery Lead - 3ds Max at Autodesk",
      description: "The Scene Security Tools protect 3ds Max users from known malicious 3rd party scripts embedded in scene files (.max) and user scripts, by alerting the user to the presence of these and allowing them to let the tool remove them. As a software security champion and technical product owner, I helped the product leadership of 3ds Max to understand the need for such a tool to protect the personal data and intellectual property of our customers, reduce the volume of support cases generated by the occurrence of the malicious scripts. I worked on the design, planning and release activities of this tool together with engineers, UX specialists, legal partners, and key customers. This tool was the first ever plugin for 3ds Max that was built and released for multiple versions of 3ds Max. Over the years, it was downloaded tens of thousands of time and it has a 5 star ranking based on large number of reviews.",
      href: "https://apps.autodesk.com/3DSMAX/en/Detail/Index?id=7342616782204846316&appLang=en&os=Win64"
    },
    {
      name: "Simready Asset Validation",
      period: "March 2024 – March 2025",
      role: "Senior Software Developer – Omniverse, Simready / Asset Validation / AI Engineering",
      description: "I worked with subjecvt matter experts to progressively refine the simready standard for ground thruth labels, traffic light and environments for 3D assets used in autonomous vehicle (AV) simualtions. I implemented corresponding asset validators.",
      href: "https://docs.omniverse.nvidia.com/extensions/latest/ext_asset-validator.html"
    },
    {
      name: "AI Assisted Bug Triage System",
      period: "August 2025 – January 2026",
      role: "Senior Technical Program Manager – Platform & Simulation Systems, Omniverse",
      description: "Designed and deployed an AI-assisted defect triage workflow, reducing expert triage effort by ~90% while improving backlog health and time-to-resolution. The system's context was: Detailed description of each team the untriaged bugs had to be assigned to, including the team members user names, the mission of the team, the current functional areas owned by the team All the details about the bug to be triaged, including: summary, description, comments, assignee, status, etc. The source code code (git repo) the bug pertained to I crafted a prompt (rules) that guided the LLM to make a prediction about which team should the bug be routed to, why and with what level of confidence."
    }
  ],
  recommendations: [
    {
      name: "Blago Taskov",
      role: "Director @ NVIDIA | Next-Gen Real-time Photo-realistic Pathtracing",
      relationship: "Bloago worked with Attila on the same team",
      date: "January 2026",
      text: "I worked with Atilla on Omniverse and was impressed by his execution and clarity. He drove complex, cross-team programs forward, improved our processes, and introduced practical AI workflows that saved real time without sacrificing quality. Strong communicator, highly reliable, and great at turning ambiguity into results. I would gladly work with him again."
    },
    {
      name: "Hugo Windisch",
      role: "Developer at Autodesk",
      relationship: "Hugo reported to Attila",
      date: "February 2022",
      text: "I worked in the 3dsMax core team for four years at Autodesk. This team specializes in less visible parts of 3dsMax like scripting (MAXScript, Python), software security, C++ SDK, and file IO. Attila was the technical product owner for this team, acting as a tech lead with the developers (making every one benefit from his extensive knowledge of the 3dsMax code base), and as a contact point for users (core team users being mostly technical directors at large companies like Blizzard, Ubisoft, ILM). Attila's tech lead work with developers helped simplify things in a lot of situations and was highly appreciated by the team. His approach in interviewing customers was also very effective: even in situations where he might have had a well defined opinion on a subject, he would never try to influence users during interviews. Instead he would make sure they expressed their needs and preferences and increase their awareness of possible implications. The result of these meetings was always a more customer friendly solution significantly different from what was initially envisioned. Attila's role as a moderator in customer meetings lead to better solutions and was highly beneficial to the product in general."
    },
    {
      name: "Meg Valentine",
      role: "Senior Enterprise Customer Success Manager | Customer Experience Program Lead | Sr. Program Manager | Revenue Enablement | RevOps | CSOps",
      relationship: "Meg worked with Attila but on different teams",
      date: "February 2022",
      text: "I had the pleasure of working with Attila Szabo when he worked as the Technical Product Owner of 3ds Max at Autodesk. I was a Sr. CSM at Autodesk working with Enterprise customers using Maya, 3ds Max, and MotionBuilder in their game production pipelines. Attila led a team of developers who improved the way that 3ds Max was used at a several large Enterprise customers. Most of this work he did personally. He spent several months in meetings, and back and forth communications and validation sessions with these high profile customers - customers who were making some of the worlds most popular video games. The way that Attila worked was through detailed requirements gathering, and customized communications as well as regular zoom calls with the customer product leads. And Attila worked with these customers, they couldn't hold back their appreciation and enthusiasm for the process that Attila drove over the several months-long process. In fact, they continue to tell us about his organization skills, his clear communication style, his insistence on excellence and his total thoroughness. These customers are Attila's biggest fan. And it is due to his hard work, persistence, detail-orientation and diligence that we can say that, today, they are satisfied customers. I highly recommend Attila and look forward to seeing what great steps he will take next."
    },
    {
      name: "Changsoo Eun",
      role: "An artist who also makes tools for artists",
      relationship: "Beta tester for 3ds Max",
      date: "February 2022",
      text: "Attila is great at solving complex customer problems, advocating for and communicating with users and focusing on quality. I have known him for 9 years as a 3ds Max beta tester. As the PO of core team, he had kept a great balance between many different user requests and communicate very clearly with a calm voice. He paid a great attention to the overall users need and tried to provide a solution instead of giving just an isolated feature. I highly recommend Attila, and any company would be lucky to have him."
    },
    {
      name: "Kelcey Simpson",
      role: "LX, DX and User Experience Design and Strategy",
      relationship: "Kelcey worked with Attila on the same team (3ds Max)",
      date: "February 2022",
      text: "I worked with Attila in many of his roles at Autodesk, when he was building tools as well as leading initiatives and teams. He’s a brilliant problem solver, and he can effectively communicate opportunities and constraints to non-technical partners like me. I learned so much from him, about how things work, and why, which led to much more effective collaboration. I knew I could depend on Attila to bring his passion, wisdom and expertise to any situation, and I enjoyed poking holes in each other’s ideas until we landed on the tightest, most pragmatic answer to the problem at hand. Attila is direct about what’s needed, and effective at finding a way to deliver it. It made him a good Product Owner. He can analyze the present, communicate the future, and develop and execute a tactical plan that engages a team. I wouldn’t hesitate to work with him again and again."
    },
    {
      name: "Stephane Beaule",
      role: "Retired",
      relationship: "Worked with Attila on the same team (3ds Max) as Software Security Architect",
      date: "Debruary 2022",
      text: "Attila has an extensive software development experience. He has strong technical and project management skills. In recent years he has been a product owner for the core agile team on 3ds Max. I had the pleasure of working with him for the last two years. His skill at managing and prioritizing a large backlog is impressive. He is also great at communicating and staying in touch with customers. We had the difficult goal of improving security in a large 20 year old software and he was instrumental to our success."
    }
  ]
}
