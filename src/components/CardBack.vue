<template>
  <article class="card">
    <img src="../assets/bg-card-back.png" alt="card-back" />
    <p class="card__cvc">
      {{ cvc }}
    </p>
  </article>
</template>

<script>
import { maxLength } from "../utils/validators.js";

export function validateCvc(cvc) {
  // maxLength will return true if cvc length is mroe than 3

  if (maxLength(cvc, 3)) {
    throw Error(`size of cvc is 3, you have indicated ${cvc.length}`);
  }

  return true;
}

export default {
  props: {
    cvc: {
      required: true,
      type: String,
      validator: validateCvc,
    },
  },
};
</script>

<style  scoped lang="scss">



.card {
  
  width:toRem(286);
  height: toRem(156);
  border-radius:10px;
  position: relative;
  &__cvc {
    @include subtitle;
    color: $white;
    position: absolute;
    top: 45.5%;
    right: 13%;
  }
}
</style>


