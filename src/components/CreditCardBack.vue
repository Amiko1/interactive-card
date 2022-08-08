<template>
  <article class="card">
    <img src="../assets/bg-card-back.png" alt="card-back" />
    <p data-test="cvc" class="card__cvc">
      {{ customerCvc }}
    </p>
  </article>
</template>

<script setup>
import { computed, toRefs } from "vue";
import { mergeTexts } from "../utils/helpers.js";

const props = defineProps({
  cvc: {
    required: true,
    type: String,
    default: "",
  },
});

const { cvc } = toRefs(props);
let defaultCvcValue = "000";

const customerCvc = computed(() => {
  if (cvc.value.length < 4) {
    defaultCvcValue = mergeTexts(defaultCvcValue, cvc.value);
  }

  return defaultCvcValue;
});
</script>
 
<style  scoped lang="scss">
.card {
  width: toRem(286);
  height: toRem(156);
  border-radius: 10px;
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


