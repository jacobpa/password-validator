<template>
  <div class="setting">
    <label :for="name">
      <slot>Value for setting</slot>
    </label>
    <input
      :id="name"
      type="number"
      min="0"
      :value="0"
      @input="validator"
    />
  </div>
</template>

<script>
export default {
  name: 'Setting',
  props: {
    validator: {
      type: Function,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .setting {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    flex-wrap: nowrap;
    margin: 0 0.5rem 1.5rem 0.5rem;
    font-size: 1.25em;

    input {
      font-size: inherit;
    }
  }
</style>
