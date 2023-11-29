export default defineEventHandler(async (event) => {
  const { code } = event.context.params; //This allows us to take whatever is in our params (information in url) and store it here

  const { currencyKey } = useRuntimeConfig(); //This is how we pull the stored .env value from nuxt.config.ts

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

  const { data } = await $fetch(uri); //Fetching all the data from the link we created
  return data; //Making the data we stored from the link available
});
