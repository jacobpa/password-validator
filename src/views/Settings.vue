<template>
  <div class="settings">
    <h1>Settings</h1>
    <div class="config-options">
      <Setting name="minLength" :mutator="setMinLength">
        Minimum length of password
      </Setting>
      <Setting name="minSpecialChar" :mutator="setMinSpecialChar">
        Minimum number of special characters
      </Setting >
      <Setting name="minUpperChar" :mutator="setMinUpperChar">
        Minimum number of uppercase characters
      </Setting>
      <Setting name="minLowerChar" :mutator="setMinLowerChar">
        Minimum number of lowercase characters
      </Setting>
      <Setting name="minNumeric" :mutator="setMinNumeric">
        Minimum number of numerical characters
      </Setting>
      <RepeatingCharSetting
        name="maxRepeating"
        :mutator="setMaxRepeating"
        checkboxBoolean="repeatingIsCaseSensitive"
        :booleanMutator="toggleRepeatingSensitivity">
        Maximum number of repeating characters
      </RepeatingCharSetting>
    </div>
    <h1>Configurations</h1>
    <div class="button-container">
        <ConfigButton
          :minLength="6"
          :minSpecChar="0"
          :minUpperChar="0"
          :minLowerChar="0"
          :minNumeric="0"
          :maxRepeating="0"
        >Facebook
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="1"
          :minUpperChar="3"
          :minLowerChar="3"
          :minNumeric="3"
          :maxRepeating="0"
        >OSU
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="0"
          :minUpperChar="0"
          :minLowerChar="0"
          :minNumeric="0"
          :maxRepeating="0"
        >Piazza
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="0"
          :minUpperChar="0"
          :minLowerChar="1"
          :minNumeric="1"
          :maxRepeating="0"
        >Github
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="1"
          :minUpperChar="1"
          :minLowerChar="1"
          :minNumeric="1"
          :maxRepeating="0"
        >Youtube
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="0"
          :minUpperChar="1"
          :minLowerChar="1"
          :minNumeric="1"
          :maxRepeating="0"
        >Stack Overflow
        </ConfigButton>

        <ConfigButton
          :minLength="6"
          :minSpecChar="0"
          :minUpperChar="0"
          :minLowerChar="0"
          :minNumeric="0"
          :maxRepeating="0"
        >Reddit
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="2"
          :minUpperChar="2"
          :minLowerChar="2"
          :minNumeric="2"
          :maxRepeating="3"
        >Default Settings
        </ConfigButton>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ConfigButton from '@/components/ConfigButton.vue';
import Setting from '@/components/Setting.vue';
import RepeatingCharSetting from '@/components/RepeatingCharSetting.vue';

export default {
  components: {
    RepeatingCharSetting,
    Setting,
    ConfigButton,
  },
  computed: {
    config() {
      return this.$store.state.configuration;
    },
  },
  methods: {
    ...mapMutations([
      'setMinLength',
      'setMinSpecialChar',
      'setMinUpperChar',
      'setMinLowerChar',
      'setMinNumeric',
      'setMaxRepeating',
      'toggleRepeatingSensitivity',
    ]),
  },
};
</script>

<style lang="scss">
  .settings {
    display: flex;
    flex-direction: column;

    h1:not(:first-child) {
      margin-top: 1.5rem;
    }

    .config-options {
      display: grid;
      grid-template-columns: 50% 25% 25%;
      grid-row-gap: 1em;

      > div {
        display: contents;
      }

      .description {
        grid-column: 1 / 2;
      }

      .field {
        grid-column: 2 / 3;
      }

      .inputs {
        grid-column: 3 / 4;
      }
    }

    .button-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
