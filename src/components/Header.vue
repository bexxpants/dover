<template>
  <div class="ui secondary menu">
    <router-link to="/" class="header item">dover</router-link>
    <div class="right menu">
      <router-link to="#" class="ui button primary">Sign up</router-link>
      <router-link to="login" tag ="button" class="ui button">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
.ui.menu {
  padding: 5px;
}
</style>
