<template>
  <div class="settings">
    <h1>Settings</h1>
    <div class="input-group">
      <label for="length">Minimum length of password</label>
      <input
        id="length" type="number" min="0"
        :value="config.minLength"
        @input="setMinLength"
      />
    </div>
    <div class="input-group">
      <label for="specialChar">Minimum number of special characters</label>
      <input
        id="specialChar" type="number" min="0"
        :value="config.minSpecialChar"
        @input="setMinSpecialChar"
      />
    </div>
    <div class="input-group">
      <label for="upperChar">Minimum number of uppercase characters</label>
      <input
        id="upperChar" type="number" min="0"
        :value="config.minUpperChar"
        @input="setMinUpperChar"
      />
    </div>
    <div class="input-group">
      <label for="lowerChar">Minimum number of lowercase characters</label>
      <input
        id="lowerChar" type="number" min="0"
        :value="config.minLowerChar"
        @input="setMinLowerChar"
      />
    </div>
  </div>
</template>

<script>
const parseEventInput = e => (e.target.type === 'number' ? parseInt(e.target.value, 10) : e.target.value);

export default {
  computed: {
    config() {
      return this.$store.state.configuration;
    },
  },
  methods: {
    setMinLength(e) {
      this.$store.commit('setMinLength', parseEventInput(e));
    },
    setMinSpecialChar(e) {
      this.$store.commit('setMinSpecialChar', parseEventInput(e));
    },
    setMinUpperChar(e) {
      this.$store.commit('setMinUpperChar', parseEventInput(e));
    },
    setMinLowerChar(e) {
      this.$store.commit('setMinLowerChar', parseEventInput(e));
    },
  },
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
