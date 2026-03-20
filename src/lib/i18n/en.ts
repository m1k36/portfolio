export const en = {
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    greeting: "Hello, I'm",
    description: "Full-stack web development student.",
  },
  about: {
    label: "01. About",
    title: "A bit about me",
    imagePlaceholder: "no image",
    cards: [
      {
        tag: "Profile",
        title: "Who am I?",
        text: [
          "I'm Mike Piot, a developer with a particular interest in building web and software applications, with a focus on clean code and practical solutions.",
          "Over time, I've gained experience with technologies like TypeScript, Python, and Java, through various projects where I've worked on both interfaces and backend logic.",
          "I enjoy designing and developing reliable applications, whether it's working with data, building user interfaces, or putting together complete, efficient, and maintainable systems.",
        ],
      },
      {
        tag: "Background",
        title: "My journey",
        text: [
          "I got interested in computer science fairly early, back in high school, starting to learn on my own. At first, it was mostly curiosity: understanding how things work, testing, trying, sometimes getting it wrong, but always learning.",
          "Over time, that interest turned into a desire to create. I gradually moved toward application development, particularly in web and software. I've worked with languages like Python, TypeScript, and Java, using them across various projects both in school and in professional or personal contexts. That helped me discover different ways to design applications and better structure my work.",
          "Today, I enjoy working on concrete projects where I can really see the outcome of what I build. Whether it's applications, tools, or more complete systems, what drives me is building something useful, clean, and that holds up over time.",
        ],
      },
      {
        tag: "Passions",
        title: "Horse riding",
        photoCredit: {
          name: "Lemaire Laurent",
          url: "https://www.instagram.com/laurent_l.photographies?igsh=MThkOXdtank4cG5law==",
        },
        text: [
          "Outside of tech, I'm passionate about horse riding, an activity I've been practicing since I was young.",
          "I started with more classical disciplines, including show jumping and dressage, competing at several events including the French Championships. I also discovered mounted archery, a very different discipline that broadened my vision of equestrianism.",
          "This passion has been a part of me for a long time, and it felt only natural to share it here.",
        ],
      },
    ],
  },
  skills: {
    label: "02. Skills",
    title: "What I work with",
    intro:
      "A mix of web technologies and system languages I use daily, in class or on personal projects.",
  },
  projects: {
    label: "03. Projects",
    title: "Selected work",
    items: [
      {
        title: "Project Alpha",
        description:
          "A full-stack SaaS platform with real-time collaboration, built with Next.js and PostgreSQL.",
        details:
          "This project involved architecting a scalable multi-tenant SaaS application. Key challenges included implementing real-time sync with WebSockets, building a robust permission system, and optimizing database queries for concurrent users. The platform supports live document editing, role-based access control, and automated billing via Stripe.",
        link: "https://github.com/m1k36",
      },
      {
        title: "Project Beta",
        description: "Open-source CLI tool for automating developer workflows. 500+ GitHub stars.",
        details:
          "A command-line tool built in Node.js and TypeScript that automates repetitive dev tasks such as scaffolding, linting, and deployment pipelines. The project follows a plugin architecture, making it easy to extend. It gained traction in the open-source community and reached 500+ stars on GitHub within a few months of release.",
        link: "https://github.com/m1k36",
      },
      {
        title: "Project Gamma",
        description: "E-commerce storefront with custom CMS, optimized for Core Web Vitals.",
        details:
          "A performant e-commerce front-end built with React and Tailwind, featuring a headless CMS for product management and a Stripe-integrated checkout flow. Special attention was paid to performance: the site achieves a perfect Lighthouse score and passes all Core Web Vitals thresholds. Includes product filtering, cart persistence, and an admin dashboard.",
        link: "https://github.com/m1k36",
      },
      {
        title: "Project Delta",
        description: "REST API powering a mobile app with 10k+ active users.",
        details:
          "A production-grade REST API built with Node.js, containerized with Docker, and using Redis for caching and session management. Designed to handle high concurrency, the API serves a mobile client with 10k+ daily active users. Features include JWT authentication, rate limiting, background job processing, and detailed logging.",
        link: "https://github.com/m1k36",
      },
      {
        title: "Project Epsilon",
        description: "Design system and component library used across 3 internal products.",
        details:
          "A shared React component library built with Storybook and TypeScript, adopted across 3 internal products. The system standardizes UI patterns, enforces accessibility guidelines, and ships with automated visual regression tests. Each component is fully documented with usage examples, props tables, and design tokens aligned with the brand guidelines.",
        link: "https://github.com/m1k36",
      },
    ],
  },
  contact: {
    label: "04. Contact",
    title: "Get in touch",
    description: "Feel free to reach out by email or on socials.",
  },
  footer: {
    rights: "Piot Mike",
  },
};
