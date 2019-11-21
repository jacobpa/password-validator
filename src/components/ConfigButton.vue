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
const parseEventInput = e => {
  if (e.target) {
    return e.target.type === "number"
      ? parseInt(e.target.value, 10)
      : e.target.value;
  }
  if (parseInt(e, 10)) {
    return parseInt(e, 10);
  }

  return 0;
};
export default {
  computed: {
    config() {
      return this.$store.state.configuration;
    }
  },
  methods: {
    setMinLength(e) {
      this.$store.commit("setMinLength", parseEventInput(e));
    },
    setMinSpecialChar(e) {
      this.$store.commit("setMinSpecialChar", parseEventInput(e));
    },
    setMinUpperChar(e) {
      this.$store.commit("setMinUpperChar", parseEventInput(e));
    },
    setMinLowerChar(e) {
      this.$store.commit("setMinLowerChar", parseEventInput(e));
    },
    setMinNumeric(e) {
      this.$store.commit("setMinNumeric", parseEventInput(e));
    }
  },
  props: {
    minLength: Number,
    minSpecChar: Number,
    minUpperChar: Number,
    minLowerChar: Number,
    minNumeric: Number
  }
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
  border: none;
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
