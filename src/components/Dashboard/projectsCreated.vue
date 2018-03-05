<template>
<sui-card-group :items-per-row="2" stackable>
  <sui-card v-for="project in projects" :key="project._id" class="raised">
    <sui-card-content>
      <sui-card-header>
        {{project.name}}
        <sui-dropdown icon="options" id="optionsButton" :options="[]">
          <sui-dropdown-menu>
            <sui-button fluid @click.native="toggleEdit(project, project._id)" icon="edit">
              Edit
            </sui-button>
            <sui-button fluid @click.native="toggleDelete(project._id)" icon="trash">
              Delete
            </sui-button>
          </sui-dropdown-menu>
        </sui-dropdown>
      </sui-card-header>
      <sui-card-meta>{{project.pay}}</sui-card-meta>
      <sui-card-meta>{{project.budget}}</sui-card-meta>
      <sui-card-description>{{project.description}}</sui-card-description>
    </sui-card-content>
    <sui-card-content extra>
      <sui-label v-for="skill in project.skills" :key="skill">
        {{ skill }}
      </sui-label>
      <sui-button @click.native="toggleProposals(project._id)" icon="briefcase" floated="right">
        Proposals
      </sui-button>
    </sui-card-content>
  </sui-card>

  <sui-modal v-model="openDelete" size="tiny" closable>
    <sui-modal-header>Are you sure?
      <sui-button floated="right" @click.native="toggleDelete('')" icon="remove" />
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

  <sui-modal v-model="openEdit" size="large" closable>
    <sui-modal-header>Edit project
      <sui-button floated="right" @click.native="closeEdit" icon="remove" />
    </sui-modal-header>
    <sui-modal-content >
      <ProjectForm v-on:submiting="submit"/>
    </sui-modal-content>
  </sui-modal>

   <sui-modal v-model="openProposals" size="large" closable>
    <sui-modal-header>Proposals
      <sui-button floated="right" @click.native="closeProposals" icon="remove" />
    </sui-modal-header>
    <sui-modal-content >
      <sui-modal-description>
        <router-view :projectId="this.id"></router-view>
      </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
    </sui-modal-actions>
  </sui-modal>
</sui-card-group>
</template>

<script>
import ProjectForm from './ProjectForm';

export default {
  name: 'projectsCreated',
  data() {
    return {
      openDelete: false,
      openEdit: false,
      openProposals: false,
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
    toggleDelete(id) {
      this.openDelete = !this.openDelete;
      this.id = id;
    },
    toggleEdit(project, id) {
      this.openEdit = !this.openEdit;
      this.id = id;
      this.$store.dispatch('editProject', project);
    },
    toggleProposals(id) {
      this.openProposals = !this.openProposals;
      this.id = id;
      this.$router.push('/dashboard/projects/proposals');
    },
    closeProposals() {
      this.openProposals = !this.openProposals;
      this.$router.push('/dashboard/projects');
    },
    closeEdit() {
      this.openEdit = !this.openEdit;
      this.$store.dispatch('projectEdited');
    },
    deleteProject(id) {
      this.axios
        .post('/api/projects/delete', { id })
        .then(() => this.$emit('projectChange'))
        .then(() => this.toggleDelete(''));
    },
    submit(project) {
      this.axios
        .put('/api/projects/update', {
          projectId: this.id,
          projectToUpdate: project,
        })
        .then(() => this.$emit('projectChange'))
        .then(() => {
          this.openEdit = !this.openEdit;
        });
    },
  },
  components: {
    ProjectForm,
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
