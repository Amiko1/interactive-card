<template>
  <div class="input-wrap">
    <label   v-if="label">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <p class="error" v-if="error != ''">{{error && `* ${error}`}}</p>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    
  },
});
</script>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  flex-direction: column;
  gap: toRem(9);
  align-items: start;
  label {
    @include bodyS;
    font-weight: 600;
  }
  input {
    width: 100%;
    padding: toRem(11) 0 toRem(11) toRem(16);
    font-size: 16px;
    border-radius: 8px;
    color: $deep-violet;
    border: 1px solid #dfdee0;
    @include headlineL;
    &:focus {
      outline: 1px solid $blue;
    }
    &::placeholder {
      opacity: 0.25;
      letter-spacing: 0.2px;
    }
  }
  .error {
    @include bodyS;
    color: $red;
    
    
  }
}
</style>