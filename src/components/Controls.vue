<template>
  <div class="controls">
    <button
      class="controls__start"
      :disabled="isStartDisabled"
      @click="start"
    >Start</button>
    <button
      class="controls__mode-switcher"
      :class="modeSwitcherClasses"
      :disabled="isStartDisabled"
      @click="toggleMode"
    >{{ modeSwitcherName }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['status', 'mode']),
    isStartDisabled() {
      return (this.status !== 'init')
    },
    modeSwitcherClasses() {
      return {
        'controls__mode-switcher_color_red': this.modeSwitcherName === 'hard'
      }
    },
    modeSwitcherName() {
      return {
        easy: 'hard',
        hard: 'easy'
      }[this.mode]
    }
  },
  methods: {
    ...mapActions(['start', 'toggleMode'])
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.controls {
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 280px;
  padding: 12px 0;
  position: relative;
}

.controls__start,
.controls__mode-switcher {
  display: block;
  padding: 8px 8px;

  font-family: 'Rubik', sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;

  border: none;
  border-radius: 6px; 
  transition: background-color .15s ease;
}

.controls__start {
  width: calc(65% - 12px);
  background-color: $colorGreen;
}

.controls__start:hover {
  background-color: darken($colorGreen, 7%);
}

.controls__start:disabled,
.controls__mode-switcher:disabled {
  background-color: $colorGray;
}

.controls__mode-switcher {
  width: 35%;
  background-color: $colorBlue;

  &:hover {
      background-color: darken($colorBlue, 7%);
    }

  &_color_red {
    background-color: $colorRed;

    &:hover {
      background-color: darken($colorRed, 7%);
    }
  }
}
</style>
