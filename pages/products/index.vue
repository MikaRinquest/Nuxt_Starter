<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
        <!--Dont need to import because Nuxt automatically looks for a file called ProductCard  -->
        <!-- We are exporting our product object to the component ProducCard -->
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  //This specifies which pages will use this layout
  layout: "products",
});

//fetches the products, is  a built in function of nuxt
const { data: products } = await useFetch("https://fakestoreapi.com/products");
//{data} is where nuxt stores the information from the link. DATA MUST BE USED
//{data:production} is renaming data to products when we use it in the app

useHead({
  //Allows us to write <head> data for this specific page and overwrites the content in nuxt.config.js
  title: "Nuxt Starter | Merch", //We are overwriting the title in the tab for this page only
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>

<style scoped></style>
