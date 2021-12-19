<template>
  <div class="container">

    <div class="header">
      <h1 class="header__title">Remember me</h1>
      <p class="header__sub-title">Запомни и открой все зеленые клетки</p>
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

<style scoped>
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
  font-size: 24px;
  font-weight: bold;
}

.header__sub-title {
  font-size: 14px;
  color: #44c07c;
}

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
