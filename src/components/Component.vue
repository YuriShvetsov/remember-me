<template>
  <div class="component">
    
    <h2 class="app__title app__title_size_md app__title_color_green">Component</h2>
    <span class="app__title app__title_size_lg app__title_style_cursive">{{ title }}</span>
    <button v-on:click="toggleState" class="button component__button">Click me</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      state: true,
    }
  },
  methods: {
    toggleState() {
      this.state = !this.state;
    }
  },
  computed: {
    title() {
      return this.state ? 'hi' : 'bye';
    },
  }
}
</script>

<style scoped>

.component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 220px;
  margin: 20px auto;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

.component__button {
  display: inline-block;
  font-family: 'Rubik', sans-serif;
}

</style>
