<script setup>
const showText = ref(false);
const showHideText = () => {
  showText.value = !showText.value;
};
</script>

<template>
  <h3>Contact</h3>
  <button @click="showHideText">show text</button>

  <br />
  <span v-if="showText">To jest text z v-if</span>
  <br />
  <span v-show="showText">To jest text z v-show</span>
</template>
