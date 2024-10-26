import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenGIX / API Docs",
  description: "OpenGIX schema API documentation.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "OpenGIX", link: "https://opengix.org" },
      { text: "Contribute", link: "https://opengix.org" },
      { text: "nightly", link: "/markdown-examples" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/OpenGIX/schema" },
    ],
  },
});
