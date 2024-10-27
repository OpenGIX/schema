import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenGIX / Schema Docs",
  description: "OpenGIX schema API documentation.",

  cleanUrls: true,

  // srcDir: "/docs",

  // rewrites: { "/": "README" },

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/OpenGIX/opengix.github.io/refs/heads/main/docs/public/favicon.ico",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://github.com/OpenGIX/opengix.github.io/blob/main/docs/public/images/logo-bg.png?raw=true",
    nav: [
      { text: "OpenGIX", link: "https://opengix.org" },
      // { text: "CHANGELOG.md", link: "README" },
      { text: "README.md", link: "README" },
      {
        text: "v0.0.1-alpha",
        link: "/docs/api",
      },
    ],

    externalLinkIcon: true,

    socialLinks: [
      { icon: "github", link: "https://github.com/OpenGIX/schema" },
    ],

    footer: {
      copyright:
        "Copyright © " +
        new Date().getFullYear() +
        ' An <a href="https://openworkgroup.org" title="Visit the Open Working Group website." target="_blank">Open Working Group</a> project.',
    },
  },
});
