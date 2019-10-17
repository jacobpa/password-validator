<template>
    <div class="validator">
      <input type="text" spellcheck="false" v-model="password"/>
      <div class="criteria-container">
        <criteria
          :pass-message="`Password is ${password.length} characters long`"
          :fail-message="`Password should be at least ${config.minLength} characters long`"
          :validator="validators.length"
          :password="password"
        />
        <criteria
          :pass-message="`${specialCharCount} special characters`"
          :fail-message="`Should have at least ${config.minSpecialChar} special characters`"
          :validator="validators.specialChar"
          :password="password"
        />
        <criteria
          :pass-message="`${uppercaseCharCount} uppercase characters`"
          :fail-message="`Should have at least ${config.minUpperChar} uppercase characters`"
          :validator="validators.upperCaseChar"
          :password="password"
        />
      </div>
    </div>
</template>

<script>
import Criteria from '@/components/Criteria.vue';
import validators from '@/util/validators';

export default {
  data() {
    return {
      password: '',
      validators,
    };
  },
  components: {
    Criteria,
  },
  computed: {
    specialCharCount() {
      return validators.specialChar(this.password).value;
    },
    uppercaseCharCount() {
      return validators.upperCaseChar(this.password).value;
    },
    config() {
      return this.$store.state.configuration;
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
