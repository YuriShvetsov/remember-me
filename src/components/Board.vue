<template>

  <div class="board">

    <board-item v-for="field in fields" v-bind:options="field" v-bind:key="field.id"></board-item>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoardItem from './BoardItem.vue'

export default {
  components: {
    BoardItem
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['fields']),
  }
}
</script>

<style scoped>
.board {
  padding: 0 10px;

  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-columns: repeat(5, auto);
  justify-content: center;
  grid-gap: 8px;
}
</style>
