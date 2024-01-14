<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import q from "../data/data.json";

const route = useRoute();

const quizId = parseInt(route.params.id);

const quiz = q.find((quiz) => (quiz.id = quizId));

const currentQuestionIndex = ref(0);
</script>

<template>
  <div>
    <QuizHeader />
    <div><Question :question="quiz.questions[currentQuestionIndex]" /></div>
  </div>
</template>

<style scoped></style>
