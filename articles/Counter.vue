<script setup lang="ts">
import { ref } from 'vue'
const count = ref(1)
</script>

<template>
  <div>
    <p>this is from a Counter.vue</p>
    <button @click="count++">
      {{ count }}
    </button>
  </div>
</template>

<style lang="css" scoped>
  button {
    border: 1px solid;
    padding-inline: 1em;
  }
</style>
