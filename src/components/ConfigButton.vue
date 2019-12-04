<template>
    <button
      @click="
       setMinLength(minLength);
       setMinSpecialChar(minSpecChar);
       setMinUpperChar(minUpperChar);
       setMinLowerChar(minLowerChar);
       setMinNumeric(minNumeric);
       setMaxRepeating(maxRepeating);"
    >
      <slot></slot>
    </button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    config() {
      return this.$store.state.configuration;
    },
  },
  methods: {
    ...mapMutations([
      'setMinLength',
      'setMinSpecialChar',
      'setMinUpperChar',
      'setMinLowerChar',
      'setMinNumeric',
      'setMaxRepeating',
    ]),
  },
  props: {
    minLength: Number,
    minSpecChar: Number,
    minUpperChar: Number,
    minLowerChar: Number,
    minNumeric: Number,
    maxRepeating: Number,
  },
};
</script>

<style lang="scss">
button {
  background-color: white;
  color: black;
  border: 2px solid $navy;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0.25em 0.25em;
  transition-duration: 0.4s;
  cursor: pointer;
}
button:hover {
  background-color: $navy;
  color: white;
}
</style>
