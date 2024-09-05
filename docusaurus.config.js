import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const title = "Dining Philosophers, LLP.";
const config = {
  title,
  tagline: "Software Development Company",
  favicon: "img/favicon.ico",

  url: "https://dining-philosophers.in",
  baseUrl: "/",

  organizationName: "DiningPhilosophersCo",
  projectName: "llp",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.png",
      navbar: {
        title,
        logo: {
          alt: "Dining Philosophers Logo - chopsticks around the Pi symbol",
          src: "img/logo.png",
        },
        items: [{ to: "/about", label: "About", position: "right" }],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${title}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
