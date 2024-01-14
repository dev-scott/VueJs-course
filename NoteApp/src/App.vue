<script setup>
import { ref } from "vue";

const showModal = ref(false);
const inputText = ref("");

const notes = ref([]);

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}

const addNewNote = () => {
  notes.value.push({
    text: inputText.value,
    id: Math.floor(Math.random() * 100000),
    date: new Date(),
    background: getRandomColor(),
  });
  inputText.value = "";
  showModal.value = false;
};
</script>

<template>
  <main>
    <div class="overlay" v-if="showModal">
      <div class="modal">
        <button class="close" @click="showModal = false">X</button>
        <textarea
          v-model="inputText"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button class="add" @click="addNewNote()">Add</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Note App {{ showModal }}</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div
          v-for="note in notes"
          :key="note.id"
          class="card"
          :style="{ backgroundColor: note.background }"
        >
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background-color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
}
h1 {
  font-weight: bold;
  color: black;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
button {
  border-radius: 100%;
  padding: 10px;
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  color: black;
  width: 250px;
  height: 250px;
  background-color: aqua;
  border-radius: 20px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-top: 5px;
  padding: 10px;
}

.main-text {
}

.date {
  margin-top: 5px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.561);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  position: relative;
}

textarea {
  width: 100%;
}
.add {
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(242, 79, 9);
  color: white;
  font-size: 10px;
}
.close {
  margin-bottom: 15px;
}
</style>
