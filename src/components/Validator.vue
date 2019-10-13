<template>
    <div class="validator">
        <input type="text" spellcheck="false" v-model="password"/>
        <div class="criteria-container">
          <criteria
              :pass-message="`Password is ${password.length} characters long`"
              fail-message="Password should be at least eight characters long"
              v-bind:valid="lengthValidator()"
          />
          <criteria
              :pass-message="`${specialCharCount} special characters`"
              fail-message="Should have at least two special characters"
              v-bind:valid="specialCharValidator()"
          />
          <criteria
              :pass-message="`${uppercaseCharCount} uppercase characters`"
              fail-message="Should have at least two uppercase characters"
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
  },
  methods: {
    lengthValidator() {
      return this.password.length >= 8;
    },
    specialCharValidator() {
      return this.specialCharCount >= 2;
    },
    uppercaseValidator() {
      return this.uppercaseCharCount >= 2;
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
