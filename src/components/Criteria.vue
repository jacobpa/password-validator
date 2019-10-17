<template>
    <div class="criteria">
        <p v-bind:class="[valid ? passed : failed]">
            {{valid ? passMessage : failMessage}}
        </p>
    </div>
</template>

<script>
export default {
  computed: {
    valid() {
      return this.validator(this.password).status;
    },
  },
  data() {
    return {
      passed: 'valid',
      failed: 'invalid',
    };
  },
  props: {
    validator: Function,
    password: String,
    passMessage: String,
    failMessage: String,
  },
};
</script>

<style lang="scss">
p {
  text-align: center;

    &.invalid {
        color: $red;
    }

    &.valid {
        color: $green;
    }
}
</style>
