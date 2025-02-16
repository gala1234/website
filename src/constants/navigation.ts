export type NavLink = {
  name: {
    en: string;
    es: string;
  };
  link: string;
  id: string;
};

export const sectionsIds = [
  'hero',
  'imageSection',
  'projects',
  'about',
  'contact',
] as const;

export const navigationLinks: NavLink[] = [
  {
    name: {
      en: 'top',
      es: 'inicio',
    },
    link: '#',
    id: 'hero',
  },
  {
    name: {
      en: 'web3 projects',
      es: 'proyectos web3',
    },
    link: '#projects',
    id: 'projects',
  },
  {
    name: {
      en: 'about',
      es: 'sobre mí',
    },
    link: '#about',
    id: 'about',
  },
  {
    name: {
      en: 'contact',
      es: 'contacto',
    },
    link: '#contact',
    id: 'contact',
  },
];
