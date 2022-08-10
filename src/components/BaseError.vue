<template>
  <p class="error" v-if="error != ''"> {{error && `* ${error}`}}</p>
</template>

<script setup>
defineProps({
  error: {
    type: String,
    
  },
});
</script>

<style lang="scss"  >
.error {
  @include bodyS;
  color: $red;
}
</style>

