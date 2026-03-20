export const fr = {
  nav: {
    links: [
      { label: "À propos", href: "#about" },
      { label: "Compétences", href: "#skills" },
      { label: "Projets", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    greeting: "Bonjour, je suis",
    description: "Etudiant développeur full-stack en web.",
  },
  about: {
    label: "01. À propos",
    title: "Un peu sur moi",
    imagePlaceholder: "pas d'image",
    cards: [
      {
        tag: "Profil",
        title: "Qui suis-je ?",
        text: [
          "Je suis Mike Piot, développeur avec un intérêt particulier pour la création d’applications web et logicielles, en mettant l’accent sur un code propre et des solutions concrètes. ",
          "Au fil du temps, j’ai acquis de l’expérience avec des technologies comme TypeScript, Python et Java, à travers différents projets où j’ai pu travailler aussi bien sur des interfaces que sur la logique côté back-end. ",
          "J’aime concevoir et développer des applications fiables, que ce soit pour manipuler des données, créer des interfaces utilisateur ou construire des systèmes complets, efficaces et maintenables. ",
        ],
      },
      {
        tag: "Parcours",
        title: "Mon parcours",
        text: [
          "Je me suis intéressé à l’informatique assez tôt, au lycée, en commençant à apprendre par moi-même. Au début, c’était surtout de la curiosité : comprendre comment les choses fonctionnent, tester, essayer, parfois me tromper… mais toujours apprendre. ",
          "Avec le temps, cet intérêt s’est transformé en envie de créer. Je me suis progressivement orienté vers le développement d’applications, notamment dans le web et le logiciel. J’ai travaillé avec des langages comme Python, TypeScript et Java, que j’ai utilisés dans différents projets, aussi bien en cours que dans un cadre professionnel ou personnel. Ça m’a permis de découvrir différentes façons de concevoir des applications et de mieux structurer mon travail. ",
          "Aujourd’hui, j’aime travailler sur des projets concrets, où je peux vraiment voir le résultat de ce que je développe. Que ce soit sur des applications, des outils ou des systèmes plus complets, ce qui m’intéresse, c’est de construire quelque chose d’utile, propre et qui fonctionne dans le temps. ",
        ],
      },
      {
        tag: "Passions",
        title: "Équitation",
        photoCredit: {
          name: "Lemaire Laurent",
          url: "https://www.instagram.com/laurent_l.photographies?igsh=MThkOXdtank4cG5law==",
        },
        text: [
          "En dehors de l’informatique, je me passionne pour l’équitation. C’est une activité que je pratique depuis que je suis jeune.",
          "J’ai ainsi pratiqué une équitation plus classique, avec le saut d’obstacles et le dressage, disciplines dans lesquelles j’ai participé à plusieurs compétitions, dont les championnats de France. J’ai également découvert le tir à l’arc à cheval, une discipline différente qui m’a permis d’élargir ma vision de l’équitation.",
          "Cette passion fait partie de moi depuis longtemps, et c’est naturellement pour cela que j’ai choisi de la présenter ici.",
        ],
      },
    ],
  },
  skills: {
    label: "02. Compétences",
    title: "Avec quoi je travaille",
    intro:
      "Un mélange de technologies web et de langages système que j'utilise au quotidien, en cours ou sur mes projets personnels.",
  },
  projects: {
    label: "03. Projets",
    title: "Travaux sélectionnés",
    items: [
      {
        title: "Portfolio",
        description: "Portfolio personnel pour présenter mes projets et compétences.",
        details:
          "Site web développé avec Next.js et TypeScript, hébergé sur Vercel. Permet de présenter mes réalisations, compétences et informations de contact de manière responsive et moderne. Interface fluide et design épuré, optimisé pour une navigation simple et rapide.",
        link: "https://github.com/m1k36/portfolio",
        tags: ["Next.js", "TypeScript", "Vercel"],
      },
      {
        title: "Tiktok bot",
        description: "Générateur de vidéos TikTok story telling entièrement automatisé.",
        details:
          "Projet Python capable de créer des vidéos de type story telling inspirées de Reddit. Utilise la synthèse vocale et la génération vidéo pour produire des contenus prêts à être publiés sur TikTok.",
        link: "https://github.com/m1k36/tiktok-bot",
        tags: ["Python", "MoviePy", "Edge-TTS"],
      },
      {
        title: "Skyblock Utils",
        description:
          "Interface pour récupérer et afficher des informations du serveur Hypixel Skyblock.",
        details:
          "Application Next.js qui permet aux joueurs de suivre les événements du jeu, comme les élections en cours et précédentes, ou le bingo du mois. Interface intuitive et responsive pour consulter facilement les informations importantes du serveur.",
        link: "https://github.com/m1k36/skyblock-utils-m1k36",
        tags: ["Next.js", "TypeScript", "Vercel"],
      },
      {
        title: "API Library",
        description: "API REST pour gérer une bibliothèque (projet étudiant).",
        details:
          "API développée avec Express et TypeScript pour permettre la communication avec une base de données afin de gérer les ressources d’une bibliothèque. Projet containerisé avec Docker pour faciliter le déploiement et les tests.",
        link: "https://github.com/m1k36/api-library",
        tags: ["Node.js", "Express", "Docker"],
      },
    ],
  },
  contact: {
    label: "04. Contact",
    title: "Me contacter",
    description: "N'hésitez pas à me contacter par mail ou sur les réseaux.",
  },
  footer: {
    rights: "Piot Mike",
  },
};
