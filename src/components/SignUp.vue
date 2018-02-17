<template>
  <sui-grid class="center aligned">
    <sui-grid-column :width=12>
      <div class="ui header">Sign up</div>
      <sui-form >
        <sui-segment raised>
          <sui-message
            v-if="error"
            header="Error"
            :content=error.message
            icon="warning">
          </sui-message>
          <sui-form-field>
            <sui-input
              v-model="email"
              type="email"
              name="email"
              placeholder="E-mail address"
              icon="user"
              iconPosition="left">
            </sui-input>
            <span class="errorMessage" v-if="error && !$v.email.required">Email is required.</span>
            <span class="errorMessage" v-if="error && $v.email.$invalid">Insert a valid email</span>
          </sui-form-field>
          <sui-form-field>
            <sui-input
              v-model="password"
              type="password"
              name="password"
              placeholder="Password"
              icon="lock"
              iconPosition="left">
            </sui-input>
            <span class="errorMessage" v-if="error && !$v.password.required">
              Password is required.
            </span>
            <span class="errorMessage" v-if="error && !$v.password.minLength">
              Password must have at least {{ $v.password.$params.minLength.min }} letters.
            </span>
          </sui-form-field>
          <sui-form-field>
            <button
              type="submit"
              @click="submit"
              class="ui button"
            >Sign Up</button>
          </sui-form-field>
        </sui-segment>
        <div class="ui header">Or sign up with:</div>
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
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'SignUp',
  data() {
    return {
      password: '',
      email: '',
      error: null,
    };
  },
  validations: {
    email: {
      email,
      required,
    },
    password: {
      required,
      minLength: minLength(6),
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
        this.axios.post('users', {
          user: {
            email: this.email,
            password: this.password,
          },
        })
          .then(res => this.$store.dispatch('login', res.data.user))
          .then(() => this.$router.push('/dashboard'))
          .catch((err) => { this.error = err.response.data.errors; });
      } else {
        this.error = {};
        this.error.message = 'Please read the error messages';
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
