<template>
    <div class="criteria">
        <p v-bind:class="[valid ? passed : failed]">
            {{valid ? passMessage : failMessage}}
        </p>
    </div>
</template>

<script>
export default {
  props: {
    valid: Boolean,
    passMessage: String,
    failMessage: String,
  },
  data() {
    return {
      passed: 'valid',
      failed: 'invalid',
    };
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
