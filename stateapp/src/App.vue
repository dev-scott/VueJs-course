<script setup>
import { ref, provide } from "vue";
import TestVue from "./components/Test.vue";

import { useCounterStore } from "./stores/counter";

const { count } = useCounterStore();
</script>

<template>
  <main>
    <div>
      Hello App {{ count }}
      <!-- {{ counter.count }}
      <button @click="counter.increment()">Add count</button> -->
      <!-- <TestVue /> -->
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
