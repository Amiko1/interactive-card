<template>
  <article class="thankfull">
    <h2 class="thankfull__title">Thank You!</h2>
    <p class="thankfull__subtitle">We'hve added your card details</p>
    <base-button @click="$emit('continueForm')" class="thankfull__button">Continue</base-button>
  </article>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
components: {
    BaseButton
}
}
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
        margin-top:toRem(47)
    }
 }
</style>