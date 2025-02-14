export type NavLink = {
  name: {
    en: string;
    es: string;
  };
  link: string;
};

export const sections: NavLink[] = [
  {
    name: {
      en: 'top',
      es: 'inicio',
    },
    link: '#',
  },
  {
    name: {
      en: 'web3 projects',
      es: 'proyectos web3',
    },
    link: '#projects',
  },
  {
    name: {
      en: 'about',
      es: 'sobre mí',
    },
    link: '#about',
  },
];
