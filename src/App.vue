<template>
  <section class="card">
    <header class="card__header">
      <CreditCardFront
        :card="{
          name,
          mm,
          yy,
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
          placeholder="e.g. Jane Appleseed"
          onkeydown="return /^[a-zA-Z ]*$/i.test(event.key)"
        />

        <BaseInput
          v-model="number"
         
          :error="numberError"
          @keypress="onlyNumber"
          label="Card Number"
          class="card--input"
          maxlength="16"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <p class="input-wrapper">
          <BaseInput
            v-model="mm"
            @keypress="onlyNumber"
            label="MM"
            class="card--input card__mm"
            placeholder="MM"
            maxlength="2"
          />
          <BaseInput
            v-model="yy"
            label="YY"
            @keypress="onlyNumber"
            class="card--input card__yy"
            placeholder="YY"
            maxlength="2"
          />
          <BaseInput
            @keypress="onlyNumber"
            v-model="cvc"
            label="CVC"
            class="card--input card__cvc"
            placeholder="e.g. 123"
            maxlength="3"
          />
        </p>
        <div class="errors">
          <BaseError v-if="mmError"  :error="mmError"   />
          <BaseError v-if="yyError"  :error="yyError" />
          <BaseError v-if="cvcError"  :error="cvcError" />
        </div>
        <base-button class="card__button" type="submit">Confirm</base-button>
      </form>
    </main>
  </section>
</template>

<script>
import CreditCardFront from "./components/CreditCardFront.vue";
import CreditCardBack from "./components/CreditCardBack.vue";
import ThankFullVue from "./components/ThankFull.vue";
import BaseButton from './components/BaseButton.vue'
import BaseError from "./components/BaseError.vue";
import BaseInput from "./components/BaseInput.vue";
import { useField, useForm } from "vee-validate";
import { ref } from "vue";
import * as yup from "yup";

export default {
  components: {
    CreditCardFront,
    CreditCardBack,
    BaseInput,
    BaseError,
    CreditCardFront,
    BaseButton,
    ThankFullVue
  },

  setup() {
    
    const isFormSubmited = ref(false)

    const validationSchema = yup.object({
      number: yup.string().required("This field is required").min(16),
      name: yup.string().required("this field is required").min(4),
      yy: yup.string().required("this ffield is required").min(2),
      mm: yup.string().required("this field is requried").min(2),
      cvc: yup.string().required("this field is required").min(3),
    });

    const { handleSubmit } = useForm({ validationSchema });

    const { value: number, errorMessage: numberError } = useField("number");

    const { value: name, errorMessage: nameError } = useField("name");

    const { value: yy, errorMessage: yyError } = useField("yy");

    const { value: mm, errorMessage: mmError } = useField("mm");

    const { value: cvc, errorMessage: cvcError } = useField("cvc");

    const submit = handleSubmit(values => {
      isFormSubmited.value = true;
    })

    const continueForm = () => {
       isFormSubmited.value = false;
    }

    return {
      number,
      numberError,
      name,
      nameError,
      yy,
      yyError,
      mm,
      mmError,
      cvc,
      cvcError,
      submit,
      isFormSubmited,
      continueForm
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
    left: 50%;  
    transform: translateX(-60%)
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
    gap: toRem(11);
  }

  .card__cvc {
    width: 50%;
  }

  &__yy,
  &__mm {
    width: 22%;
  }

  .errors {
    display: flex;
    flex-direction: column;
    gap: toRem(5)
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
      left:initial;
      right: -126px;
      
       position:relative;
    }
    &__back {
      margin: initial;
      position: relative;

      top:toRem(170);
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