<template>
  <div is="sui-container" fluid>
    <div class="ui top attached tabular menu">
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
    <div class="ui bottom attached active tab segment">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style>
</style>
