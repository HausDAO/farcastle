import { defineConfig } from 'vocs';

export default defineConfig({
  title: 'Farcastle',
  logoUrl: '/images/dark-castle.svg',
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
          dark: '#17151F',
        },
      },
    },
  },
  font: {
    default: {
      google: 'Source Sans Pro',
    },
  },
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
});
