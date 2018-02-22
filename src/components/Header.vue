<template>
  <div class="ui secondary menu">
    <router-link to="/" class="header item">dover</router-link>
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
      <sui-dropdown id="nav-toggle" :options="[]" v-if="isLoggedIn" icon="none">
        <sui-dropdown-menu>
          <router-link to="/dashboard/bio" class="ui button fluid">
            <sui-icon fitted name="pencil alternate" />
            Profile
          </router-link>
          <sui-button fluid @click.native="logout" icon="power off">
            Logout
          </sui-button>
        </sui-dropdown-menu>
      </sui-dropdown>
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
#nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.3em;
  border-top: 0.2em solid black;
  border-bottom: 0.2em solid black;
}
#nav-toggle:before {
    content: "";
    position: absolute;
    top: 0.3em;
    left: 0px;
    width: 100%;
    border-top: 0.2em solid black;
}
</style>
