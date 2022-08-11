<template>
  <section class="card">
    <header aria-hidden="true" class="card__header">
      <CreditCardFront
        v-bind="{
          name,
          month,
          year,
          number,
        }"
        class="card__front"
      />
      <CreditCardBack :cvc="cvc" class="card__back" />
    </header>
    <main class="card__main">
      <ThankFullVue @continue-form="continueForm" v-if="isFormSubmited" />
      <form v-else @submit="submit" class="card__form">
        <BaseInput
          :error="nameError"
          v-model="name"
          label="Cardholder Name"
          class="card--input"
          onkeydown="return /^[a-zA-Z ]*$/i.test(event.key)"
        />

        <BaseInput
          v-model="number"
          :error="numberError"
          @keypress="onlyNumber"
          label="Card Number"
          class="card--input"
          maxlength="16"
        />
        <p class="input-wrapper">
          <BaseInput
            v-model="month"
            @keypress="onlyNumber"
            label="month"
            class="card--input card__month"
            maxlength="2"
          />
          <BaseInput
            v-model="year"
            label="year"
            @keypress="onlyNumber"
            class="card--input card__year"
            maxlength="2"
          />
          <BaseInput
            @keypress="onlyNumber"
            v-model="cvc"
            label="CVC"
            class="card--input card__cvc"
            maxlength="3"
          />
        </p>
        <div class="errors">
          <BaseError v-if="monthError" :error="monthError" />
          <BaseError v-if="yearError" :error="yearError" />
          <BaseError v-if="cvcError" :error="cvcError" />
        </div>
        <base-button class="card__button" type="submit"
          >Confirm
          <span v-if="Object.keys(errors).length !== 0" class="sr-only"
            >is not avaliable because of errors</span
          >
        </base-button>
      </form>
    </main>
  </section>
</template>

<script setup>
import CreditCardFront from "./components/CreditCardFront.vue";
import CreditCardBack from "./components/CreditCardBack.vue";
import ThankFullVue from "./components/ThankFull.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseError from "./components/BaseError.vue";
import BaseInput from "./components/BaseInput.vue";
import { useField, useForm } from "vee-validate";
import { ref, onUpdated } from "vue";
import * as yup from "yup";

let isFormSubmited = ref(false);

const validationSchema = yup.object({
  number: yup.string().required().min(16),
  name: yup.string().required().min(4),
  year: yup.string().required().min(2),
  month: yup.string().required().min(2),
  cvc: yup.string().required().min(3),
});

const { errors, handleSubmit, resetForm } = useForm({ validationSchema });

const { value: number, errorMessage: numberError } = useField("number");
const { value: name, errorMessage: nameError } = useField("name");
const { value: year, errorMessage: yearError } = useField("year");
const { value: month, errorMessage: monthError } = useField("month");
const { value: cvc, errorMessage: cvcError } = useField("cvc");

const submit = handleSubmit((values) => {
  isFormSubmited.value = true;
});

const continueForm = () => {
  isFormSubmited.value = false;
  resetForm();
};

const onlyNumber = ($event) => {
  let keyCode = $event.keyCode ? $event.keyCode : $event.which;
  if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
    // 46 is dot
    $event.preventDefault();
  }
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
    left: 50%;
    transform: translateX(-60%);
  }

  &__back {
    margin: auto;
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
    justify-content: space-between;
  }

  .card__cvc {
    width: 50%;
  }

  &__year,
  &__month {
    width: 22%;
  }

  .errors {
    display: flex;
    flex-direction: column;
    gap: toRem(5);
  }
}

@media (min-width: 1500px) {
  .card {
    display: flex;
    &__header {
      width: 33%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__main {
      width: 77%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__front {
      left: initial;
      transform: initial;
      display: block;
      left: initial;
      right: -126px;

      position: relative;
    }
    &__back {
      margin: initial;
      position: relative;

      top: toRem(170);
      right: -226px;
    }
    &__form {
      max-width: toRem(381);
    }

    &__button {
      cursor: pointer;
      transition: opacity 0.4s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>