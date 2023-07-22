<template>
  <div class="animation-wrapper">
    <lottie-animation
      v-for="(item, key) of animationSettings"
      class="animation-wrapper__item"
      :key="key"
      v-bind="item"
      v-on:on-complete="onCompleteAnimation(key)"
    />
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

import WinAnimationData from '@/assets/animations/win.json'
import WinMaxAnimationData from '@/assets/animations/win-max.json'
import FailAnimationData from '@/assets/animations/fail.json'

export default {
  data() {
    return {
      isReversed: false
    }
  },
  computed: {
    ...mapGetters(['status', 'level', 'maxLevel']),
  },
  watch: {
    status(value) {
      const animationName = (
        value === 'win' &&
        this.level === this.maxLevel
      ) ? 'win-max' : value
      this.delay(300).then(this.playAnimation.bind(this, animationName))
    }
  },
  created() {
    this.setNonReactiveData()
  },
  mounted() {
    this.setReferences()
  },
  methods: {
    setNonReactiveData() {
      this.animationSettings = {
        win: {
          ref: 'winAnimation',
          animationData: WinAnimationData
        },
        'win-max': {
          ref: 'winMaxAnimation',
          animationData: WinMaxAnimationData
        },
        fail: {
          ref: 'failAnimation',
          animationData: FailAnimationData
        }
      }

      _.each(this.animationSettings, (item, key) => {
        this.animationSettings[key] = {
          ...item,
          autoPlay: false,
          loop: false,
          direction: 'forward',
          speed: 1.2,
          width: 200,
          height: 200
        }
      })
    },
    setReferences() {
      _.each(this.animationSettings, (item, key) => {
        const reference = this.$refs[item.ref]
        this.animationSettings[key].ref = reference
      })
    },
    playAnimation(name) {
      const AVAILABLE_ANIMATIONS = ['win', 'win-max', 'fail']

      if (!AVAILABLE_ANIMATIONS.includes(name)) return

      const currentAnimation = this.animationSettings[name]
      currentAnimation.ref.play()
    },
    onCompleteAnimation(name) {
      const currentAnimation = this.animationSettings[name]

      this.isReversed = !this.isReversed

      if (this.isReversed) {
        currentAnimation.ref.setDirection('reverse')
        currentAnimation.ref.play()
        return
      }

      currentAnimation.ref.setDirection('forward')
    },
    delay(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.animation-wrapper {
  position: relative;
  pointer-events: none;
  user-select: none;

  &__item {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
