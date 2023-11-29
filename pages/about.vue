<template>
  <div>
    <h2>About Page</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aspernatur
      ullam doloribus natus, ipsam reiciendis maxime ducimus nobis incidunt
      inventore?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aspernatur
      ullam doloribus natus, ipsam reiciendis maxime ducimus nobis incidunt
      inventore?
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
// method: "post",
// body: { age: 20 }, //Similiar to how we use actions in the store in vuejs
//Exactly the same as previous times of using useFetch (products page), except this time we are using it to access data from an internal 'url'
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
