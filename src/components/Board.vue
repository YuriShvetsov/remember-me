<template>
  <div class="board"
    v-bind:class="classNames"
  >
    <animation-wrapper class="board__animation-wrapper" />
    <div class="board__wrapper">
      <div
        class="board__row"
        v-for="(row, index) of rows"
        :key="index"
      >
        <board-item
          v-for="field of row"
          :key="field.id"
          :options="field"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoardItem from './BoardItem.vue'
import AnimationWrapper from './AnimationWrapper.vue'

export default {
  components: {
    BoardItem,
    AnimationWrapper
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['fields', 'status', 'gameSize']),
    rows() {
      const result = []

      for (let i = 0; i < this.fields.length; i++) {
        const currentRow = result[result.length - 1]
        const field = this.fields[i]

        if (i % this.gameSize === 0) result.push([field])
        else currentRow.push(field)
      }

      return result
    },
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

<style lang="scss" scoped>
.board {
  padding: 0 10px;
  position: relative;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__row {
    display: flex;
    gap: 8px;
  }
}

.board_active {
  cursor: pointer;
}

.board__animation-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
}
</style>
