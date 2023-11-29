<!-- the path will look like /products/:id, allowing us to dynamically change information displayed -->
<template>
  <div>
    <Head>
      <!--A built in funtion of Nuxt to change the meta data of a page-->
      <Title>Nuxt Starter | {{ product.title }}</Title>
      <!--Allows us to change the title of the page-->
      <Meta name="description" :content="product.description" />
      <!--Allows us to change the desciption of the page-->
      <!-- Because we are using it in the template and not in the script, we can turn both the title and the desc of the page dynamically -->
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params; //Storing our route id to be used later on

const uri = "https://fakestoreapi.com/products/" + id; //Creates a route using the id we stored

//fetch individual data
const { data: product } = await useFetch(uri); //Fetches the data using the url we created

if (!product.value) {
  throw createError({
    statusCode: 404, //The error we want displayed
    statusMessage: "Content does not exist", // The message of the error that we want displayed
    fatal: true, //This allows us to display the error page in the event that a nav-link no longer works, otherwise it would simply display an empty page
  });
  //The above allows us to manually create an error if the user types in an id that doesn't exist in our array
  //Because this is an error, the error.vue page will automatically pick up and display
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
