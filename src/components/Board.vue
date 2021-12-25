<template>
  <div class="board"
    v-bind:class="classNames"
  >
    <message class="board__message"></message>
    <board-item v-for="field in fields" v-bind:options="field" v-bind:key="field.id"></board-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoardItem from './BoardItem.vue'
import Message from './Message.vue'

export default {
  components: {
    BoardItem,
    Message
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['fields', 'status']),
    isProcess() {
      return (this.status === 'process')
    },
    classNames() {
      return {
        'board_active': this.isProcess
      }
    }
  }
}
</script>

<style scoped>
.board {
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-columns: repeat(5, auto);
  justify-content: center;
  grid-gap: 8px;

  padding: 0 10px;

  position: relative;
}

.board_active {
  cursor: pointer;
}

.board__message {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
}
</style>
