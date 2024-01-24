<script setup>
import useNumbers from "../composable/useNumbers";

const { numbers , addNumber } = useNumbers();
</script>

<template>
  <div>
    it's test vue {{ numbers }}

    <button @click="addNumber(2)">{{ numbers }}</button>
  </div>
</template>

<style lang="scss" scoped></style>
