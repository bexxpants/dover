export default {
  user() {
    return this.$store.state.isLogged;
  },
  check() {
    return localStorage.getItem('doverToken');
  },
};
