<template>
<sui-card-group :items-per-row="2">
  <sui-card v-for="project in projects" :key="project._id">
    <sui-card-content>
      <sui-card-header>
        {{project.name}}
        <sui-dropdown icon="options" id="optionsButton" :options="[]">
          <sui-dropdown-menu>
            <button class="ui button fluid" @click="deleteProject(project._id)">
              <sui-icon name="trash" /> Delete
            </button>
          </sui-dropdown-menu>
        </sui-dropdown>
      </sui-card-header>
      <sui-card-meta>{{project.pay}}</sui-card-meta>
      <sui-card-meta>{{project.budget}}</sui-card-meta>
      <sui-card-description>{{project.description}}</sui-card-description>
    </sui-card-content>
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
  methods: {
    deleteProject(data) {
      this.axios.post('projects/delete', {
        id: data,
      }).then(() => this.$emit('projectDeleted'));
    },
  },
};
</script>

<style scoped>
#optionsButton {
  background-color: white;
  border-radius: 50%;
  padding: 8px;
  position: absolute;
  right: 0;
  top: 0;
}
#optionsButton:hover {
  color: gray;
}
</style>
