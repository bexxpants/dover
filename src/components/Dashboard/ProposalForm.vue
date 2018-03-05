<template>
  <sui-grid class="center aligned">
    <sui-grid-column :width="12">
      <sui-form>
        <sui-form-field>
          <label>Details</label>
          <textarea
            type="text"
            rows="10"
            v-model="details"
            placeholder="Details of the proposal" />
          <span class="errorMessage" v-if="errors && !$v.details.required">
            Proposal's details required
          </span>
        </sui-form-field>
        <sui-form-field class="inline">
          <label>Your budget</label>
          <input type="text" v-model="budget" placeholder="USD"/>
          <label id="marginLeft">Time to finish work?</label>
          <input type="text" v-model="time" placeholder="2 days or 3 hours" />
          <span class="errorMessage" v-if="errors && !$v.budget.required">
            Budget required
          </span>
          <span class="errorMessage last" v-if="errors && !$v.time.required">
            Time to finish work required
          </span>
        </sui-form-field>
        <sui-button @click.native="submit" positive>
          Send proposal
        </sui-button>
      </sui-form>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'ProposalForm',
  data() {
    return {
      details: '',
      budget: '',
      time: '',
      errors: false,
    };
  },
  validations: {
    details: {
      required,
    },
    budget: {
      required,
    },
    time: {
      required,
    },
  },
  computed: {
    proposal() {
      return {
        details: this.details,
        budget: this.budget,
        time: this.time,
      };
    },
    isValid() {
      return (
        !this.$v.details.$invalid &&
        !this.$v.budget.$invalid &&
        !this.$v.time.$invalid
      );
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        this.$emit('submitProposal', this.proposal);
        this.details = '';
        this.budget = '';
        this.time = '';
        this.errors = false;
      } else {
        this.errors = true;
      }
    },
  },
};
</script>
<style scoped>
.inline {
  display: inline-block;
}
#marginLeft {
  margin-left: 2em;
}
.errorMessage {
  color: red;
  display: inline-block;
}
.last {
  margin-left: 10em;
}
</style>
