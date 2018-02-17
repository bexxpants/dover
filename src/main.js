// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';
import decode from 'jwt-decode';
import App from './App';
import router from './router';
import store from './store';
import setAuthorizationHeader from './utils/setAuthorizationHeader';

Vue.config.productionTip = false;
Vue.use(SuiVue);
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'http://localhost:8081/api/';
Vue.use(Vuelidate);

if (localStorage.doverToken) {
  const payload = decode(localStorage.doverToken);
  const user = {
    token: localStorage.doverToken,
    email: payload.email,
  };
  setAuthorizationHeader(localStorage.doverToken);
  store.dispatch('login', user);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
