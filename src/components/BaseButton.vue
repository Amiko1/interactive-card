<template>
  <button class="button">
    <slot></slot>
  </button>
</template>



<style scoped lang="scss">
    .button {
        @include headlineL;
        padding: toRem(15) toRem(130);
        background: $deep-violet;
        color:$white;
        border-radius: 8px;
        margin-bottom: 8px;
        &:focus{
          outline: 5px solid $blue;
        }
    }
</style>