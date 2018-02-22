<template>
  <sui-grid class="center aligned">
    <sui-grid-column :width=12>
      <div class="ui header">Login to your account</div>
      <sui-form>
        <sui-segment raised>
          <sui-message
            v-if="errors"
            header="Error"
            :content=errors.global
            icon="warning">
          </sui-message>
          <sui-form-field>
            <sui-input
              v-model="email"
              placeholder="E-mail address"
              icon="user"
              iconPosition="left">
            </sui-input>
            <span class="errorMessage" v-if="errors && !$v.email.required">
              Email is required.
            </span>
            <span class="errorMessage" v-if="errors && $v.email.$invalid">
              Insert a valid email
            </span>
          </sui-form-field>
          <sui-form-field>
            <sui-input
              v-model="password"
              type="password"
              placeholder="Password"
              icon="lock"
              iconPosition="left">
            </sui-input>
            <span class="errorMessage" v-if="errors && !$v.password.required">
              Password is required.
            </span>
          </sui-form-field>
          <sui-form-field>
            <button
              class="ui button"
              @click="submit">
              Login
            </button>
          </sui-form-field>
        </sui-segment>
        <div class="ui header">Or login with:</div>
        <sui-segment raised>
          <sui-form-field>
            <sui-button color="black" icon="github">
              GitHub
            </sui-button>
            <sui-button icon="google plus" class="google plus">
              Google
            </sui-button>
            <sui-button icon="facebook" class="facebook">
              Facebook
            </sui-button>
          </sui-form-field>
        </sui-segment>
      </sui-form>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errors: null,
    };
  },
  validations: {
    email: {
      email,
      required,
    },
    password: {
      required,
    },
  },
  computed: {
    isValid() {
      return !this.$v.email.$invalid && !this.$v.password.$invalid;
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        this.axios.post('/api/auth', {
          credentials: {
            email: this.email,
            password: this.password,
          },
        })
          .then((res) => {
            this.$store.dispatch('login', res.data.user);
          })
          .then(() =>
            this.$router.push('/dashboard/projects'))
          .catch((err) => {
            window.console.log(err);
            this.errors = err.response.data.errors;
          });
      } else {
        this.errors = {};
        this.errors.global = 'Read the error messages';
      }
    },
  },
};
</script>

<style scoped>
.ui.center.aligned.grid {
  margin-top: 5em;
  margin-bottom: 5em;
}
span.errorMessage {
  color: red;
  font-size: 0.8em;
}
</style>
