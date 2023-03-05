// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo'],
    
    css: ['~/assets/css/main.css'],

     apollo: {
       clients: {
         default: {
           httpEndpoint: 'https://cmsathenaplus.herokuapp.com/graphql'
         }
       },
     },

     postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
})
