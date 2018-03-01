<template>
  <sui-grid stackable>
    <sui-grid-column :width="4">
      <sui-input
        placeholder="Search..."
        icon="search"
        v-model="searchTerm"
        class="fluid searchItems"
      />
      <sui-dropdown
        fluid
        :floating="true"
        :options="skills"
        placeholder="Skills"
        selection
        multiple
        search
        v-model="skillsToFilter"
        class="searchItems"
      />
      <sui-dropdown
        fluid
        :floating="true"
        :options="payOptions"
        placeholder="Way to pay"
        selection
        v-model="payFilter"
        class="searchItems"
      />
      <sui-dropdown
        fluid
        :floating="true"
        :options="budgetOptions"
        placeholder="Estimated budget"
        selection
        v-model="budgetFilter"
        class="searchItems"
      />
    </sui-grid-column>
    <sui-grid-column :width="12">
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
    </sui-grid-column>
  </sui-grid>
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
      payFilter: '',
      budgetFilter: '',
      skills: skillsList,
      payOptions: [
        {
          key: 1,
          text: 'All',
          value: '',
        },
        {
          key: 2,
          text: 'Hourly project',
          value: 'Hourly project',
        },
        {
          key: 3,
          text: 'Fixed price project',
          value: 'Fixed price project',
        },
      ],
      budgetOptions: [
        { key: 1, text: 'All', value: '' },
        { key: 2, text: 'Less than USD 50', value: 'Less than USD 50' },
        { key: 3, text: 'USD 100 - 250', value: 'USD 100 - 250' },
        { key: 4, text: 'USD 250 - 500', value: 'USD 250 - 500' },
        { key: 5, text: 'USD 500 - 1000', value: 'USD 500 - 1000' },
        { key: 6, text: 'USD 1000 - 3000', value: 'USD 1000 - 3000' },
        { key: 7, text: 'More than USD 3000', value: 'More than USD 3000' },
      ],
    };
  },
  created() {
    this.fetch();
  },
  computed: {
    projectsFilteredByTerms() {
      return this.projects.filter(this.searchingFor(this.searchTerm));
    },
    projectsFilteredByPay() {
      return this.projectsFilteredByTerms.filter(
        this.searchingPay(this.payFilter),
      );
    },
    projectsFilteredByBudget() {
      return this.projectsFilteredByPay.filter(
        this.searchingBudget(this.budgetFilter),
      );
    },
    projectsFilteredBySkills() {
      return this.projectsFilteredByBudget.filter(
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
    searchingPay(pay) {
      // eslint-disable-next-line
      return (x) => x.pay.includes(pay);
    },
    searchingBudget(budget) {
      // eslint-disable-next-line
      return (x) => x.budget.includes(budget);
    },
  },
};
</script>

<style scoped>
.searchItems {
  margin-bottom: 2em;
}
</style>
