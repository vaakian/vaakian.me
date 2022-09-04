## this is my first article

<script setup>
  import {ref} from 'vue'
  const a = ref(5)
</script>

<div v-for="i in 6">{{ i + a }}</div>
<button @click="a++">increment</button>