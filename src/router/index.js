import Vue from 'vue';
import Router from 'vue-router';
import Guard from '@/services/middleware';
import Home from '@/components/Home';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import Dashboard from '@/components/Dashboard';
import bio from '@/components/Dashboard/bio';
import projects from '@/components/Dashboard/projects';
import messages from '@/components/Dashboard/messages';
import search from '@/components/Dashboard/search';
import InitialBio from '@/components/InitialBio';

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
      beforeEnter: Guard.guest,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      beforeEnter: Guard.guest,
    },
    {
      path: '/initialbio',
      name: 'InitialBio',
      component: InitialBio,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: Guard.auth,
      children: [
        { path: 'bio',
          component: bio,
        },
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
