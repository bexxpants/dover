<template>
<sui-card-group :items-per-row="3">
  <sui-card v-for="project in projects" :key="project._id">
    <sui-card-content>
      <sui-card-header>{{project.name}}</sui-card-header>
      <sui-card-meta>{{project.pay}}</sui-card-meta>
      <sui-card-meta>{{project.budget}}</sui-card-meta>
      <sui-card-description>{{project.description}}</sui-card-description>
    </sui-card-content>
    <sui-button attached="bottom">
      WIP
    </sui-button>
  </sui-card>
</sui-card-group>
</template>

<script>
export default {
  name: 'projectsCreated',
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>

</style>
