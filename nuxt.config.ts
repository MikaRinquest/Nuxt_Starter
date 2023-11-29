// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    //Tells Nuxt the following information will affect the app(index.html) specifically (similiar to App.vue in Vue3 )
    head: {
      //Acts as regular head tags
      title: "Nuxt Starter", //The name that will display in the tab of the website( no longer https:localhost)
      meta: [
        {
          name: "description", //Tells us what type of tag it is
          content: "My very first Nuxt 3 project", //The information for the tab
        },
      ],
      link: [
        //Creates a link to an external styling,icons or css page
        {
          rel: "stylesheet", //The type of link it is
          href: "https://fonts.googleapis.com/icon?family=Material+Icons", //The actual link
        },
      ],
    },
  },
  //Below is how we access .env variables in nuxt 3
  runtimeConfig: {
    currencyKey: process.env.NUXT_CURRENCY_API_KEY, //Where we our storing our .env values wihtout anyone else being able to see it
    //     public: {
    //This public object is how we can make our .env key visible to the frontend
    //  }
  },
});
