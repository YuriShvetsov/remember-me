<template>
  <div class="container">

    <div class="header">
      <h1 class="header__title">Remember <span class="green-text">Me</span></h1>
    </div>

    <div class="game">
      <board />
      <info />
      <controls />
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Board from './Board.vue'
import Controls from './Controls.vue'
import Info from './Info.vue'

export default {
  components: {
    Board,
    Controls,
    Info
  },
  methods: {
    ...mapActions(['init'])
  },
  beforeMount() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.container {
  position: relative;
  font-family: 'Rubik', sans-serif;
  text-align: center;
}

.header {
  padding: 24px 0;
  text-align: center;
}

.header__title {
  margin: 5px;
  font-size: 2.6rem;
  font-weight: bold;
}

.green-text {
  font-weight: bold;
  color: darken($colorGreen, 12%);
}

.game {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
</style>
