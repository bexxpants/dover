/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import setAuthorizationHeader from '../utils/setAuthorizationHeader';

Vue.use(Vuex);

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const EDITING_PROJECT = 'EDITING_PROJECT';
const PROJECT_EDITED = 'PROJECT_EDITED';

const state = {
  isLogged: !!localStorage.getItem('doverToken'),
  editingProject: false,
  projectToEdit: {},
};

const mutations = {
  [LOGIN_USER](state) {
    state.isLogged = true;
  },
  [LOGOUT_USER](state) {
    state.isLogged = false;
  },
  [EDITING_PROJECT](state) {
    state.editingProject = true;
  },
  [PROJECT_EDITED](state) {
    state.editingProject = false;
  },
};

const actions = {
  login({ commit }, creds) {
    localStorage.setItem('doverToken', creds.token);
    setAuthorizationHeader(localStorage.doverToken);
    commit(LOGIN_USER);
  },
  logout({ commit }) {
    localStorage.removeItem('doverToken');
    setAuthorizationHeader();
    commit(LOGOUT_USER);
  },
  editProject({ commit }, project) {
    state.projectToEdit = project;
    commit(EDITING_PROJECT);
  },
  projectEdited({ commit }) {
    commit(PROJECT_EDITED);
  },
};

const getters = {
  isLoggedIn: state => {
    return state.isLogged;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
