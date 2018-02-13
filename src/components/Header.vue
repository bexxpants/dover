<template>
  <div class="ui secondary menu">
    <router-link to="/" class="header item">dover</router-link>
    <div class="ui icon input">
      <input type="text" placeholder="Search...">
      <i class="search icon"></i>
    </div>
    <div class="right menu">
      <router-link
        to="signup"
        class="ui button primary"
        v-if="!isLoggedIn">
        Sign up
      </router-link>
      <router-link
        to="login"
        tag ="button"
        class="ui button"
        v-if="!isLoggedIn">
        Login
      </router-link>
      <button href=""
        class="ui button"
        v-if="isLoggedIn"
        @click="logout">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
  },
};
</script>

<style>
.ui.menu {
  padding: 5px;
}
</style>
