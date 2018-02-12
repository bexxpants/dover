<template>
  <div class="ui vertical masthead center aligned segment">
    <div class="ui text container">
      <h1 class="ui header">Logo</h1>
      <h2>Some type of slogan going here</h2>
      <button class="ui huge primary button">Create a project</button>
      <button class="ui huge secondary button">Work as a freelancer</button>
    </div>

    <section class="ui text container">
      <h1>How it Works</h1>
      <div class="ui grid">
        <div class="four wide column">
          <div class="ui center segment">
            <h3>Post a Job</h3>
            <p>Sign-Up and Post a Job via and easy to use interface</p>
          </div>
        </div>
        <div class="four wide column">
          <div class="ui center segment">
            <h3>Your job post will be sent to qualified freelancers</h3>
            <p>Qualified freelancers will asses the job and submit a proposal</p>
          </div>
        </div>
        <div class="four wide column">
          <div class="ui center segment">
            <h3>Review Proposals</h3>
            <p>Proposals will appear in your dashboard with all
               nessicary details.  Choose the freelancer thats right for you.</p>
          </div>
        </div>
        <div class="four wide column">
          <div class="ui center segment">
            <h3>See real-time progress</h3>
            <p>Real-time progress will be
               availble to you so you can rest assured things
               are going smoothly or contact the freelancer if not</p>
          </div>
        </div>
      </div>
  </section>

  <section class="ui text container">
    <h1>Large Projects? No Problem</h1>
    <h3>hire multiple freelancers from differnt
      backgrounds for one large project</h3>
  </section>
  <section class="ui text container">
    <div class="ui grid">
      <div class="three wide column">
        <div class="ui center segment">
          <h4>Developers</h4>
          <i class="code icon"></i>
        </div>
      </div>
      <div class="three wide column">
        <div class="ui center segment">
          <h4>Designers</h4>
          <i class="paint brush icon"></i>
        </div>
      </div>
      <div class="three wide column">
        <div class="ui center segment">
          <h4>Data Engineers</h4>
          <i class="server icon"></i>
        </div>
      </div>
      <div class="three wide column">
        <div class="ui center segment">
          <h4>Audio Engineers</h4>
          <i class="music icon"></i>
        </div>
      </div>
      <div class="three wide column">
        <div class="ui center segment">
          <h4>Writers</h4>
          <i class="write icon"></i>
        </div>
      </div>
    </div>
  </section>
</div>

</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
  .ui.header {
    margin-top: 5em;
  }

  .ui.text.container {
    margin-bottom: 8em;
  }
  i.icon{
    font-size: 5em;
  }
</style>
