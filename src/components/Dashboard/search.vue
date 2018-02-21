<template>
  <div>
    <sui-input placeholder="Search..." icon="search" v-model="searchTerm"/>
    <sui-card-group :items-per-row="3">
      <sui-card v-for="project in projectsFiltered" :key="project._id">
        <sui-card-content>
          <sui-card-header>
            {{project.name}}
          </sui-card-header>
          <sui-card-meta>{{project.pay}}</sui-card-meta>
          <sui-card-meta>{{project.budget}}</sui-card-meta>
          <sui-card-description>{{project.description}}</sui-card-description>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      projects: [],
      searchTerm: '',
    };
  },
  created() {
    this.fetch();
  },
  computed: {
    projectsFiltered() {
      return this.projects.filter(this.searchingFor(this.searchTerm));
    },
  },
  methods: {
    fetch() {
      this.axios.get('/api/projects/all')
        .then((res) => {
          this.projects = res.data.projects;
        });
    },
    searchingFor(term) {
      let termL = term.toLowerCase();
      return x =>
        x.name.toLowerCase().includes(termL) ||
        x.description.toLowerCase().includes(termL) || !term;
    },
  },
};
</script>
