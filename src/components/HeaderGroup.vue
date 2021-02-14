<template>
  <div class="header-group">
    <h1 class="header-group__title">Current result: {{ counter }}</h1>
    <button v-on:click="add" v-bind:class="{ reset: isFinished }" class="header-group__button button button_type_simple">{{ buttonName }}</button>
  </div>
</template>

<script>
export default {
  name: 'header-group',
  data() {
    return {
      counter: 0,
      buttonName: 'increase',
      isFinished: false,
    }
  },
  methods: {
    add() {
      if (this.counter == 120) {
        this.counter = 0;
        this.buttonName = 'increase';
        this.isFinished = false;
        return;
      }

      this.counter += 10;

      if (this.counter == 120) {
        this.buttonName = 'reset';
        this.isFinished = true;
      }
    },
  }
}
</script>

<style scoped>
  .header-group {
    display: flex;
    flex-direction: column;
  }

  .header-group__title {
    margin: 15px 0;
    text-align: center;
    color: #00b871;
  }

  .reset {
    background-color: #d32222;
    box-shadow: 0 3px 5px #cc0000;
  }
</style>
