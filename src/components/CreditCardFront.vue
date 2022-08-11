<script setup>
import { toRefs, computed } from "@vue/reactivity";
import FilledCircle from "./icons/FilledCircle.vue";
import StrokeCircle from "./icons/StrokeCircle.vue";
import { useMerge } from "../use/MergeText";
import { ref, onUpdated } from "vue";

const props = defineProps({
  number: {
    required: true,
    type: String,
    default: "",
  },
  name: {
    required: true,
    type: String,
    default: "",
  },
  month: {
   required: true,
    type: String,
    default: "",
  },
  year: {
    required: true,
    type: String,
    default: "",
  },
});

const { number, name, month, year } = toRefs(props);

const target = {
  number: "0000000000000000",
  month: "00",
  year: "00",
  name: "name",
};

const mergedNumber = useMerge(target.number , number);
const mergedMonth = useMerge(target.month, month);
const mergedYear = useMerge(target.year, year);

const mergedName = computed(() => {
  return name.value ? name.value : target.name;
});
</script>

<template>
  <article class="card">
    <div class="card__icons">
      <FilledCircle />
      <StrokeCircle />
    </div>
    <p data-test="number" class="card__number">
      {{ mergedNumber.replace(/.{4}/g, "$& ") }}
    </p>
    <div class="container">
      <p data-test="name" class="card__name">
        {{ mergedName }}
      </p>
      <p data-test="date" class="card__date">
        {{ `${mergedMonth} / ${mergedYear}` }}
      </p>
    </div>
  </article>
</template>

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
</style>