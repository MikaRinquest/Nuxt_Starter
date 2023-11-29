<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumbnail" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <!-- Truncate adds the ... if the title goes over the line -->
    <NuxtLink :to="`/products/${product.id}`">
      <!--We use backticks so because product.id is dynamic-->
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
// Allows us to import  the product object from our index page
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
