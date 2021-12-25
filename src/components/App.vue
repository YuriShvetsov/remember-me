<template>
  <div class="container">

    <div class="header">
      <h1 class="header__title">Remember me</h1>
      <p class="header__sub-title">Запомни и открой все <span class="green-text">зеленые клетки</span> </p>
    </div>

    <div class="game">
      <board></board>
      <info></info>
      <controls></controls>
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
  data() {
    return {

    }
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
}

.header {
  padding: 35px 0 35px;
  text-align: center;
}

.header__title {
  margin: 5px;
  font-size: 2.6rem;
  font-weight: bold;
}

.header__sub-title {
  font-size: 1.4rem;
}

.green-text {
  font-weight: bold;
  color: darken($colorGreen, 12%);
}

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
