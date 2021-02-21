<template>
  <div class="app">
    
    <h1 class="app__title app__title_size_lg">{{ title }}</h1>

    <div class="app__icon-group icon-group">
      <div class="app__icon app__icon_webpack"></div>
      <div class="icon-group__plus">+</div>
      <div class="app__icon app__icon_vue"></div>
    </div>

    <simple-component></simple-component>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Webpack 4. Boilerplate. Vue 3',
    }
  },
  methods: {},
  computed: {},
}
</script>

<style>

.app {
  max-width: 980px;
  min-height: 50vh;
  margin: 20px auto;
  padding: 20px;
  font-family: 'Rubik', sans-serif;
  color: #222;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.app__title {
  font-weight: bold;
  text-align: center;
}

.app__title_size_lg {
  margin: 10px 0;
  font-size: 32px;
}

.app__title_size_md {
  margin: 8px 0;
  font-size: 24px;
}

.app__title_size_sm {
  margin: 5px 0;
  font-size: 18px;
}

.app__title_color_green {
  color: #00cc7e;
}

.app__title_color_blue {
  color: #1458d6;
}

.app__title_style_cursive {
  font-family: 'Akaya Televigala', sans-serif;
}

.app__icon-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.icon-group__plus {
  padding: 0 10px;
  font-size: 18px;
  font-weight: bold;
}

.app__icon {
  width: 50px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.app__icon_webpack {
  background-image: url(../assets/images/webpack-logo.svg);
}

.app__icon_vue {
  background-image: url(../assets/images/vue.png);
}

</style>
