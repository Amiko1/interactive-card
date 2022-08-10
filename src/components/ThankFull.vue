<template>
  <article  class="thankfull">
    <h2 tabindex="0" ref="text" class="thankfull__title">
      Thank You! <span class="sr-only">We'hve added your card details</span>
    </h2>
    <p class="thankfull__subtitle">We'hve added your card details</p>
    <base-button @click="$emit('continueForm')" class="thankfull__button"
      >Continue </base-button
    >
  </article>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import { ref, onMounted } from "vue";
export default {
  components: {
    BaseButton,
  },

  setup() {
    const text = ref(null);
    onMounted(() => {
      text.value.focus();
    });

    return {
      text,
    };
  },
};
</script>

<style scoped lang="scss">
.thankfull {
  text-align: center;
  &__title {
    @include headlineXL;
    color: $deep-violet;
    text-transform: uppercase;
  }
  &__subtitle {
    @include headlineL;
    color: $purplish-grey;
    margin-top: toRem(16);
  }

  &__button {
    margin-top: toRem(47);
  }
}
</style>