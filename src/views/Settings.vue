<template>
  <div class="settings">
    <h1>Settings</h1>
    <div class="input-group">
      <label for="length">Minimum length of password</label>
      <input
        oninput="javascript: if(this.value.length > this.maxLength)
          this.value =9999;"
        id="length" type="number" min="0"
        :value="config.minLength"
        @input="setMinLength"
        :maxlength="4"
      />
    </div>
    <div class="input-group">
      <label for="specialChar">Minimum number of special characters</label>
      <input
        oninput="javascript: if(this.value.length > this.maxLength)
          this.value =9999;"
        id="specialChar" type="number" min="0"
        :value="config.minSpecialChar"
        @input="setMinSpecialChar"
        :maxlength="4"
      />
    </div>
    <div class="input-group">
      <label for="upperChar">Minimum number of uppercase characters</label>
      <input
        oninput="javascript: if(this.value.length > this.maxLength)
          this.value =9999;"
        id="upperChar" type="number" min="0"
        :value="config.minUpperChar"
        @input="setMinUpperChar"
        :maxlength="4"
      />
    </div>
    <div class="input-group">
      <label for="lowerChar">Minimum number of lowercase characters</label>
      <input
        oninput="javascript: if(this.value.length > this.maxLength)
          this.value =9999;"
        id="lowerChar" type="number" min="0"
        :value="config.minLowerChar"
        @input="setMinLowerChar"
        :maxlength="4"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    config() {
      return this.$store.state.configuration;
    },
  },
  methods: {
    setMinLength(e) {
      this.$store.commit('setMinLength', e.target.value);
    },
    setMinSpecialChar(e) {
      this.$store.commit('setMinSpecialChar', e.target.value);
    },
    setMinUpperChar(e) {
      this.$store.commit('setMinUpperChar', e.target.value);
    },
    setMinLowerChar(e) {
      this.$store.commit('setMinLowerChar', e.target.value);
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
