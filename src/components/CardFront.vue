
<template>
  <article class="card">
    <div class="card__icons">
      <FilledCircle />
      <StrokeCircle />
    </div>
    <p class="card__number">
      0000 0000 0000 0000
    </p>
    <div class="container">
      <p class="card__name">
        {{ customerName }}
      </p>
      <p class="card__date">00/00</p>
    </div>
  </article>
</template>

<script>
import { onlyLetters } from "../utils/validators.js";
import FilledCircle from "./icons/FilledCircle.vue";
import StrokeCircle from "./icons/StrokeCircle.vue";
export default {
  props: {
    customerName: {
      required: true,
      type: String,
      validator: (name) => {
        if (!onlyLetters(name)) {
          throw Error(`Customer Name must included only letters`);
        }

        return true;
      },
    },
  },
  components: {
    FilledCircle,
    StrokeCircle,
  },
};
</script>

<style scoped lang="scss">

.card {
  padding: toRem(17.6) toRem(21) toRem(19) toRem(19);
  background: linear-gradient(163.95deg, #6348FE 4.74%, #610595 88.83%);
  border-radius: toRem(6);
  &__icons {
    display: flex;
    align-items: center;
    gap: toRem(10);
  }

  &__number {
     @include headlineL;
    margin-top: toRem(37);
    color:$white;
    letter-spacing: 2.2px;
    margin-right: toRem(26);
  }

  &__name {
    @include subtitle;
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
    justify-content: space-between
  }

}

</style>