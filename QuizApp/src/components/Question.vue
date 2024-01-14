<script setup>
import { defineProps } from "vue";

const { question } = defineProps(["question"]);
</script>

<template>
  <div class="question-container">
    <h1 class="question">{{ question.text }}</h1>
  </div>
  <div class="options-container">
    <div class="option">
      <p class="option-label">A</p>
      <div class="option-value">
        <p>NaCl</p>
      </div>
    </div>
    <div class="option">
      <p class="option-label">B</p>
      <div class="option-value">
        <p>NaCl</p>
      </div>
    </div>
    <div class="option">
      <p class="option-label">C</p>
      <div class="option-value">
        <p>NaCl</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  color: black;
  margin-top: 20px;
}

.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  color: black;
  background-color: bisque;
  width: 60px;
  height: 60px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  background-color: greenyellow;
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
}
</style>
