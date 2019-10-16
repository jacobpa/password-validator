import Vue from 'vue';
import Vuex from 'vuex';
import configuration from './modules/configuration';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    configuration,
  },
});
