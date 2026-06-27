export const translations = {
  pt: {
    hero: {
      greeting: "Olá! 👋",
      h1: {
        before1: "Engenharia ",
        span1: "Full Stack",
        after1: "",
        before2: "com foco em ",
        span2: "infraestrutura",
        after2: " e confiabilidade.",
      },
      sobreMimBtn: "Sobre mim",
      stats: ["anos de experiência", "projetos entregues", "tecnologias"],
    },
    bio: {
      heading: "Sobre mim",
      p1: "Meu nome é Hugo, sou desenvolvedor Full Stack e atuo na criação de aplicações web que equilibram boa experiência do usuário, qualidade de código e infraestrutura bem estruturada. Ao longo da minha trajetória, desenvolvi tanto o lado visual das aplicações quanto a parte técnica responsável pelo funcionamento e operação dos sistemas.",
      p2: "Tenho experiência no desenvolvimento de interfaces modernas, intuitivas e responsivas, sempre buscando unir boas práticas de UI/UX com desempenho e organização do código. Essa base em design me ajuda a pensar nas aplicações não apenas do ponto de vista técnico, mas também na experiência real de quem utiliza o sistema.",
      p3: "No lado de engenharia, trabalho com tecnologias do ecossistema web como PHP, Node.js e bancos de dados, participando da construção de sistemas robustos e integrações entre diferentes plataformas.",
      p4: "Também tenho forte interesse por infraestrutura e operação de aplicações, trabalhando com Docker, servidores Linux e ambientes containerizados. Essa experiência me permite atuar não apenas no desenvolvimento das aplicações, mas também na organização dos ambientes de execução, deploy e manutenção dos sistemas.",
      p5: "Grande parte da minha experiência está ligada ao desenvolvimento de e-commerces e plataformas digitais, principalmente utilizando Magento, WooCommerce e WordPress, participando tanto da implementação quanto da manutenção e evolução dessas soluções.",
      p6before: "Atualmente atuo como desenvolvedor na ",
      p6after:
        ", participando de projetos voltados para e-commerce e plataformas digitais. Entre os clientes atendidos estão marcas como Dumond, Kikos, Lightning Bolt, Catálogo Favorita, Redelease, Shopping Eldorado, DetonaShop e diversos outros.",
      p7: "Sou formado em Análise e Desenvolvimento de Sistemas e sigo em constante evolução profissional, estudando novas tecnologias relacionadas a desenvolvimento, arquitetura de software, infraestrutura e automação de ambientes.",
      p8before:
        "Ao longo da minha carreira também participei de diversos projetos de sites e e-commerces, incluindo soluções personalizadas desenvolvidas pela ",
      p8after:
        ". Além do trabalho profissional, também desenvolvo projetos pessoais e estudos voltados a novas tecnologias e melhorias na forma de construir e operar aplicações web.",
    },
    cards: {
      heading: {
        before: "Criando produtos digitais de forma",
        span1: "moderna",
        mid: " e de ",
        span2: "alta qualidade",
        after: ".",
      },
      items: [
        {
          title: "Deploy & Automação",
          desc: "Automatização de deploys, rotinas de entrega e padronização de ambientes para reduzir atrito entre desenvolvimento e produção.",
        },
        {
          title: "Infra & Containers",
          desc: "Uso prático de Docker e Linux para criar ambientes reproduzíveis, isolar serviços e executar aplicações otimizadas e com consistência.",
        },
        {
          title: "Desenvolvimento Full Stack",
          desc: "Experiência sólida em desenvolvimento web com foco em e-commerces e soluções completas usando PHP, Node.js, Docker, Linux, MySQL e JavaScript.",
        },
        {
          title: "Web & Mobile",
          desc: "Construção de aplicativos e sites que funcionem perfeitamente em diferentes plataformas e dispositivos. Oferecendo uma experiência perfeita aos usuários.",
        },
      ],
    },
    contato: {
      line1: "Me conte sobre seu",
      line2: "próximo projeto.",
      btn: "Entre em contato",
    },
    footer: {
      text: "Hugo Andrade © 2023 - presente. Todos os direitos reservados.",
    },
    experiencia: {
      heading: { before: "Experiência ", span: "profissional" },
      items: [
        {
          empresa: "WideCommerce",
          cargo: "Desenvolvedor Full Stack",
          periodo: "2023 — presente",
          descricao:
            "Desenvolvimento e manutenção de e-commerces baseados em Magento e WooCommerce, com foco em performance, usabilidade e escalabilidade. Atuação em projetos para grandes varejistas, implementando temas personalizados, módulos sob demanda e integrações com gateways de pagamento e ERPs. Trabalho em squads ágeis utilizando PHP, JavaScript (jQuery), Bootstrap, AJAX e Docker, com versionamento via Git e pipelines de CI/CD.",
          tags: ["PHP", "Magento", "WooCommerce", "jQuery", "Docker", "MySQL"],
          link: null,
          atual: true,
        },
        {
          empresa: "Hubsell",
          cargo: "Desenvolvedor Front End",
          periodo: "2021 — 2023",
          descricao:
            "Desenvolvimento de interfaces responsivas e landing pages otimizadas para conversão, a partir de layouts fornecidos por designers. Atuação em projetos de automação de prospecção B2B e ferramentas de outreach, utilizando JavaScript, React, CSS e Node.js. Também participei da manutenção da plataforma interna, suporte técnico e melhorias contínuas com foco na experiência do usuário.",
          tags: ["JavaScript", "React", "Node.js", "CSS"],
          link: null,
          atual: false,
        },
        {
          empresa: "Análise e Desenvolvimento de Sistemas",
          cargo: "Graduação",
          periodo: "2019 — 2021",
          descricao:
            "Formação técnica com base em programação, banco de dados, redes de computadores e engenharia de software.",
          tags: ["ADS", "Graduação"],
          link: null,
          atual: false,
        },
      ],
    },
    projetos: {
      heading: { before: "Projetos ", span: "selecionados" },
      items: [
        {
          titulo: "Portfolio Pessoal",
          descricao:
            "Site de portfólio desenvolvido com Next.js, React e SCSS. Conta com modo dark/light, animações de scroll, carrossel de skills e design totalmente responsivo.",
          tags: ["Next.js", "React", "SCSS", "Vercel"],
          link: "/",
          tipo: "Frontend",
        },
        {
          titulo: "E-commerce Dumond",
          descricao:
            "Desenvolvimento e manutenção da plataforma de e-commerce da Dumond, com customizações de layout, integrações e otimizações de performance.",
          tags: ["Magento", "PHP", "MySQL", "Docker"],
          link: "https://www.dumond.com.br/",
          tipo: "E-commerce",
        },
        {
          titulo: "Ambiente Containerizado",
          descricao:
            "Configuração de ambientes Docker para múltiplos serviços: nginx, PHP-FPM, MySQL e Redis, com rotinas automatizadas de build e deploy via shell scripts.",
          tags: ["Docker", "Linux", "Nginx", "Shell"],
          link: null,
          tipo: "DevOps",
        },
        {
          titulo: "Shopping Eldorado",
          descricao:
            "Implementação e customização de plataforma digital para o Shopping Eldorado, com integrações personalizadas e otimização de UX.",
          tags: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
          link: "https://www.shopeldorado.com.br/",
          tipo: "E-commerce",
        },
      ],
    },
  },

  en: {
    hero: {
      greeting: "Hello! 👋",
      h1: {
        before1: "",
        span1: "Full Stack",
        after1: " Engineering",
        before2: "focused on ",
        span2: "infrastructure",
        after2: " and reliability.",
      },
      sobreMimBtn: "About me",
      stats: ["years of experience", "projects delivered", "technologies"],
    },
    bio: {
      heading: "About me",
      p1: "My name is Hugo, I'm a Full Stack developer building web applications that balance great user experience, code quality, and solid infrastructure. Throughout my career, I've worked on both the visual side of applications and the technical layer responsible for system operation.",
      p2: "I have experience building modern, intuitive, and responsive interfaces, always combining UI/UX best practices with performance and clean code. This design background helps me think about applications not just from a technical standpoint, but also from the real user experience perspective.",
      p3: "On the engineering side, I work with web ecosystem technologies such as PHP, Node.js, and databases, building robust systems and integrations across different platforms.",
      p4: "I also have a strong interest in infrastructure and application operations, working with Docker, Linux servers, and containerized environments. This experience allows me to act not only in development but also in organizing execution environments, deployment, and system maintenance.",
      p5: "A significant part of my experience is tied to e-commerce and digital platform development, primarily using Magento, WooCommerce, and WordPress — participating in both implementation and ongoing evolution of these solutions.",
      p6before: "I currently work as a developer at ",
      p6after:
        ", working on e-commerce and digital platform projects. Clients include brands such as Dumond, Kikos, Lightning Bolt, Catálogo Favorita, Redelease, Shopping Eldorado, DetonaShop, and many others.",
      p7: "I hold a degree in Systems Analysis and Development and am continuously growing professionally, studying new technologies related to development, software architecture, infrastructure, and environment automation.",
      p8before:
        "Throughout my career I've also participated in various website and e-commerce projects, including custom solutions developed by ",
      p8after:
        ". In addition to professional work, I also develop personal projects and studies focused on new technologies and improvements in building and operating web applications.",
    },
    cards: {
      heading: {
        before: "Building digital products in a",
        span1: "modern",
        mid: " and ",
        span2: "high quality",
        after: " way.",
      },
      items: [
        {
          title: "Deploy & Automation",
          desc: "Automation of deploys, delivery routines, and environment standardization to reduce friction between development and production.",
        },
        {
          title: "Infra & Containers",
          desc: "Practical use of Docker and Linux to create reproducible environments, isolate services, and run optimized and consistent applications.",
        },
        {
          title: "Full Stack Development",
          desc: "Solid experience in web development with a focus on e-commerces and complete solutions using PHP, Node.js, Docker, Linux, MySQL, and JavaScript.",
        },
        {
          title: "Web & Mobile",
          desc: "Building apps and websites that work seamlessly across different platforms and devices, delivering a perfect user experience.",
        },
      ],
    },
    contato: {
      line1: "Tell me about your",
      line2: "next project.",
      btn: "Get in touch",
    },
    footer: {
      text: "Hugo Andrade © 2023 - present. All rights reserved.",
    },
    experiencia: {
      heading: { before: "Professional ", span: "experience" },
      items: [
        {
          empresa: "WideCommerce",
          cargo: "Full Stack Developer",
          periodo: "2023 — present",
          descricao:
            "Development and maintenance of Magento and WooCommerce e-commerces, focused on performance, usability, and scalability. Working on projects for large retailers, implementing custom themes, on-demand modules, and integrations with payment gateways and ERPs. Working in agile squads using PHP, JavaScript (jQuery), Bootstrap, AJAX, and Docker, with version control via Git and CI/CD pipelines.",
          tags: ["PHP", "Magento", "WooCommerce", "jQuery", "Docker", "MySQL"],
          link: null,
          atual: true,
        },
        {
          empresa: "Hubsell",
          cargo: "Front End Developer",
          periodo: "2021 — 2023",
          descricao:
            "Development of responsive interfaces and conversion-optimized landing pages, based on designer-provided layouts. Working on B2B prospecting automation and outreach tools using JavaScript, React, CSS, and Node.js. I also contributed to internal platform maintenance, technical support, and continuous improvements focused on user experience.",
          tags: ["JavaScript", "React", "Node.js", "CSS"],
          link: null,
          atual: false,
        },
        {
          empresa: "Systems Analysis and Development",
          cargo: "Degree",
          periodo: "2020 — 2023",
          descricao:
            "Technical degree covering programming, databases, computer networks, and software engineering.",
          tags: ["ADS", "Degree"],
          link: null,
          atual: false,
        },
      ],
    },
    projetos: {
      heading: { before: "Selected ", span: "projects" },
      items: [
        {
          titulo: "Personal Portfolio",
          descricao:
            "Portfolio website built with Next.js, React, and SCSS. Features dark/light mode, scroll animations, skills carousel, and fully responsive design.",
          tags: ["Next.js", "React", "SCSS", "Vercel"],
          link: "/",
          tipo: "Frontend",
        },
        {
          titulo: "Dumond E-commerce",
          descricao:
            "Development and maintenance of Dumond's e-commerce platform, with layout customizations, integrations, and performance optimizations.",
          tags: ["Magento", "PHP", "MySQL", "Docker"],
          link: "https://www.dumond.com.br/",
          tipo: "E-commerce",
        },
        {
          titulo: "Containerized Environment",
          descricao:
            "Configuration of Docker environments for multiple services: nginx, PHP-FPM, MySQL, and Redis, with automated build and deploy routines via shell scripts.",
          tags: ["Docker", "Linux", "Nginx", "Shell"],
          link: null,
          tipo: "DevOps",
        },
        {
          titulo: "Shopping Eldorado",
          descricao:
            "Implementation and customization of digital platform for Shopping Eldorado, with custom integrations and UX optimization.",
          tags: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
          link: "https://www.shopeldorado.com.br/",
          tipo: "E-commerce",
        },
      ],
    },
  },
};
