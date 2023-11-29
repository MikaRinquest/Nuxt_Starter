//Nuxt has built in functions which allows us to create our api in the frontend
//To start, we create a folder called 'server' in the route of the directory. This creates a path for Nuxt similiar to Pages
//Inside of 'server' we create a folder called api, which will allow Nuxt to find the path to our js pages
//Inside of the api folder, we can create our routes. The route name will is automatically generated as the name of the file

export default defineEventHandler(async (event) => {
  //Allows us to create functions and export them to be used everywhere in the app

  //handle query params
  // const { name } = getQuery(event); //this is how we get the variable from the url and store it
  //getQuery is a built in function of Nuxt

  //handle post data
  // const { age } = await readBody(event);
  //readBody is a built in function

  //api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_wCsUEDmnobUmzMKaXcFuCar5oqMJNPhifpvefYGP"
  );
  //acts the same as useFetch, except useFetch is for frontend while $fetch is used for the server
  return data;
});
