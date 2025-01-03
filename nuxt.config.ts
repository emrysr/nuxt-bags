// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxt/content", "@nuxt/ui", '@nuxt/image'],

  tailwindcss: {
      viewer: false,
      // viewer: { endpoint: '/_tailwind', exportViewer: true }
  },

  css: ["~/assets/styles/global.css"],

  app: {
      pageTransition: { name: "page", mode: "out-in" },
  },

  storage: {
      data: {
          driver: "vercelKV",
      },
  },

  routeRules: {
      // // revalidated every 60 seconds, in the background
      // '/**': { isr: 60 },
      // // this page will be always fresh
      // '/dynamic': { isr: false },
      // // this page will be generated on demand and then cached permanently
      // '/static': { isr: true },
      // // this page is generated at build time and cached permanently
      // '/prerendered': { prerender: true },
      // // you can do lots more with route rules too!
      // '/redirect': { redirect: '/static' },
      // '/headers': { headers: { 'x-magic-of': 'nuxt and vercel' } },
      // '/spa': { ssr: false },
  },

  runtimeConfig: {
      nitro: { envPrefix: "VERCEL_" },
      region: process.env.VERCEL_REGION,
  },

  compatibilityDate: '2025-01-01',
});