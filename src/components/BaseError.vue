<template>
  <p class="error" v-if="error != ''">errr</p>
</template>

<script setup>
defineProps({
  error: {
    type: String,
    default: "errr",
  },
});
</script>

<style lang="scss"  >
.error {
  @include bodyS;
  color: $red;
}
</style>

