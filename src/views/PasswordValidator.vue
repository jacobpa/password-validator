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
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
