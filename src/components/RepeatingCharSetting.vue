<template>
  <div class="setting">
    <label :for="name" class="description">
      <slot>Value for setting</slot>
    </label>

    <input
      class="field"
      :id="name"
      type="number"
      min="0"
      :value="configOption.value"
      @input="mutator"
    />

    <div class="toggles">
      <label>
        <input
          type="checkbox"
          :checked="configOption.enabled"
          @input="toggleEnabled"
        />Enabled?
      </label>
      <label>
        <input
          name="config-toggle"
          type="checkbox"
          :checked="configCheckbox"
          @input="booleanMutator"
        >Case-Sensitive?
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
      configOption(state) {
        return state.configuration[this.name];
      },
      configCheckbox(state) {
        return state.configuration[this.checkboxBoolean].value;
      },
    }),
  },
  methods: {
    toggleEnabled() {
      this.$store.commit('toggleEnabled', this.name);
    },
  },
};
</script>


<style lang="scss">
  /* This is handled in @/components/Setting.vue, sorry about the tight coupling */
</style>
