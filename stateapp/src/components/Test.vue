<script setup>
import useNumbers from "../composable/useNumbers";

const { numbers } = useNumbers();
</script>

<template>
  <div>it's test vue {{ numbers }}</div>
</template>

<style lang="scss" scoped></style>
