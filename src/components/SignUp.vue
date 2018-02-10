<template>
  <div class="ui center aligned grid">
    <div class="eight wide column">
      <div class="ui header">Sign up</div>
      <div class="ui large form">
        <div class="ui raised segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address" >
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password">
            </div>
          </div>
          <div class="field">
            <button class="ui button">Sign Up</button>
          </div>
        </div>
        <div class="ui header">Or sign up with:</div>
        <div class="ui raised segment">
          <div class="field">
            <a class="ui github button">
              <i class="github icon"></i>
              GitHub
            </a>
            <a class="ui google plus button">
              <i class="google plus icon"></i>
              Google
            </a>
            <a class="ui facebook button">
              <i class="facebook icon"></i>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
};
</script>

<style>
.ui.center.aligned.grid {
  margin-top: 5em;
  margin-bottom: 5em;
}
</style>
