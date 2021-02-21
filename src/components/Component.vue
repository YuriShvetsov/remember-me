<template>
  <h1 v-if="state">{{ title.active }}</h1>
  <h1 v-else>{{ title.unActive }}</h1>
  <button v-on:click="toggleState">Toggle state</button>
</template>

<script>
export default {
  data() {
    return {
      state: false,
      title: {
        active: 'active title',
        unActive: 'unactive title'
      }
    }
  },
  methods: {
    toggleState() {
      this.state = !this.state;
    }
  }
}
</script>

<style scoped>

</style>
