<template>
  <div class="controls">

    <div class="controls__msg-container">
      <p v-if="status === 'win'" class="controls__msg-item controls__msg-item_next">Отлично! Так держать!</p>
      <p v-if="status === 'fail'" class="controls__msg-item controls__msg-item_error">Не отчаивайтесь, у Вас всё получится!</p>
    </div>

    <button class="controls__start" v-on:click="start" :disabled="startIsDisabled">Старт</button>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['status']),
    startIsDisabled() {
      return this.status !== 'init'
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
  margin: 0px 0;
  font-size: 14px;
}

.controls__level {
  text-align: center;
}

.controls__msg-container {
  width: 100%;
  height: 28px;
  margin: 0px 0;
  text-align: center;
  position: relative;
}

.controls__msg-item {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.controls__msg-item_next {
  color: #44c07c;
}

.controls__msg-item_error {
  color: #ee2525;
}

.controls__start {
  display: block;
  width: 120px;
  margin: 0px auto 0;
  padding: 6px 8px;
  color: #fff;
  background-color: #49cc84;
  border: none;
  border-radius: 3px; 
}

.controls__start:hover {
  background-color: #35be73;
}

.controls__start:disabled {
  background-color: #cecece;
}
</style>
