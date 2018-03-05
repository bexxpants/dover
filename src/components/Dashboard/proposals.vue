<template>
  <h1>proposals page</h1>
</template>
<script>
export default {
  name: 'proposals',
  props: ['projectId'],
  updated() {
    window.console.log(this.props.projectId);
  },
};
</script>
