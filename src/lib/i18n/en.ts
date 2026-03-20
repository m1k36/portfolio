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
        title: "Portfolio",
        description: "Personal portfolio to showcase my projects and skills.",
        details:
          "Website built with Next.js and TypeScript, hosted on Vercel. Designed to present my work, skills, and contact information in a responsive and modern way. Clean interface with smooth navigation, optimized for performance.",
        link: "https://github.com/m1k36/portfolio",
        tags: ["Next.js", "TypeScript", "Vercel"],
      },
      {
        title: "Tiktok bot",
        description: "Fully automated TikTok story telling video generator.",
        details:
          "Python project capable of generating Reddit-style story telling videos. Uses text-to-speech synthesis and video generation to produce content ready to be published on TikTok.",
        link: "https://github.com/m1k36/tiktok-bot",
        tags: ["Python", "MoviePy", "Edge-TTS"],
      },
      {
        title: "Skyblock Utils",
        description: "Interface to fetch and display information from the Hypixel Skyblock server.",
        details:
          "Next.js application that lets players track in-game events such as ongoing and past elections, or the monthly bingo. Intuitive and responsive interface to easily browse important server information.",
        link: "https://github.com/m1k36/skyblock-utils-m1k36",
        tags: ["Next.js", "TypeScript", "Vercel"],
      },
      {
        title: "API Library",
        description: "REST API to manage a library (student project).",
        details:
          "API built with Express and TypeScript to handle communication with a database for managing library resources. Project containerized with Docker to simplify deployment and testing.",
        link: "https://github.com/m1k36/api-library",
        tags: ["Node.js", "Express", "Docker"],
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
