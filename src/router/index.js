import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import Dashboard from '@/components/Dashboard';
import projects from '@/components/Dashboard/projects';
import messages from '@/components/Dashboard/messages';
import search from '@/components/Dashboard/search';

Vue.use(Router);

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
      children: [
        {
          path: 'projects',
          component: projects,
        },
        {
          path: 'messages',
          component: messages,
        },
        {
          path: 'search',
          component: search,
        },
      ],
    },
  ],
  mode: 'history',
});
