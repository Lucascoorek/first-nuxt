import "dotenv/config";

export default {
  mode: "universal",
  env: {
    GUARDIAN_API_KEY: process.env.GUARDIAN_API_KEY,
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s | My App",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Generic descripton for all not defined in pages",
      },
      {
        hid: "og-title",
        property: "og:title",
        content: "Generic descripton for all not defined in pages",
      },
      {
        hid: "og-image",
        property: "og:image",
        content: "/apple-touch-icon.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3ABE97" },
  /*
   ** Global CSS
   */
  css: [
    // CSS file in the project
    "@/assets/css/main.css",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/color-mode"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // axios is required by @nuxtjs/auths
    "@nuxtjs/axios",
    // https://auth.nuxtjs.org
    "@nuxtjs/auth",
  ],
  auth: {
    redirect: {
      login: "/",
      callback: "/callback",
      home: "/user",
    },
    strategies: {
      local: false,
      github: {
        client_id: process.env.GIT_ID,
        client_secret: process.env.GIT_SECRET,
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
