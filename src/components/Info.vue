<template>
  <div class="info">
    <div class="info__col">
      <div class="info__cur-strikes">Score: <div class="info__cur-strikes-value">{{ curStrikes }}</div></div>
    </div>
    <div class="info__col">
      <div class="info__max-strikes">Hi-Score: <div class="info__max-strikes-value">{{ maxStrikes }}</div></div>
    </div>
    <div class="info__col">
      <div
        class="info__level"
        :class="levelClasses"
        ref="level"
      > 
      Level: <div class="info__level-value">{{ level }}</div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isMounted: false
    }
  },
  computed: {
    ...mapGetters(['level', 'curStrikes', 'maxStrikes', 'maxLevel']),
    levelClasses() {
      return {
        'info__level_highlighted': this.level === this.maxLevel
      }
    }
  },
  watch: {
    level(newValue, prevValue) {
      if (newValue < prevValue) return

      this.$nextTick(() => {
        this.bounceLevel()
      })
    }
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    bounceLevel() {
      const { level: levelElement } = this.$refs

      levelElement.classList.add('info__level_bounced')
      levelElement.addEventListener('animationend', () => {
        levelElement.classList.remove('info__level_bounced')
        this.isLevelBounced = false
      }, { once: true })
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 280px;
  padding: 10px 0;

  font-size: 14px;
  color: #303030;
}

.info__cur-strikes,
.info__max-strikes {
  display: inline-block;
}

.info__cur-strikes-value,
.info__max-strikes-value {
  display: inline-block;
  width: 32px;
  padding-left: 4px;
  text-align: left;
}

.info__level {
  display: inline-block;

  &_highlighted {
    color: #d42626;
  }

  &_bounced {
    animation: bounce-in 1s ease;
    animation-fill-mode: both;
  }
}

.info__level-value {
  display: inline-block;
  width: 16px;
  padding-left: 4px;
}

@keyframes bounce-in {
  0% {
    transform: scale3d(1, 1, 1);
  }
  5% {
    transform: scale3d(.3, .3, .3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(.9, .9, .9);
  }
  60% {
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(.97, .97, .97);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>
