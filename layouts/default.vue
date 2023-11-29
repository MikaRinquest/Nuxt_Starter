<template>
  <!-- This layout will determine the bassi of how ALL pages will look -->
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/">Nuxt Starter</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <!-- NuxtLink replaces Routerlink from vue -->
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <!-- Slot will output our other page content -->
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
