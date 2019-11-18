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
        <li><button class = "button1" v-on:click="
        config.minLength = 6,
        config.minSpecialChar = 0,
        config.minUpperChar = 0,
        config.minLowerChar = 0 ">Facebook</button></li>

        <li><button class = "button1" v-on:click="
        config.minLength = 8,
        config.minSpecialChar = 3,
        config.minUpperChar = 3,
        config.minLowerChar = 3 ">OSU</button></li>

        <li><button class = "button1" v-on:click="
        config.minLength = 8,
        config.minSpecialChar = 0,
        config.minUpperChar = 0,
        config.minLowerChar = 0 ">Piazza</button></li>

        <li><button class = "button1" v-on:click="
        config.minLength = 8,
        config.minSpecialChar = 1,
        config.minUpperChar = 1,
        config.minLowerChar = 1 ">Github</button></li>

        <li><button class = "button1" v-on:click="
        config.minLength = 8,
        config.minSpecialChar = 1,
        config.minUpperChar = 1,
        config.minLowerChar = 1 ">YouTube</button></li>

        <li><button class = "button1" v-on:click="
        config.minLength = 8,
        config.minSpecialChar = 1,
        config.minUpperChar = 0,
        config.minLowerChar = 0 ">Stack Overflow</button></li>

        <li><button class = "button1" v-on:click="
        config.minLength = 6,
        config.minSpecialChar = 0,
        config.minUpperChar = 0,
        config.minLowerChar = 0 ">Reddit</button></li>

        <li><button class = "button1" v-on:click="
        config.minLength = 8,
        config.minSpecialChar = 2,
        config.minUpperChar = 2,
        config.minLowerChar = 2 ">Default Settings</button></li>
      </ul>

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

  .configurations{
    li {list-style-type: none;
      float: left;
      padding-right: 20px;
      }

      button {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
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

      .button1 {
        background-color: white;
        color: black;
        border: 2px solid #001F3F;
      }

      .button1:hover {
        background-color: #001F3F;
        color: white;
      }
  }
}
</style>
