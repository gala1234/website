import { title } from 'process';

export type Language = 'en' | 'es';

export const aboutContent = {
  en: {
    title: 'About Me',
    introduction: {
      title: 'Introduction',
      description:
        'A civil engineer turned frontend developer with over 7 years of experience, currently specializing in Web3 development. With hands-on experience in integrating Web3 technologies like CosmWasm and expanding expertise in viem and wagmi, I build seamless decentralized applications. Passionate about privacy and decentralization, I am always eager to explore innovative solutions and contribute to the future of Web3.',
    },
    skillsSection: {
      title: 'Skills',
      skills: [
        {
          title: 'frontend',
          skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        },
        {
          title: 'web3',
          skills: ['Solidity', 'Ethereum EVM', 'Viem/Wagmi', 'Ethers.js'],
        },
        {
          title: 'backend',
          skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
        },
        {
          title: 'tools',
          skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
        },
      ],
    },
    experienceSection: {
      title: 'Experience',
      experience: [
        {
          title: 'Web3 Frontend Developer - Nym Technologies SA',
          period: 'Mar 2022 - Present',
          description:
            "Contributing to the improvement of NYM's existing frontend applications (wallet, explorer, WASM tools), optimising user experience and accessibility. Independently developing new websites, ensuring seamless access to NYM's strong network-level privacy benefits.",
        },
        {
          title: 'Frontend Developer - Gaming Innovation Group',
          period: 'Apr 2018 - Mar 2022',
          description:
            'Led frontend development across multiple casino platforms using Vue.js, Preact, and Web Components. Key projects included HardRock Casino, Mr. Green Casino, and development of the Wand Framework. Focused on performance, scalability, and user experience.',
        },
        {
          title: 'Frontend Developer Intern - Adalab',
          period: 'Oct 2017 - Mar 2018',
          description:
            'Participated in high-intensity Frontend program, collaborating on multiple web development projects using agile methodologies. Worked on both internal and external organization projects, developing strong collaborative skills.',
        },
      ],
    },
  },
  es: {
    title: 'Sobre Mi',
    introduction: {
      title: 'Introducción',
      description:
        'Ingeniera civil convertida en desarrolladora frontend con más de 7 años de experiencia, actualmente especializada en desarrollo Web3. Con experiencia práctica en la integración de tecnologías Web3 como CosmWasm y ampliando experiencia en viem y wagmi, construyo aplicaciones descentralizadas sin problemas. Apasionada por la privacidad y la descentralización, siempre estoy ansiosa por explorar soluciones innovadoras y contribuir al futuro de Web3.',
    },
    skillsSection: {
      title: 'Habilidades',
      skills: [
        {
          title: 'frontend',
          skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        },
        {
          title: 'web3',
          skills: ['Solidity', 'Ethereum EVM', 'Viem/Wagmi', 'Ethers.js'],
        },
        {
          title: 'backend',
          skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
        },
        {
          title: 'tools',
          skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
        },
      ],
    },
    experienceSection: {
      title: 'Experiencia',
      experience: [
        {
          title: 'Desarrolladora Frontend Web3 - Nym Technologies SA',
          period: 'Mar 2022 - Presente',
          description:
            'Contribuyendo a la mejora de las aplicaciones frontend existentes de NYM (wallet, explorer, herramientas WASM), optimizando la experiencia del usuario y la accesibilidad. Desarrollando de forma independiente nuevos sitios web, asegurando un acceso sin problemas a los beneficios de privacidad a nivel de red de NYM.',
        },
        {
          title: 'Desarrolladora Frontend - Gaming Innovation Group',
          period: 'Abr 2018 - Mar 2022',
          description:
            'Lideré el desarrollo frontend en múltiples plataformas de casino usando Vue.js, Preact y Web Components. Los proyectos clave incluyeron HardRock Casino, Mr. Green Casino y el desarrollo del Framework Wand. Enfocada en el rendimiento, la escalabilidad y la experiencia del usuario.',
        },
        {
          title: 'Desarrolladora Frontend en Prácticas - Adalab',
          period: 'Oct 2017 - Mar 2018',
          description:
            'Participé en un programa intensivo de Frontend, colaborando en múltiples proyectos de desarrollo web utilizando metodologías ágiles. Trabajé en proyectos tanto internos como externos de la organización, desarrollando fuertes habilidades colaborativas.',
        },
      ],
    },
  },
};
