<template>
  <sui-grid class="center aligned">
    <sui-grid-column :width=12>
      <sui-form>
        <sui-form-field>
          <label>Choose a name for your project</label>
          <input type="text" v-model="name" placeholder="E.g. Build me a logo"/>
          <span class="errorMessage" v-if="errors && !$v.name.required">
            Project's name is required
          </span>
        </sui-form-field>
        <sui-form-field>
          <label>Tell us more about your project</label>
          <textarea
            type="text"
            rows="6"
            v-model="description"
            placeholder="Describe your project here" />
          <span class="errorMessage" v-if="errors && !$v.description.required">
            Project's description is required
          </span>
        </sui-form-field>
        <sui-form-field>
          <label>Select some skills needed</label>
          <sui-dropdown
            fluid
            multiple
            :options="skills"
            placeholder="Skills"
            selection
            search
            v-model="skillsSelected"
          />
          <span class="errorMessage" v-if="errors && !$v.skillsSelected.required">
            Add one skill at least
          </span>
        </sui-form-field>
        <sui-form-field class="inline">
          <label>Estimated budget</label>
          <select v-model="budget" class="ui fluid dropdown">
            <option value="Less than USD 50">Less than USD 50</option>
            <option value="USD 100 - 250">USD 100 - 250</option>
            <option value="USD 250 - 500">USD 250 - 500</option>
            <option value="USD 500 - 1000">USD 500 - 1000</option>
            <option value="USD 1000 - 3000">USD 1000 - 3000</option>
            <option value="More than USD 3000">More than USD 3000</option>
          </select>
          <label id="marginLeft">Way to pay?</label>
          <select v-model="pay" class="ui fluid dropdown">
            <option value="Fixed price project">Fixed price project</option>
            <option value="Hourly project">Hourly project</option>
          </select>
          <span class="errorMessage" v-if="errors && !$v.budget.required">
            Project's estimated budget is required
          </span>
          <span class="errorMessage last" v-if="errors && !$v.pay.required">
            Project's way of pay is required
          </span>
        </sui-form-field>
        <sui-button positive @click.native="submit">
          Done
        </sui-button>
      </sui-form>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import skillsList from '@/components/Dashboard/skills';

export default {
  name: 'newProjectForm',
  data() {
    return {
      name: '',
      description: '',
      budget: '',
      pay: '',
      skillsSelected: [],
      errors: false,
      skills: skillsList,
    };
  },
  updated() {
    if (
      this.$store.state.projectToEdit.name &&
      this.$store.state.editingProject
    ) {
      this.name = this.$store.state.projectToEdit.name;
      this.description = this.$store.state.projectToEdit.description;
      this.budget = this.$store.state.projectToEdit.budget;
      this.pay = this.$store.state.projectToEdit.pay;
      this.skillsSelected = this.$store.state.projectToEdit.skills;
      this.$store.dispatch('projectEdited');
    }
  },
  computed: {
    project() {
      return {
        name: this.name,
        description: this.description,
        budget: this.budget,
        pay: this.pay,
        skills: this.skillsSelected,
      };
    },
    isValid() {
      return (
        !this.$v.name.$invalid &&
        !this.$v.description.$invalid &&
        !this.$v.budget.$invalid &&
        !this.$v.pay.$invalid &&
        !this.$v.skillsSelected.$invalid
      );
    },
  },
  validations: {
    name: {
      required,
    },
    description: {
      required,
    },
    budget: {
      required,
    },
    pay: {
      required,
    },
    skillsSelected: {
      required,
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        this.$emit('submiting', this.project);
        this.name = '';
        this.description = '';
        this.budget = '';
        this.pay = '';
        this.skillsSelected = [];
        this.errors = false;
      } else {
        this.errors = true;
      }
    },
  },
};
</script>

<style scoped>
#marginLeft {
  margin-left: 2em;
}
.errorMessage {
  color: red;
  display: inline-block;
}
.last {
  margin-left: 4em;
}
</style>
