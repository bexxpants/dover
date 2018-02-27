<template>
  <sui-grid class="center aligned">
    <sui-grid-column :width="12">
      <sui-form>
        <sui-grid class="center aligned">
          <sui-grid-row>
            <sui-grid-column :width="6">
              <sui-image :src="imgSrc" shape="rounded"
                          size="small"></sui-image>
              </sui-grid-column>
          </sui-grid-row>
          <sui-grid-row>
            <sui-grid-column :width="6">
              <input @change="uploadImage" type="file" name="photo" accept="image/*">
            </sui-grid-column>
          </sui-grid-row>

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
        <sui-grid-row :columns="2">
          <sui-grid-column>
          <sui-form-field>
            <label>Enter your portfolio address</label>
            <input type="text" v-model="portfolioLink" v-bind:placeholder="portfolioLink"/>
            <span class="errorMessage" v-if="errors && !$v.portfolioLink.required">
            A Portfolio link is Required
            </span>
          </sui-form-field>
          </sui-grid-column>
          <sui-grid-column>
          <sui-form-field>
            <label>Enter Your linkedin Username</label>
            <input type="text" v-model="linkedinUsername" v-bind:placeholder="linkedinUsername"/>
            <span class="errorMessage" v-if="errors && !$v.linkedinUsername.required">
              Username  is Required
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
          Complete SignUp
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
      portfolioLink: '',
      linkedinUsername: '',
      imgSrc: 'https://exelord.github.io/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg',
      userinfo: [],
      errors: false,
    };
  },
  computed: {
    userInfo() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        companyName: this.companyName,
        githubUsername: this.githubUsername,
        twitterUsername: this.twitterUsername,
        about: this.about,
        portfolioLink: this.portfolioLink,
        linkedinUsername: this.linkedinUsername,
      };
    },
    isValid() {
      return !this.$v.firstName.$invalid &&
             !this.$v.lastName.$invalid &&
             !this.$v.companyName.$invalid &&
             !this.$v.githubUsername.$invalid &&
             !this.$v.twitterUsername.$invalid &&
             !this.$v.portfolioLink.$invalid &&
             !this.$v.linkedinUsername.$invalid &&
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
    portfolioLink: {
      required,
    },
    linkedinUsername: {
      required,
    },
    about: {
      required,
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        this.axios.post('bio', { userinfo: this.userInfo })
          .then(() => this.$router.push('/dashboard/'))
          .catch((err) => {
            window.console.error(err);
            this.errors = true;
          });
      } else {
        this.errors = true;
      }
    },
    uploadImage(e) {
      const files = e.target.files;
      const data = new FormData();
      if (!files[0]) {
        return;
      }
      data.append('media', files[0]);
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imageSrc = event.target.result;
      };
      reader.readAsDataURL(files[0]);
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
