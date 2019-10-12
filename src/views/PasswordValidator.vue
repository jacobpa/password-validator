<template>
  <div class="password-validator">
    <validator />
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
  justify-self: center;
  align-self: center;
  margin: 1em 0;
}
</style>
