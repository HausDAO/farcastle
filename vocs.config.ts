import { defineConfig } from 'vocs';

export default defineConfig({
  title: 'Farcastle',
  logoUrl: '/images/alice-blue-castle.svg',
  topNav: [{ text: 'About', link: '/about' }],
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
});
