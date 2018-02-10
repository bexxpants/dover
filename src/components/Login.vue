<template>
  <div class="ui center aligned grid">
    <div class="column">
      <div class="ui header">Login to your account</div>
      <div class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="passwork" name="password" placeholder="Password">
            </div>
          </div>
        </div>
      </div>
      <div class="ui message">
        New user?
        <router-link to="/" tag="button" class="ui button primary">Sign up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>
