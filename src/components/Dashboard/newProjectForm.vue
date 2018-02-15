<template>
  <sui-grid class="center aligned">
    <sui-grid-column :width=12>
      <sui-form>
        <sui-form-field>
          <label>Choose a name for your project</label>
          <input type="text" v-model="name" placeholder="E.g. Build me a logo"/>
        </sui-form-field>
        <sui-form-field>
          <label>Tell us more about your project</label>
          <textarea
            type="text"
            rows="6"
            v-model="description"
            placeholder="Describe your project here" />
        </sui-form-field>
        <sui-form-field class="inline">
          <label>Estimated budget</label>
          <select v-model="budget" class="ui fluid dropdown">
            <option value="Less than USD 50">Less than USD 50</option>
            <option value="USD 100 - 250">USD 100 - 250</option>
            <option value="USD 250 - 500">USD 250 - 500</option>
            <option value="USD 500 - 100">USD 500 - 1000</option>
            <option value="USD 1000 - 3000">USD 1000 - 3000</option>
            <option value="More than USD 3000">More than USD 3000</option>
          </select>
          <label id="marginLeft">Way to pay?</label>
          <select v-model="pay" class="ui fluid dropdown">
            <option value="Fixed price project">Fixed price project</option>
            <option value="Hourly project">Hourly project</option>
          </select>
        </sui-form-field>
        <sui-button positive @click.native="submit">
          Publish project
        </sui-button>
      </sui-form>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
export default {
  name: 'newProjectForm',
  data() {
    return {
      name: '',
      description: '',
      budget: '',
      pay: '',
    };
  },
  computed: {
    project() {
      return {
        name: this.name,
        description: this.description,
        budget: this.budget,
        pay: this.pay,
      };
    },
  },
  methods: {
    submit() {
      this.$emit('submiting', this.project);
    },
  },
};
</script>

<style scoped>
#marginLeft {
  margin-left: 2em;
}
</style>
