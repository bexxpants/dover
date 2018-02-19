<template>
  <sui-grid class="center aligned">
    <sui-grid-column :width="12">
      <sui-form>
        <sui-grid>
          <sui-grid-row :columns="2">
        <sui-grid-column>
        <sui-form-field>
          <label>Enter Your First Name</label>
          <input type="text" v-model="firstName" v-bind:placeholder="firstName"/>
          <span class="errorMessage" v-if="errors && !$v.firstName.required">
            First Name is Required
          </span>
        </sui-form-field>
        </sui-grid-column>
        <sui-grid-column>
          <sui-form-field>
          <label>Enter Your last Name</label>
          <input type="text" v-model="lastName" v-bind:placeholder="lastName"/>
          <span class="errorMessage" v-if="errors && !$v.lastName.required">
            Last Name is Required
          </span>
        </sui-form-field>
      </sui-grid-column>
      </sui-grid-row>
      <sui-grid-row :columns="3">
        <sui-grid-column>
        <sui-form-field>
          <label>Enter Your Company Name</label>
          <input type="text" v-model="companyName" v-bind:placeholder="companyName"/>
          <span class="errorMessage" v-if="errors && !$v.companyName.required">
            company Name is Required
          </span>
        </sui-form-field>
        </sui-grid-column>
        <sui-grid-column>
        <sui-form-field>
          <label>Enter Your Github Username</label>
          <input type="text" v-model="githubUsername" v-bind:placeholder="githubUsername"/>
          <span class="errorMessage" v-if="errors && !$v.githubUsername.required">
            Username Name is Required
          </span>
        </sui-form-field>
        </sui-grid-column>
        <sui-grid-column>
        <sui-form-field>
          <label>Enter Your twitter Username</label>
          <input type="text" v-model="twitterUsername" v-bind:placeholder="twitterUsername"/>
          <span class="errorMessage" v-if="errors && !$v.twitterUsername.required">
            Username Name is Required
          </span>
        </sui-form-field>
        </sui-grid-column>
        </sui-grid-row>
        </sui-grid>
        <sui-form-field>
          <label>Tell us about Yourself</label>
          <textarea
            type="text"
            rows="6"
            v-model="about"
            v-bind:placeholder="about" />
          <span class="errorMessage" v-if="errors && !$v.about.required">
            Bio is Required
          </span>
        </sui-form-field>
        <sui-button positive @click.native="submit">
          Update Bio
        </sui-button>
      </sui-form>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'editBio',
  data() {
    return {
      firstName: '',
      lastName: '',
      companyName: '',
      githubUsername: '',
      twitterUsername: '',
      about: '',
      errors: false,
    };
  },
  computed: {
    userinfo() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        companyName: this.companyName,
        githubUsername: this.githubUsername,
        twitterUsername: this.twitterUsername,
        about: this.about,
      };
    },
    isValid() {
      return !this.$v.firstName.$invalid &&
             !this.$v.lastName.$invalid &&
             !this.$v.companyName.$invalid &&
             !this.$v.githubUsername.$invalid &&
             !this.$v.twitterUsername.$invalid &&
             !this.$v.about.$invalid;
    },
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    companyName: {
      required,
    },
    githubUsername: {
      required,
    },
    twitterUsername: {
      required,
    },
    about: {
      required,
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        this.$emit('submiting', this.userinfo);
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
