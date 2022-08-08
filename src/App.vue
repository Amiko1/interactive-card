<template>
  <section class="card">
    <header class="card__header">
      <CreditCardFront :card="card.front" class="card__front" />
      <CreditCardBack :cvc="card.back.cvc" class="card__back" />
    </header>
    <main class="card__main">
      <form class="card__form">
        <BaseInput
          v-model="card.front.name"
          label="Cardholder Name"
          class="card--input"
          placeholder="e.g. Jane Appleseed"
          onkeydown="return /[A-Z]/i.test(event.key)"
        />
       
       
        <BaseInput
          v-model="card.front.number"
          @keypress="onlyNumber"
          label="Card Number"
          class="card--input"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <p class="input-wrapper">
          <BaseInput
            v-model="card.front.mm"
            @keypress="onlyNumber"
            label="MM"
            class="card--input card__mm"
            placeholder="MM"
          />
          <BaseInput
            v-model="card.front.yy"
            label="YY"
            @keypress="onlyNumber"
            class="card--input card__yy"
            placeholder="YY"
          />
          <BaseInput
            @keypress="onlyNumber"
            v-model="card.back.cvc"
            label="CVC"
            class="card--input card__cvc"
            placeholder="e.g. 123"
          />
        </p>
      </form>
    </main>
  </section>
</template>

<script>
import CreditCardFront from "./components/CreditCardFront.vue";
import CreditCardBack from "./components/CreditCardBack.vue";
import BaseError from "./components/BaseError.vue";
import BaseInput from "./components/BaseInput.vue";

export default {
  components: {
    CreditCardFront,
    CreditCardBack,
    BaseInput,
    BaseError,
  },
  
  data() {
    return {
      card: {
        front: {
          number: "",
          name: "",
          mm: "",
          yy: "",
        },
        back: {
          cvc: "",
        },
      },
    };
  },

 
  methods: {
   
   
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
  },
 
};
</script>

<style scoped lang="scss">
.card {
  &__header {
    position: relative;
    min-height: toRem(240);
    padding: toRem(47) toRem(24) toRem(57) toRem(65);
    background: $deep-violet;
  }

  &__front {
    position: absolute;
    left: toRem(17);
    top: toRem(145);
    z-index: 10;
  }

  &__main {
    margin-top: toRem(91);
    padding: 0 toRem(24) 0 toRem(24);
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: toRem(20);
  }

  .input-wrapper {
    display: flex;
    gap: toRem(11);
  }

  .card__cvc {
    width: 50%;
  }

  &__yy,
  &__mm {
    width: 22%;
  }
}
</style>