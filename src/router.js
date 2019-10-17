import Vue from 'vue';
import Router from 'vue-router';
import PasswordValidator from './views/PasswordValidator.vue';
import Settings from './views/Settings.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'password-validator',
      component: PasswordValidator,
    },
    {
      path: '/settings/',
      name: 'settings',
      component: Settings,
    },
  ],
});
