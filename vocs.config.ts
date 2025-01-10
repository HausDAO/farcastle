import { defineConfig } from 'vocs';

export default defineConfig({
  title: 'Farcastle',
  logoUrl: '/images/alice-blue-castle.svg',
  topNav: [{ text: 'About', link: '/about', match: '/about' }],
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
      text: 'Community',
      collapsed: false,
      link: '/community',
      items: [
        {
          text: 'Channels',
          link: '/community/channels',
        },
        {
          text: 'Groups',
          link: '/community/groups',
        },
        {
          text: 'Accounts',
          link: '/community/accounts',
        },
      ],
    },
    {
      text: 'Frames',
      collapsed: false,
      link: '/frames',
      items: [
        {
          text: 'Overview',
          link: '/frames/overview',
        },
        {
          text: 'Proposals',
          link: '/frames/proposals',
        },
      ],
    },
    {
      text: 'The Black Scrolls',
      collapsed: false,
      link: '/scrolls',
      items: [
        {
          text: 'Token Gating Channnels',
          link: '/scrolls/token-gating',
        },
      ],
    },
    {
      text: 'DAO',
      collapsed: true,
      items: [
        {
          text: 'Needs',
          link: '/dao/needs',
        },
        {
          text: 'Quests',
          link: '/dao/quests',
        },
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
