<template>
  <div class="controls">
    <div class="controls__msg" :class="msgClassNames" ref="msg">{{ msgTextContent }}</div>
    <button class="controls__start" v-on:click="start" :disabled="startIsDisabled">Старт</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      msgTextContent: '',
      msgClassNames: []
    }
  },
  computed: {
    ...mapGetters(['status']),
    startIsDisabled() {
      return (this.status !== 'init')
    },
    statusIsWin() {
      return (this.status === 'win')
    },
    statusIsFail() {
      return (this.status === 'fail')
    }
  },
  watch: {
    statusIsWin(isWin) {
      if (isWin) {
        this.msgTextContent = 'Отлично! Так держать!'
        this.msgClassNames = ['controls__msg_visible', 'controls__msg_win']
        return
      }

      this.msgClassNames = ['controls__msg_win']
    },
    statusIsFail(isFail) {
      if (isFail) {
        this.msgTextContent = 'Не отчаивайтесь, у Вас всё получится!'
        this.msgClassNames = ['controls__msg_visible', 'controls__msg_fail']
        return
      }

      this.msgClassNames = ['controls__msg_fail']
    }
  },
  methods: {
    ...mapActions(['start'])
  }
}
</script>

<style scoped>
.controls {
  width: 100%;
  max-width: 280px;
  padding-bottom: 35px;
  font-size: 14px;
}

.controls__msg {
  height: 28px;
  text-align: center;
  opacity: 0;
  transition: opacity .15s ease;
}

.controls__msg_visible {
  opacity: 1;
}

.controls__msg_win {
  color: #44c07c;
}

.controls__msg_fail {
  color: #ee2525;
}

.controls__start {
  display: block;
  width: 120px;
  margin: 0 auto;
  padding: 6px 8px;
  color: #fff;
  background-color: #49cc84;
  border: none;
  border-radius: 3px; 
  transition: background-color .15s ease;
}

.controls__start:hover {
  background-color: #35be73;
}

.controls__start:disabled {
  background-color: #cecece;
}
</style>
