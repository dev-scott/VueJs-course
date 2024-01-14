<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>

<template>
  <main>
    <div>
      <h4>The current count is ...</h4>
      <h1>{{ counter }}</h1>
      <button @click="counter--">--</button>
      <button @click="counter++">++</button>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
div {
  text-align: center;
}
</style>
