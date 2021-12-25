<template>
  <div class="container">
    <div class="msg" :class="msgClassNames" ref="msg">{{ msgTextContent }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      msgTextContent: '',
      msgClassNames: []
    }
  },
  computed: {
    ...mapGetters(['status']),
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
        this.msgClassNames = ['msg_visible', 'msg_win']
        return
      }

      this.msgClassNames = ['msg_win']
    },
    statusIsFail(isFail) {
      if (isFail) {
        this.msgTextContent = 'Не отчаивайтесь, у Вас всё получится!'
        this.msgClassNames = ['msg_visible', 'msg_fail']
        return
      }

      this.msgClassNames = ['msg_fail']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.container {
  pointer-events: none;
  user-select: none;
}

.msg {
  padding: 6px 8px;
  transform: scale(.9);

  font-family: 'Rubik', sans-serif;
  font-size: 1.4rem;
  text-align: center;
  white-space: nowrap;

  background-color: #fff;
  border: 1px solid #f4f4f4;
  border-radius: 3px;

  opacity: 0;
  transition: opacity .15s ease, transform .15s ease;
}

.msg_visible {
  opacity: 1;
  transform: scale(1);
  transition-delay: .3s;
}

.msg_win {
  color: #fff;
  background-color: darken($colorGreen, 8%);
  border: 1px solid darken($colorGreen, 16%);
}

.msg_fail {
  color: #fff;
  background-color: darken($colorRed, 8%);
  border: 1px solid darken($colorRed, 16%);
}
</style>
