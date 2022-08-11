
<script setup>
import { computed, toRefs } from "vue";
import { useMerge } from "../use/MergeText";

const props = defineProps({
  cvc: {
    required: true,
    type: String,
    default: "",
  },
});

const { cvc } = toRefs(props);

const TARGET_CVC = "000";

const mergedCvc = useMerge(TARGET_CVC, cvc);

</script>
 
<template>
  <article class="card">
    <img src="../assets/bg-card-back.png" alt="card-back" />
    <p data-test="cvc" class="card__cvc">
      {{ mergedCvc }}
    </p>
  </article>
</template>

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


