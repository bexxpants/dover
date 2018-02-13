/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

const state = {
  isLogged: !!localStorage.getItem('doverToken'),
};

const mutations = {
  [LOGIN_USER](state) {
    state.isLogged = true;
  },
  [LOGOUT_USER](state) {
    state.isLogged = false;
  },
};

const actions = {
  login({ commit }, creds) {
    localStorage.setItem('doverToken', creds.token);
    commit(LOGIN_USER);
  },
  logout({ commit }) {
    localStorage.removeItem('doverToken');
    commit(LOGOUT_USER);
  }
};

const getters = {
  isLoggedIn: state => {
    return state.isLogged;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});