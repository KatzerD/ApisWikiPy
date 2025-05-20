import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Paraguay Government APIs',
  tagline: 'Documentación para desarrolladores de datos abiertos del gobierno de Paraguay',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://paraguay-gov-apis.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-github-username', // Change this to your GitHub username
  projectName: 'paraguay-gov-apis', // Name of the repository

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
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-github-username/paraguay-gov-apis/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-github-username/paraguay-gov-apis/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/paraguay-apis-social-card.jpg',
    navbar: {
      title: 'Paraguay Government APIs',
      logo: {
        alt: 'Paraguay Government APIs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          label: 'APIs',
          position: 'left',
          items: [
            {
              label: 'API del Congreso',
              to: '/docs/Congreso/intro',
            },
            {
              label: 'API del Ministerio de Finanzas',
              to: '/docs/Hacienda/intro',
            },
            {
              label: 'API de contrataciones públicas',
              to: '/docs/Contrataciones/intro',
            },
          ],
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://github.com/your-github-username/paraguay-gov-apis',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'APIs',
          items: [
            {
              label: 'API del Congreso',
              to: '/docs/Congreso/intro',
            },
            {
              label: 'API del Ministerio de Finanzas',
              to: '/docs/Hacienda/intro',
            },
            {
              label: 'API de contratación pública',
              to: '/docs/Contrataciones/intro',
            },
          ],
        },
        {
          title: 'Official Resources',
          items: [
            {
              label: 'Datos abiertos del Congreso',
              href: 'https://datos.congreso.gov.py/opendata/api',
            },
            {
              label: 'Datos abiertos del Ministerio de Finanzas',
              href: 'https://datos.hacienda.gov.py/odmh-api-v2/api-docs/',
            },
            {
              label: 'Contrataciones publicas',
              href: 'https://www.contrataciones.gov.py/datos/api/v3/doc/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/your-github-username/paraguay-gov-apis/discussions',
            },
            {
              label: 'Updates',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/your-github-username/paraguay-gov-apis',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paraguayan Government APIs Documentation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
