
<template>
  <article class="card">
    <div class="card__icons">
      <FilledCircle />
      <StrokeCircle />
    </div>
    <p data-test="number" class="card__number">{{ cardNumber }}</p>
    <div class="container">
      <p data-test="name" class="card__name">
        {{ cardName }}
      </p>
      <p data-test="date" class="card__date">{{ cardDate }}</p>
    </div>
  </article>
</template>

<script setup>
import { toRefs, computed } from "@vue/reactivity";
import { mergeTexts } from "../utils/helpers.js";
import FilledCircle from "./icons/FilledCircle.vue";
import StrokeCircle from "./icons/StrokeCircle.vue";

const props = defineProps({
  card: {
    required: true,
    type: Object,
    default(rawProps) {
      return {
        number: "",
        name: "",
        mm: "",
        yy: "",
      };
    },
  },
});

const { card } = toRefs(props);

let defaultNumber = "0000000000000000";
let defaultMM = "00";
let defaultYY = "00";
let defaultName = "name";

const cardNumber = computed(() => {
  if (card.value.number?.length < 17)
    defaultNumber = mergeTexts(defaultNumber, card.value.number.trim());

  return defaultNumber.replace(/.{4}/g, "$& ");
});

const cardDate = computed(() => {
  if (card.value.mm?.length < 3)
    defaultMM = mergeTexts(defaultMM, card.value.mm.trim());

  if (card.value.yy?.length < 3)
    defaultYY = mergeTexts(defaultYY, card.value.yy.trim());

  return `${defaultMM} / ${defaultYY}`;
});

const cardName = computed(() => {
  return card.value.name ? card.value.name : defaultName;
});
</script>

<style scoped lang="scss">
.card {
  min-width: toRem(285);
  padding: toRem(17.6) toRem(21) toRem(19) toRem(19);
  background: linear-gradient(163.95deg, #6348fe 4.74%, #610595 88.83%);
  border-radius: toRem(6);
  &__icons {
    display: flex;
    align-items: center;
    gap: toRem(10);
  }

  &__number {
    @include headlineL;
    margin-top: toRem(37);
    color: $white;
    letter-spacing: 2.2px;
    margin-right: toRem(26);
  }

  &__name {
    @include subtitle;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 27ch;
    overflow: hidden;
    color: $white;
    text-transform: uppercase;
  }

  &__date {
    @include subtitle;
    color: $white;
  }

  .container {
    display: flex;
    margin-top: toRem(17);
    justify-content: space-between;
  }
}

// @media (min-width: 700px) {
//   .card {
//     min-width: toRem(447);
//     height: toRem(245);
//   }
// }
</style>