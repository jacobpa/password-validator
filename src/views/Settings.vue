<template>
  <div class="settings">
    <h1>Settings</h1>
    <div class="input-group">
      <label for="length">Minimum length of password</label>
      <input id="length" type="number" min="0" :value="config.minLength" @input="setMinLength" />
    </div>
    <div class="input-group">
      <label for="specialChar">Minimum number of special characters</label>
      <input
        id="specialChar"
        type="number"
        min="0"
        :value="config.minSpecialChar"
        @input="setMinSpecialChar"
      />
    </div>
    <div class="input-group">
      <label for="upperChar">Minimum number of uppercase characters</label>
      <input
        id="upperChar"
        type="number"
        min="0"
        :value="config.minUpperChar"
        @input="setMinUpperChar"
      />
    </div>
    <div class="input-group">
      <label for="lowerChar">Minimum number of lowercase characters</label>
      <input
        id="lowerChar"
        type="number"
        min="0"
        :value="config.minLowerChar"
        @input="setMinLowerChar"
      />
    </div>
    <div class="input-group">
      <label for="numerics">Minimum number of numerical characters</label>
      <input id="numerics" type="number" min="0" :value="config.minNumeric" @input="setMinNumeric" />
    </div>

    <div class="configurations">
      <h1>Configurations</h1>
      <ul>
        <ConfigButton
          :minLength="6"
          :minSpecChar="0"
          :minUpperChar="0"
          :minLowerChar="0"
          :minNumeric="0"
        >Facebook</ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="1"
          :minUpperChar="3"
          :minLowerChar="3"
          :minNumeric="3"
        >OSU</ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="0"
          :minUpperChar="0"
          :minLowerChar="0"
          :minNumeric="0"
        >Piazza</ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="1"
          :minUpperChar="1"
          :minLowerChar="1"
          :minNumeric="1"
        >Github</ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="1"
          :minUpperChar="1"
          :minLowerChar="1"
          :minNumeric="1"
        >Youtube</ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="0"
          :minUpperChar="1"
          :minLowerChar="1"
          :minNumeric="1"
        >Stack Overflow</ConfigButton>

        <ConfigButton
          :minLength="6"
          :minSpecChar="0"
          :minUpperChar="0"
          :minLowerChar="0"
          :minNumeric="0"
        >Reddit</ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="2"
          :minUpperChar="2"
          :minLowerChar="2"
          :minNumeric="2"
        >Default Settings</ConfigButton>
      </ul>
    </div>
  </div>
</template>

<script>
import ConfigButton from "@/components/ConfigButton.vue";
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
  components: {
    ConfigButton
  },
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
  }
};
</script>

<style lang="scss">
.settings {
  display: flex;
  flex-direction: column;

  .input-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    flex-wrap: nowrap;
    margin: 0em 0.5rem 1.5rem 0.5rem;
    font-size: 1.25em;

    input {
      font-size: inherit;
    }
  }
}
</style>
