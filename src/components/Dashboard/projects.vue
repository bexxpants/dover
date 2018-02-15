<template>
  <div>
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
  </div>
</template>

<script>
import newProjectForm from '@/components/Dashboard/newProjectForm';

export default {
  name: 'projects',
  data() {
    return {
      open: false,
      project: {},
    };
  },
  components: {
    newProjectForm,
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    submit(data) {
      window.console.log(data);
    },
  },
};
</script>
