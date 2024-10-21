import { defineConfig } from 'vocs';

export default defineConfig({
  title: 'Farcastle',
  logoUrl: '/images/alice-blue-castle.svg',
  socials: [
    {
      icon: 'warpcast',
      link: 'https://warpcast.com/~/channel/farcastle',
    },
    {
      icon: 'github',
      link: 'https://github.com/HausDAO/farcastle-frames',
    },
  ],
  description: 'Turn a Warpcast channel into a DAO',
  ogImageUrl: {
    '/': '/images/preview.png',
  },
  theme: {
    accentColor: '#00B1CC',
    variables: {
      color: {
        background: {
          light: '#EAF8FF',
          dark: '#341A34',
        },
      },
    },
  },
  font: {
    default: {
      google: 'VT323',
    },
  },
  sidebar: [
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Map',
      link: '/map',
    },
    {
      text: 'Vision',
      link: '/vision',
    },
    {
      text: 'Values',
      link: '/values',
    },
    {
      text: 'DAO',
      collapsed: true,
      items: [
        {
          text: 'Roles',
          link: '/dao/roles',
        },
      ],
    },
  ],
  sponsors: [
    {
      name: 'Grants',
      height: 120,
      items: [
        [
          {
            name: 'DAOhaus',
            link: 'https://daohaus.club/',
            image: '/images/daohaus.svg',
          },
        ],
      ],
    },
    {
      name: 'Allies',
      height: 60,
      items: [
        [
          {
            name: 'Hats',
            link: 'https://www.hatsprotocol.xyz/',
            image: '/images/hats.svg',
          },
          {
            name: 'Tavern',
            link: 'https://tavern.fm/',
            image: '/images/tavern.svg',
          },
        ],
      ],
    },
    {
      name: 'Accelerators',
      height: 120,
      items: [
        [
          {
            name: 'Octant',
            link: 'https://octant.app/',
            image: '/images/octant.svg',
          },
        ],
      ],
    },
  ],
});
