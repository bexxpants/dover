<template>
  <div class="ui grid">
    <div class="four wide column">
      <sui-input placeholder="Search..." icon="search" v-model="searchTerm" id="search-bar"/>
      <sui-dropdown
        fluid
        :floating="true"
        :options="skills"
        placeholder="Skills"
        selection
        multiple
        search
        v-model="skillsToFilter"
      />
    </div>
    <div class="twelve wide column">
      <sui-label v-for="skill in this.skillsToFilter" :key="skill" color="green">
        {{ skill }}
      </sui-label>
      <sui-card v-for="project in projectsFilteredBySkills" :key="project._id" class="fluid">
        <sui-card-content>
          <sui-card-header>
            {{project.name}}
          </sui-card-header>
          <sui-card-meta>{{project.pay}}</sui-card-meta>
          <sui-card-meta>{{project.budget}}</sui-card-meta>
          <sui-card-description>{{project.description}}</sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-label v-for="skill in project.skills" :key="skill">
            {{ skill }}
          </sui-label>
        </sui-card-content>
      </sui-card>
    </div>
  </div>
</template>

<script>
import skillsList from './skills';

export default {
  name: 'search',
  data() {
    return {
      projects: [],
      searchTerm: '',
      skillsToFilter: [],
      skills: skillsList,
    };
  },
  created() {
    this.fetch();
  },
  computed: {
    projectsFilteredByTerms() {
      return this.projects.filter(this.searchingFor(this.searchTerm));
    },
    projectsFilteredBySkills() {
      return this.projectsFilteredByTerms.filter(
        this.searchingSkills(this.skillsToFilter),
      );
    },
  },
  methods: {
    fetch() {
      this.axios.get('/api/projects/all').then((res) => {
        this.projects = res.data.projects;
      });
    },
    searchingFor(term) {
      const termL = term.toLowerCase();
      // eslint-disable-next-line
      return (x) =>
        x.name.toLowerCase().includes(termL) ||
        x.description.toLowerCase().includes(termL) ||
        !term;
    },
    searchingSkills(skills) {
      if (skills.length === 0) {
        // eslint-disable-next-line
        return (x) => x.skills;
      }
      // eslint-disable-next-line
      return (x) => x.skills.some((skill) => skills.includes(skill));
    },
  },
};
</script>

<style scoped>
#search-bar {
  margin-bottom: 5em;
}
</style>
