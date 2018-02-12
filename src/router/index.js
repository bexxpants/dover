import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import OwnerDash from '@/components/OwnerDash';
import FreelanceDash from '@/components/FreelanceDash';

Vue.use(Router);
Vue.use(VeeValidate);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/ownerdash',
      name: 'OwnerDash',
      component: OwnerDash,
    },
    {
      path: '/freelancedash',
      name: 'FreelanceDash',
      component: FreelanceDash,
    },
  ],
});
