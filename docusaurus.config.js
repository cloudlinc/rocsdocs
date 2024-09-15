// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ROCS DOCS',
  tagline: 'Guides and Resources for Rocket Online Schools',
  favicon: 'img/favi.png',

  // Set the production url of your site here
  url: 'https://www.rocsdocs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rocs', // Usually your GitHub org/user name.
  projectName: 'rocsdocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ROCS DOCS',
        logo: {
          alt: 'ROCS Logo',
          src: 'img/rocs_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides',
          },
          {to: '/docs/category/chromebook-support', 
            label: 'Chromebook Help', 
            position: 'left'
          },
          {to: '/docs/category/acellus-support', 
            label: 'Acellus Help', 
            position: 'left'
          },
          {to: '/blog', 
            label: 'News', 
            position: 'left'
          },
          {
            href: 'https://www.rocs.org',
            label: 'ROCS Website',
            position: 'right',
          },
          {to: '/docs/events', label: 'Events', position: 'left'},
          {
            type: 'search',
            position: 'right',
            className: 'custom-search-bar',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Family Guide',
                to: '/docs/family-intro',
              },
              {
                label: 'Staff Guide',
                to: '/docs/intro',
              },
              {
                label: 'Events',
                to: '/docs/events',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Acellus Student Login',
                href: 'https://signin.acellus.com/sign-in/student/',
              },
              {
                label: 'Acellus Parent Portal',
                href: 'https://signin.acellus.com/sign-in/gold-key',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/blog',
              },
              {
                label: 'Enroll Now',
                href: 'https://www.rocs.org/page/enroll',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} © Rocket Online Schools`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '6ORRKTLXU8',
  
        // Public API key: it is safe to commit it
        apiKey: '1dc0b27015aa8223879d77f825de5ec5',
  
        indexName: 'rocscom',
  
        // Optional: see doc section below
        contextualSearch: false,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        //... other Algolia params
      },
      // themes: ['@docusaurus/theme-search-algolia'],
    }),
};

// Add this line outside of themeConfig
themes: ['@docusaurus/theme-search-algolia'];

export default config;
