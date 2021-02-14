<template>
  <div>
    <h1 v-on:click="add" class="header-group-title">{{ title }} {{ counter }}</h1>
  </div>
</template>

<script>
export default {
  name: 'header-group',
  data() {
    return {
      title: 'Current result: ',
      counter: 0,
    }
  },
  methods: {
    add() {
      this.counter += 30;
    }
  }
}
</script>

<style scoped>
  .header-group-title {
    text-align: center;
    color: #00b871;
  }
</style>
