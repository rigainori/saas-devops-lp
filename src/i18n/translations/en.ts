export const en = {
  meta: {
    title: "Git-first DevOps for SaaS",
    description: "Streamline your SaaS operations with Git-first DevOps. We organize deployments, environment management, and operational workflows into reproducible systems."
  },
  hero: {
    title: "Build reliable SaaS deployments with Git-first DevOps",
    subtitle: "Deployments, environment management, operational workflows.",
    subtitleStrong: "A state where changes can be safely and continuously delivered",
    subtitleEnd: " — designed and maintained for growing SaaS teams.",
    summary: "We organize Git, CI, environment configuration, and deployment procedures to build",
    summaryStrong: "a SaaS foundation that maintains development speed without incidents",
    summaryEnd: ".",
    principles: [
      "Git-centric change and deployment flow organization",
      "CI/CD and environment configuration standardization and maintenance",
      "Design with continuous deployment and operations in mind",
      "Building systems with future automation in view"
    ],
    cta: "Get a free 30-minute DevOps consultation"
  },
  problems: {
    title: "Does this sound familiar?",
    note: "Many SaaS companies find that the connection between development and operations becomes unstable as they enter their growth phase.",
    list: [
      "Deployment procedures vary by person, causing anxiety every time",
      "GitHub Actions has become too complex for anyone to understand fully",
      "Environment configurations and their intentions aren't tracked in Git",
      "Incident response and rollbacks are ad-hoc",
      "You want to speed up development, but changes feel risky"
    ]
  },
  approach: {
    title: "Our Approach",
    intro: "Starting from your Git repository, we establish",
    introStrong: "a consistent DevOps framework for changes, deployments, and operations",
    introEnd: ".",
    list: [
      "CI/CD design and organization based on GitHub Actions",
      "Role clarification for production/staging environments",
      "Rules and guardrails for safe change deployment",
      "Workflow design with deployment and rollback in mind",
      "Review and improvement of operations, monitoring, and alerting"
    ],
    note: "Not just \"standing by\" — we",
    noteStrong1: "continuously design and maintain a state where changes don't break things",
    noteMiddle: ". Instead of starting from scratch with every change, we provide",
    noteStrong2: "DevOps that builds on accumulated decisions and designs",
    noteEnd: "."
  },
  target: {
    title: "Who This Is For",
    note: "We work with SaaS companies that meet the following criteria:",
    list: [
      "SaaS (B2B or B2C)",
      "Small teams of 1-5 engineers",
      "Continuous production deployments and changes",
      "GitHub + cloud environment (AWS, etc. / cloud managed by customer)",
      "Growth phase, looking to organize operations and DevOps"
    ],
    exclusion: "* Not suitable for one-off landing pages or single-deployment services"
  },
  contact: {
    title: "Let's Talk",
    intro: "We'll review your current setup and development/operations flow to",
    introStrong: "identify what can be organized and systematized as DevOps",
    introEnd: " together.",
    note: "* We don't provide 24/7 first-response or on-call services. Our focus is on designing and improving your change and operations processes.",
    cta: "Book a free consultation"
  }
} as const;
