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
  .setting {
    font-size: 1.25em;

    .description {
      margin: auto 0 auto auto;
    }

    .toggles {
      display: flex;
      flex-direction: column;
      margin: auto auto auto 0;

      label {
        font-size: .66em;
        margin: inherit;

        input {
          margin-right: .5em;
        }
      }
    }

    input[type='number'] {
      box-sizing: border-box;
      width: 75%;
      margin: auto;
      font-size: inherit;
    }
  }
</style>
