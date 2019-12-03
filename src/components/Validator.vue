<template>
  <div class="validator">
    <input type="text" spellcheck="false" :value="password" @input="updatePassword"/>
    <div class="criteria-container">
      <criteria
        v-if="config.minLength.enabled"
        :pass-message="`Password is ${password.length} characters long`"
        :fail-message="`Password should be at least ${config.minLength.value} characters long`"
        :validator="validators.length"
      />
      <criteria
        v-if="config.minSpecialChar.enabled"
        :pass-message="`Password has ${specialCharCount} special characters`"
        :fail-message="`Should have at least ${config.minSpecialChar.value} special characters`"
        :validator="validators.specialChar"
      />
      <criteria
        v-if="config.minUpperChar.enabled"
        :pass-message="`Password has ${uppercaseCharCount} uppercase characters`"
        :fail-message="`Should have at least ${config.minUpperChar.value} uppercase characters`"
        :validator="validators.upperCaseChar"
      />
      <criteria
        v-if="config.minLowerChar.enabled"
        :pass-message="`Password has ${lowercaseCharCount} lowercase characters`"
        :fail-message="`Should have at least ${config.minLowerChar.value} lowercase characters`"
        :validator="validators.lowerCaseChar"
      />
      <criteria
        v-if="config.minNumeric.enabled"
        :pass-message="`Password has ${numericalCount} numerics`"
        :fail-message="`Should have at least ${config.minNumeric.value} numerics`"
        :validator="validators.numerical"
      />
      <criteria
        v-if="config.maxRepeating.enabled"
        pass-message="Password contains  no illegal repeated character sequences"
        :fail-message="`Password has ${repeatedSequences.count} repeated character sequences:
          ${repeatedSequences.matches}`"
        :validator="validators.repeating"
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
      validators,
    };
  },
  components: {
    Criteria,
  },
  computed: {
    specialCharCount() {
      return validators.specialChar(this.password).count;
    },
    uppercaseCharCount() {
      return validators.upperCaseChar(this.password).count;
    },
    lowercaseCharCount() {
      return validators.lowerCaseChar(this.password).count;
    },
    numericalCount() {
      return validators.numerical(this.password).count;
    },
    repeatedSequences() {
      const { count, matches } = validators.repeating(this.password);
      return {
        count,
        matches,
      };
    },
    password() {
      return this.config.password;
    },
    config() {
      return this.$store.state.configuration;
    },
  },
  methods: {
    updatePassword(e) {
      this.$store.commit('setPassword', e.target.value);
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
      box-sizing: border-box;
      width: 100%;
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
