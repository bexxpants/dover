<template>
  <sui-grid class="center aligned">
    <sui-grid-column :width=8>
      <div class="ui header">Login to your account</div>
      <sui-form>
        <sui-segment raised>
          <sui-form-field>
            <sui-input
              v-model="email"
              placeholder="E-mail address"
              icon="user"
              iconPosition="left">
            </sui-input>
          </sui-form-field>
          <sui-form-field>
            <sui-input
              v-model="password"
              type="password"
              placeholder="Password"
              icon="lock"
              iconPosition="left">
            </sui-input>
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
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      this.axios.post('http://localhost:8081/api/auth', {
        credentials: {
          email: this.email,
          password: this.password,
        },
      }).then(res =>
        this.$store.dispatch('login', res.data.user));

      this.$router.push('/dashboard');
    },
  },
};
</script>

<style scoped>
.ui.center.aligned.grid {
  margin-top: 5em;
  margin-bottom: 5em;
}
</style>
