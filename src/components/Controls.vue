<template>
  <div class="controls">
    <button class="controls__start" v-on:click="start" :disabled="startIsDisabled">Старт</button>
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
    ...mapGetters(['status']),
    startIsDisabled() {
      return (this.status !== 'init')
    }
  },
  methods: {
    ...mapActions(['start'])
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars.scss';

.controls {
  width: 100%;
  max-width: 280px; 
  padding: 16px 0;
  font-size: 1.4rem;
}

.controls__start {
  display: block;
  width: 120px;
  margin: 0 auto;
  padding: 6px 8px;

  font-family: 'Rubik', sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;

  background-color: $colorGreen;
  border: none;
  border-radius: 3px; 
  transition: background-color .15s ease;
}

.controls__start:hover {
  background-color: darken($colorGreen, 7%);
}

.controls__start:disabled {
  background-color: $colorGray;
}
</style>
