<template>
  <div class="board-item"
    v-bind:class="classNames"
    v-on:click="onClick"
  ></div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['options'],
  emits: ['tap'],
  computed: {
    ...mapGetters(['status']),
    isSuccess() {
      if (this.status === 'wait') return false

      const isTempVisible = this.status === 'show' && this.options.value === 1
      const isSelected = this.options.isSelected && this.options.value === 1

      return isTempVisible || isSelected
    },
    isFail() {
      return this.options.value === 0 && this.options.isSelected
    },
    classNames() {
      return {
        'board-item_active': this.isSuccess,
        'board-item_error': this.isFail
      }
    }
  },
  methods: {
    ...mapActions(['checkField']),
    onClick() {
      if (this.status !== 'process') return

      this.checkField(this.options.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.board-item {
  width: 50px;
  height: 50px;
  background-color: $colorGray;
  border-radius: 3px;
  transform-style: preserve-3d;
  transition: all 400ms ease;
}

.board-item_active {
  background-color: $colorGreen;
  transform: rotateX(180deg);
}

.board-item_error {
  background-color: $colorRed;
  transform: rotateX(180deg);
}

</style>
