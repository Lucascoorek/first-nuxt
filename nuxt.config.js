import "dotenv/config";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "MYNUXT",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My first nuxt project",
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
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // axios is required by @nuxtjs/auth
    "@nuxtjs/axios",
    // https://auth.nuxtjs.org
    "@nuxtjs/auth",
  ],
  auth: {
    redirect: {
      login: "/", // redirect user when not connected
      callback: "/auth/github/callback",
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
