<template>
<div>
  <sui-message
    v-if="isEmpty"
    icon='inbox'
    header="You don't have proposals yet"
    content='Try updating your project data'
  />
  <sui-card-group :items-per-row='2' stackable>
    <sui-card v-for="proposal in proposals" :key="proposal._id" class='raised'>
      <sui-card-content>
        <sui-card-description>
          {{ proposal.details }}
        </sui-card-description>
        <sui-card-meta>Estimated</sui-card-meta>
        <sui-card-meta>
          - Budget: {{ proposal.budget }} USD
        </sui-card-meta>
        <sui-card-meta>
          - Time: {{ proposal.time }}
        </sui-card-meta>
      </sui-card-content>
    </sui-card>
  </sui-card-group>
</div>
</template>
<script>
export default {
  name: 'proposals',
  data() {
    return {
      proposals: [],
    };
  },
  computed: {
    isEmpty() {
      return !this.proposals.length;
    },
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.axios
        .get(`/api/proposals/${this.$store.state.projectId}`)
        .then((res) => {
          this.proposals = res.data.proposals;
        });
    },
  },
};
</script>
