<script setup>
import { ref, provide } from "vue";
import TestVue from "./components/Test.vue";

const numbers = ref([1, 2, 3, 4, 5]);

provide("numbers", numbers);
</script>

<template>
  <main>
    <div>
      Hello App {{ numbers }}

      <TestVue />
    </div>
  </main>
</template>

<style scoped>
main {
  /* background-color: rgb(122, 50, 255); */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  display: flex;
  flex-direction: column;
}
</style>
