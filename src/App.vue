<template>
  <div>
    <CardFront customerName="felicia leire" />
    <CardBack cvc="142" />
  </div>
</template>

<script>
import CardFront from "./components/CardFront.vue";
 import CardBack from "./components/CardBack.vue";

export default {
  components: {
    CardFront,
     CardBack
  },
};
</script>

<style scoped lang="scss">

div {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
</style>