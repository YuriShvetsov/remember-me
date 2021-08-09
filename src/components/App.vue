<template>
  <div class="container">

    <div class="header">
      <h1 class="header__title">Remember me</h1>
      <p class="header__sub-title">Запомни и открой все зеленые клетки</p>
    </div>

    <div class="game">
      <board></board>
      <p class="level">Сложность: <strong>{{ diff }}</strong></p>
      <controls></controls>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Board from './Board.vue'
import Controls from './Controls.vue'

export default {
  components: {
    Board,
    Controls
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['diff'])
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

.level {
  margin: 10px 0;

  font-size: 14px;
  text-align: left;
}
</style>
