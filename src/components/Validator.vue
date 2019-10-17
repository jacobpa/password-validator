<template>
    <div class="validator">
      <input type="text" spellcheck="false" v-model="password"/>
      <div class="criteria-container">
        <criteria
          :pass-message="`Password is ${password.length} characters long`"
          :fail-message="`Password should be at least ${config.minLength} characters long`"
          v-bind:valid="lengthValidator()"
        />
        <criteria
          :pass-message="`${specialCharCount} special characters`"
          :fail-message="`Should have at least ${config.minSpecialChar} special characters`"
          v-bind:valid="specialCharValidator()"
        />
        <criteria
          :pass-message="`${uppercaseCharCount} uppercase characters`"
          :fail-message="`Should have at least ${config.minUpperChar} uppercase characters`"
          v-bind:valid="uppercaseValidator()"
        />
      </div>
    </div>
</template>

<script>
import Criteria from '@/components/Criteria.vue';

export default {
  data() {
    return {
      password: '',
    };
  },
  components: {
    Criteria,
  },
  computed: {
    specialCharCount() {
      const matches = this.password.match(/[^a-zA-Z0-9]/g); // Match all non-alphanumeric characters
      return matches ? matches.length : 0;
    },
    uppercaseCharCount() {
      const matches = this.password.match(/[A-Z]/g);
      return matches ? matches.length : 0;
    },
    config() {
      return this.$store.state.configuration;
    },
  },
  methods: {
    lengthValidator() {
      return this.password.length >= this.config.minLength;
    },
    specialCharValidator() {
      return this.specialCharCount >= this.config.minSpecialChar;
    },
    uppercaseValidator() {
      return this.uppercaseCharCount >= this.config.minUpperChar;
    },
  },
};
</script>

<style lang="scss">
.validator {
  display: flex;
  flex-direction: column;
  font-size: 1.25em;

  input {
    margin-bottom: 1rem;
    font-size: 1.5em;
    padding: .25em;
    text-align: center;
  }

  .criteria-container {
    align-self: center;
    display: flex;
    flex-direction: column;

    * {
      align-self: inherit;
    }
  }
}
</style>
