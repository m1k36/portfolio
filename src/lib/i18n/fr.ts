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
        title: "Projet Alpha",
        description:
          "Plateforme SaaS full-stack avec collaboration en temps réel, construite avec Next.js et PostgreSQL.",
        details:
          "Ce projet consistait à architecturer une application SaaS multi-tenant scalable. Les défis principaux ont inclus la synchronisation en temps réel via WebSockets, la mise en place d'un système de permissions robuste et l'optimisation des requêtes pour les accès concurrents. La plateforme prend en charge l'édition collaborative de documents, le contrôle d'accès basé sur les rôles et la facturation automatisée via Stripe.",
        link: "https://github.com/m1k36",
      },
      {
        title: "Projet Beta",
        description:
          "Outil CLI open-source pour automatiser les workflows des développeurs. 500+ étoiles GitHub.",
        details:
          "Un outil en ligne de commande développé en Node.js et TypeScript qui automatise des tâches répétitives telles que le scaffolding, le linting et les pipelines de déploiement. Le projet suit une architecture par plugins, facilitant son extension. Il a rencontré un fort intérêt dans la communauté open-source et a atteint 500+ étoiles sur GitHub en quelques mois.",
        link: "https://github.com/m1k36",
      },
      {
        title: "Projet Gamma",
        description:
          "Boutique e-commerce avec CMS personnalisé, optimisée pour les Core Web Vitals.",
        details:
          "Un front-end e-commerce performant développé avec React et Tailwind, intégrant un CMS headless pour la gestion des produits et un tunnel de paiement via Stripe. Une attention particulière a été portée aux performances : le site obtient un score Lighthouse parfait et respecte tous les seuils Core Web Vitals. Inclut le filtrage produit, la persistance du panier et un tableau de bord administrateur.",
        link: "https://github.com/m1k36",
      },
      {
        title: "Projet Delta",
        description:
          "API REST alimentant une application mobile avec plus de 10 000 utilisateurs actifs.",
        details:
          "Une API REST de niveau production développée avec Node.js, conteneurisée avec Docker et utilisant Redis pour la mise en cache et la gestion des sessions. Conçue pour gérer une forte concurrence, l'API sert un client mobile avec plus de 10 000 utilisateurs actifs quotidiens. Elle inclut l'authentification JWT, la limitation de débit, le traitement de tâches en arrière-plan et une journalisation détaillée.",
        link: "https://github.com/m1k36",
      },
      {
        title: "Projet Epsilon",
        description:
          "Système de design et bibliothèque de composants utilisés dans 3 produits internes.",
        details:
          "Une bibliothèque de composants React partagée, développée avec Storybook et TypeScript, adoptée dans 3 produits internes. Le système standardise les patterns UI, applique les règles d'accessibilité et est livré avec des tests de régression visuelle automatisés. Chaque composant est entièrement documenté avec des exemples d'utilisation, des tableaux de props et des design tokens alignés avec la charte graphique.",
        link: "https://github.com/m1k36",
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
