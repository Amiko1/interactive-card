<template>
  <p tabindex="0" class="error" v-if="error != ''" v-html="error && `<span aria-hidden='true'>* </span> ${error}`"></p>
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

