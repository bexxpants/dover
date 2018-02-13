import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import Dashboard from '@/components/Dashboard';

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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
  mode: 'history',
});
