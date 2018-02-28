<template>
  <div is="sui-container">
    <sui-button @click.native="toggle">Create a project</sui-button>
    <sui-modal v-model="open">
      <sui-modal-header>Create a project
        <sui-button floated="right" @click.native="toggle" icon="remove">
        </sui-button>
      </sui-modal-header>
      <sui-modal-content>
        <sui-modal-description>
          <ProjectForm v-on:submiting="submit" />
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
      </sui-modal-actions>
    </sui-modal>

    <projectsCreated
      :projects=projects
      v-on:projectChange="fetch"
      id="projectList"
    />
  </div>
</template>

<script>
import ProjectForm from '@/components/Dashboard/ProjectForm';
import projectsCreated from '@/components/Dashboard/projectsCreated';

export default {
  name: 'projects',
  data() {
    return {
      open: false,
      projects: [],
      project: {},
    };
  },
  components: {
    ProjectForm,
    projectsCreated,
  },
  created() {
    this.fetch();
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    submit(data) {
      this.axios
        .post('/api/projects', {
          project: data,
        })
        .then(() => this.toggle())
        .then(() => this.fetch());
    },
    fetch() {
      this.axios.get('/api/projects').then((res) => {
        this.projects = res.data.projects;
      });
    },
  },
};
</script>

<style scoped>
#projectList {
  margin-top: 6em;
  margin-bottom: 6em;
}
</style>
