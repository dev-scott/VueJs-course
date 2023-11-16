

<script setup>

import {ref} from "vue"

let count = ref(0)
const addCout = ()=>{


  console.log("increase count")
  count.value++
}

const removeClick = ()=>{
  console.log("decrease count")
  count.value--
}

</script>

<template>
  
  <main>
    <div>
      <h4>The current count is ...</h4>
      <h1>
        {{ count }}
      </h1>
      <button @click="removeClick()" >
        -
      </button>
      <button @click="addCout()">
        +
      </button>
    </div>
  </main>

</template>


<style scoped>

main{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;


}
div{
  text-align: center;
}

</style>