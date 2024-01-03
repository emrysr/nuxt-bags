// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxt/content", "@nuxt/ui"],
    tailwindcss: {
        viewer: false,
        // viewer: { endpoint: '/_tailwind', exportViewer: true }
    },
});
