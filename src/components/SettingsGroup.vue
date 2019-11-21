<template>
  <div class="input-group">
    <label for="length">
      <slot></slot>
    </label>

    <input id="length" type="number" min="0" :value="config.minLength" @input="setMinLength" />
  </div>
</template>

<script>
export default {
  computed: {
    config() {
      return this.$store.state.configuration;
    },
  },
  props: {
    groupLabel: String,
  },
};
</script>

<style></style>
