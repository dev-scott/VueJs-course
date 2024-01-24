<script setup>

import {inject} from "vue"

const numbers = inject("numbers")

</script>

<template>
  <div>it's test vue {{numbers}}  </div>
</template>

<style lang="scss" scoped></style>
