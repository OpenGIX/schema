import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenGIX / API Docs",
  description: "OpenGIX schema API documentation.",

  cleanUrls: true,

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
      { text: "Contribute", link: "https://opengix.org" },
      { text: "README.md", link: "../README.md" },
      {
        text: "v0.0.1-alpha",
        link: "/",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/OpenGIX/schema" },
    ],
  },
});
