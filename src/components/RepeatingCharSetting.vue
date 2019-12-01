<template>
  <div class="setting">
    <label :for="name">
      <slot>Value for setting</slot>
    </label>
    <div class="inputs">
      <input
        :id="name"
        type="number"
        min="0"
        :value="configValue"
        @input="mutator"
      />
      <label>Case-Sensitive?
        <input
          name="config-toggle"
          type="checkbox"
          :checked="configCheckbox"
          @input="booleanMutator"
        >
      </label>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    /**
     * The mutator function to use. Should come from @/store/modules/configuration.js
     */
    mutator: {
      type: Function,
      required: true,
    },
    /**
     * The mutator function to use for the toggle
     */
    booleanMutator: {
      type: Function,
      required: true,
    },
    /**
     * The name of the boolean validator to use for the checkbox.
     */
    checkboxBoolean: {
      type: String,
      required: true,
    },
    /**
     * The name of the configuration option as it appears in @/store/modules/configuration.js, i.e.
     * the name of the value in the state object.
     */
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    /**
     * Dynamically set configValue to value of the option passed through the name prop
     */
    ...mapState({
      configValue(state) {
        return state.configuration[this.name];
      },
      configCheckbox(state) {
        return state.configuration[this.checkboxBoolean];
      },
    }),
  },
};
</script>

<style lang="scss">
  .setting {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0 0.5rem 1.5rem 0.5rem;
    font-size: 1.25em;

    .inputs {
      display: flex;
      flex-direction: row;
      align-items: center;

      label {
        font-size: 0.75em;
        margin-left: 1em;
      }
      input {
        font-size: inherit;
        margin-left: 0.25em;
      }
    }
  }
</style>
