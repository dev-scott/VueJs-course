<script setup lang="ts">
import { defineProps } from "vue";

enum GENDER {
  MALE,
  FEMALE,
}

defineProps<{
  invitee: {
    id: number;
    name: string;
    gender: GENDER;
  };
}>();
</script>

<template>
  <div
    :style="{
      backgroundColor:
        invitee.gender === GENDER.MALE ? 'rgb(8,111,111)' : '111,18,8',
    }"
  >
    {{ invitee.name }}
  </div>
</template>

<style scoped>
div {
  background-color: aqua;
  border-radius: 5px;
  margin-top: 5px;
  text-align: center;
  padding: 3px;
  color: white;
}
</style>

