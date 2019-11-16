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
  <div class = "configurations">
    <h1>Configurations</h1>
      <ul>
        <li><button v-on:click="config.minLength = 6, config.minSpecialChar = 0, config.minUpperChar = 0,config.minLowerChar = 0 ">Facebook</button></li>
        <li><button v-on:click="config.minLength = 8, config.minSpecialChar = 3, config.minUpperChar = 3,config.minLowerChar = 3 ">OSU</button></li>
      </ul>
      
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

  .configurations{
    li {list-style-type: none;
      float: left;
      padding-right: 20px;
      }
  }
}
</style>
