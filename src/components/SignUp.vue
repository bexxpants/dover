<template>
  <sui-grid class="center aligned">
    <sui-grid-column :width=8>
      <div class="ui header">Sign up</div>
      <sui-form >
        <sui-segment raised>
          <sui-form-field>
            <sui-input
              v-model="email"
              type="email"
              name="email"
              vee-validate="'required|email'"
              placeholder="E-mail address"
              icon="user"
              iconPosition="left">
            </sui-input>
            <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
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
          </sui-form-field>
          <sui-form-field>
            <button
              type="submit"
              @click="addUser"
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
import Api from '@/services/Api';

export default {
  name: 'SignUp',
  data() {
    return {
      password: '',
      email: '',
    };
  },
  methods: {
    addUser() {
      const self = this;
      Api().post('/users', {
        user: {
          email: self.email,
          password: self.password,
        },
      });
    },
  },
};
</script>

<style>
.ui.center.aligned.grid {
  margin-top: 5em;
  margin-bottom: 5em;
}
</style>
