<template>
  <sui-container fluid>
    <div class="ui top attached tabular menu" id="menu">
      <router-link
        to="/dashboard/bio"
        class="item"
        active-class="active">
        Bio
      </router-link>
      <router-link
        to="/dashboard/projects"
        class="item"
        active-class="active">
        Projects
      </router-link>
      <router-link
        to="/dashboard/messages"
        class="item"
        active-class="active">
        Messages
      </router-link>
      <router-link
        to="/dashboard/search"
        class="item"
        active-class="active">
        Search
      </router-link>
    </div>
    <router-view></router-view>
  </sui-container>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
#menu {
  margin-bottom: 2em;
}
</style>
