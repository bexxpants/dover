<template lang="html">
  <sui-container>
    <sui-grid>
      <sui-grid-column :width="3">
          <sui-image
         v-bind:src="userinfo[0].imgSrc"
         shape="circular"
         size="small" /><br />
         <sui-button @click.native="toggle" size="tiny" color="teal">Edit Info</sui-button>
         <sui-button size="tiny" color="orange">Public Page</sui-button>
         <sui-modal v-model="open">
           <sui-modal-header>
             Edit Your Information
               <sui-button floated="right" @click.native="toggle" icon="remove"/>
           </sui-modal-header>
           <sui-modal-content>
             <editBio v-on:submiting="submit"></editBio>
           </sui-modal-content>
          </sui-modal>
        </sui-grid-column>
        <sui-grid-column :width="9">
          <sui-segment>
          <sui-header size="medium">
            {{ [0].firstName }} {{ userinfo[0].lastName}}
          </sui-header>
          <sui-header size="small">
            {{ userinfo[0].companyName }}
          </sui-header>
          <p>
            {{ userinfo[0].about }}
          </p>
          </sui-segment>
          <sui-header size="small">
            More Info
          </sui-header>
          <sui-segment raised>
            <sui-header size="tiny">
              Portfolio:
            </sui-header>
            <a v-bind:href="userinfo[0].portfolioLink"> {{ userinfo[0].portfolioLink }}</a><br>
            <sui-icon name="mail"></sui-icon>
            <a v-bind:href="'mailto:' + userinfo.email" target="_blank">
              {{ userinfo[0].email }}
            </a><br>
            <sui-icon name="github"></sui-icon>
            <a v-bind:href="'http://www.github.com/' + userinfo.githubUsername" target="_blank">
              {{ userinfo[0].githubUsername }}
            </a><br>
            <sui-icon name="twitter" target="_blank"></sui-icon>
            <a v-bind:href="'http://www.twitter.com/' + userinfo[0].twitterUsername" target="_blank">
              {{ userinfo[0].twitterUsername }}
            </a>
          </sui-segment>
        </sui-grid-column>
      <sui-grid-column :width="3">
          {{ userinfo[0].numberOfProjects }}
          projects completed
        </sui-grid-column>
      </sui-grid>

    </sui-container>

</template>

<script>
import editBio from '@/components/Dashboard/editBio';

export default {
  name: 'bio',
  data() {
    return {
      open: false,
      userinfo: [],
    };
  },
  created() {
    this.fetch();
  },
  components: {
    editBio,
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    fetch() {
      this.axios.get('bio')
        .then((res) => {
          this.userinfo = res.data.userinfo;
          window.console.log(this.userinfo);
        });
    },
    submit(data) {
      this.axios.post('bio', {
        userinfo: data,
      }).then(() => this.toggle()).then(() => this.fetch());
    },
  },
};
</script>

<style lang="css">
.name{
  line-height: 35%;
  font-weight: 400;
}
.company-name{
  line-height: 10%;
}


</style>
