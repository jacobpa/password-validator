import Vue from 'vue';
import Router from 'vue-router';
import PasswordValidator from './views/PasswordValidator.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'password-validator',
      component: PasswordValidator,
    },
  ],
});
