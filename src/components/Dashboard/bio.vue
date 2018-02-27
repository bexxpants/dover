<template lang="html">
  <sui-container>
    <sui-grid>
      <sui-grid-column :width="3">
          <sui-image
         v-bind:src="imgSrc"
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
             <editBio :userdata="userinfo"
                      v-on:submiting="submit"></editBio>
           </sui-modal-content>
          </sui-modal>
        </sui-grid-column>
        <sui-grid-column :width="9">
          <sui-segment>
          <sui-header size="medium">
            {{ userinfo.firstName }} {{ userinfo.lastName}}
          </sui-header>
          <sui-header size="small">
            {{ userinfo.companyName }}
          </sui-header>
          <p>
            {{ userinfo.about }}
          </p>
          </sui-segment>
          <sui-header size="small">
            More Info
          </sui-header>
          <sui-segment raised>
            <sui-header size="tiny">
              Portfolio:
            </sui-header>
            <a v-bind:href="userinfo.portfolioLink"> {{ userinfo.portfolioLink }}</a><br>
            <sui-icon name="mail"></sui-icon>
            <a v-bind:href="'mailto:' + userinfo.email" target="_blank">
              {{ userinfo.email }}
            </a><br>
            <sui-icon name="github"></sui-icon>
            <a v-bind:href="'http://www.github.com/' + userinfo.githubUsername" target="_blank">
              {{ userinfo.githubUsername }}
            </a><br>
            <sui-icon name="twitter" target="_blank"></sui-icon>
            <a v-bind:href="'http://www.twitter.com/' + userinfo.twitterUsername" target="_blank">
              {{ userinfo.twitterUsername }}
            </a><br>
            <sui-icon name="linkedin" target="_blank"></sui-icon>
            <a v-bind:href="'http://www.twitter.com/' + userinfo.linkedinUsername" target="_blank">
              {{ userinfo.linkedinUsername }}
            </a>
          </sui-segment>
        </sui-grid-column>
      <sui-grid-column :width="3">
          {{ userinfo.numberOfProjects }}
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
      imgSrc: 'https://exelord.github.io/ember-initials/images/default-d5f51047d8bd6327ec4a74361a7aae7f.jpg',
      userinfo: {},

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
      this.axios.get('/api/bio')
        .then((res) => {
          this.userinfo = res.data.userinfo[0];
        });
    },
    submit(data) {
      this.axios.put('/api/bio/edit', {
        userinfo: data,
      }).then(this.toggle()).then(() => this.toggle());
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
