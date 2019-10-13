<template>
  <div class="password-validator">
    <h1>Password Validator</h1>
    <div class="validator-container">
      <validator />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Validator from '@/components/Validator.vue';

export default {
  name: 'password-validator',
  components: {
    Validator,
  },
};
</script>

<style lang="scss">
.password-validator {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 1.5em;
}

h1 {
  grid-column: 1 / 13;
  text-align: center;
}

.validator-container {
  grid-row: 2;
}

@media only screen and (max-width: 400px) {
  .validator-container {
    grid-column: 1 / 13;
  }
}

@media only screen and (min-width: 401px) and (max-width: 960px) {
  .validator-container {
    grid-column: 3 / 11;
  }
}

@media only screen and (min-width: 961px) {
  .validator-container {
    grid-column: 5 / 9;
  }
}
</style>
