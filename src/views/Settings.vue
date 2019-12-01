<template>
  <div class="settings">
    <h1>Settings</h1>
    <Setting name="minLength" :validator="setMinLength">
      Minimum length of password
    </Setting>
    <Setting name="minSpecialChar" :validator="setMinSpecialChar">
      Minimum number of special characters
    </Setting >
    <Setting name="minUpperChar" :validator="setMinUpperChar">
      Minimum number of uppercase characters
    </Setting>
    <Setting name="minLowerChar" :validator="setMinLowerChar">
      Minimum number of lowercase characters
    </Setting>
    <Setting name="minNumeric" :validator="setMinNumeric">
      Minimum number of numerical characters
    </Setting>
    <Setting name="maxRepeating" :validator="setMaxRepeating">
      Maximum number of repeating characters (case-sensitive)
    </Setting>

    <div class="configurations">
      <h1>Configurations</h1>
      <ul>
        <ConfigButton
          :minLength="6"
          :minSpecChar="0"
          :minUpperChar="0"
          :minLowerChar="0"
          :minNumeric="0"
        >Facebook
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="1"
          :minUpperChar="3"
          :minLowerChar="3"
          :minNumeric="3"
        >OSU
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="0"
          :minUpperChar="0"
          :minLowerChar="0"
          :minNumeric="0"
        >Piazza
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="1"
          :minUpperChar="1"
          :minLowerChar="1"
          :minNumeric="1"
        >Github
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="1"
          :minUpperChar="1"
          :minLowerChar="1"
          :minNumeric="1"
        >Youtube
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="0"
          :minUpperChar="1"
          :minLowerChar="1"
          :minNumeric="1"
        >Stack Overflow
        </ConfigButton>

        <ConfigButton
          :minLength="6"
          :minSpecChar="0"
          :minUpperChar="0"
          :minLowerChar="0"
          :minNumeric="0"
        >Reddit
        </ConfigButton>

        <ConfigButton
          :minLength="8"
          :minSpecChar="2"
          :minUpperChar="2"
          :minLowerChar="2"
          :minNumeric="2"
        >Default Settings
        </ConfigButton>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ConfigButton from '@/components/ConfigButton.vue';
import Setting from '../components/Setting.vue';

export default {
  components: {
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
    ]),
  },
};
</script>

<style lang="scss">
  .settings {
    display: flex;
    flex-direction: column;
  }
</style>
