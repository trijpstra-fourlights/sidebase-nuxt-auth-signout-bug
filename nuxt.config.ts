// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  auth: {
    enableGlobalAppMiddleware: true,
  },
  modules: ['@sidebase/nuxt-auth'],
});
