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
          <newProjectForm v-on:submiting="submit"/>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
      </sui-modal-actions>
    </sui-modal>

    <projectsCreated :projects=projects v-on:projectDeleted="fetch" id="projectList"/>
  </div>
</template>

<script>
import newProjectForm from '@/components/Dashboard/newProjectForm';
import projectsCreated from '@/components/Dashboard/projectsCreated';

export default {
  name: 'projects',
  data() {
    return {
      open: false,
      projects: [],
    };
  },
  components: {
    newProjectForm,
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
      this.axios.post('projects', {
        project: data,
      }).then(() => this.toggle()).then(() => this.fetch());
    },
    fetch() {
      this.axios.get('projects')
        .then((res) => {
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
