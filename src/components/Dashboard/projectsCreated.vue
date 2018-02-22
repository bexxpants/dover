<template>
<sui-card-group :items-per-row="1">
  <sui-card v-for="project in projects" :key="project._id">
    <sui-card-content>
      <sui-card-header>
        {{project.name}}
        <sui-dropdown icon="options" id="optionsButton" :options="[]">
          <sui-dropdown-menu>
            <sui-button fluid @click.native="toggle(project._id)" icon="trash">
              Delete
            </sui-button>
          </sui-dropdown-menu>
        </sui-dropdown>
      </sui-card-header>
      <sui-card-meta>{{project.pay}}</sui-card-meta>
      <sui-card-meta>{{project.budget}}</sui-card-meta>
      <sui-card-description>{{project.description}}</sui-card-description>
    </sui-card-content>
  </sui-card>
  <sui-modal v-model="open" size="tiny" closable>
    <sui-modal-header>Are you sure?
      <sui-button floated="right" @click.native="toggle('')" icon="remove" />
    </sui-modal-header>
    <sui-modal-content >
      <sui-modal-description>
        <p>The deletion can't be undone. Continue?</p>
      </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button floated="right" @click.native="deleteProject(id)">
        Delete
      </sui-button>
    </sui-modal-actions>
  </sui-modal>
</sui-card-group>
</template>

<script>
export default {
  name: 'projectsCreated',
  data() {
    return {
      open: false,
      id: '',
    };
  },
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toggle(id) {
      this.open = !this.open;
      this.id = id;
    },
    deleteProject(id) {
      this.axios.post('/api/projects/delete', { id })
        .then(() => this.$emit('projectDeleted'))
        .then(() => this.toggle(''));
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
