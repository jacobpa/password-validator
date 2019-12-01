<template>
  <li>
    <button
      @click="
       setMinLength(minLength);
       setMinSpecialChar(minSpecChar);
       setMinUpperChar(minUpperChar);
       setMinLowerChar(minLowerChar);
       setMinNumeric(minNumeric)"
    >
      <slot></slot>
    </button>
  </li>
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
    ]),
  },
  props: {
    minLength: Number,
    minSpecChar: Number,
    minUpperChar: Number,
    minLowerChar: Number,
    minNumeric: Number,
  },
};
</script>

<style>
li {
  list-style-type: none;
  float: left;
  padding-right: 20px;
}
button {
  background-color: white;
  color: black;
  border: 2px solid #001f3f;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}
button:hover {
  background-color: #001f3f;
  color: white;
}
</style>
