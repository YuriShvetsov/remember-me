<template>
  <div class="info">
    <div class="info__col">
      <div class="info__cur-strikes">Очки: <div class="info__cur-strikes-value">{{ curStrikes }}</div></div>
    </div>
    <div class="info__col">
      <div class="info__max-strikes">Рекорд: <div class="info__max-strikes-value">{{ maxStrikes }}</div></div>
    </div>
    <div class="info__col">
      <div class="info__level">Сложность: <div class="info__level-value">{{ diff }}</div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['diff', 'curStrikes', 'maxStrikes'])
  }
}
</script>

<style scoped>
.info {
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 280px;
  padding: 10px 0;

  font-size: 14px;
}

.info__cur-strikes,
.info__max-strikes {
  display: inline-block;
}

.info__cur-strikes-value,
.info__max-strikes-value {
  display: inline-block;
  width: 32px;
}

.info__level {
  display: inline-block;
}

.info__level-value {
  display: inline-block;
  width: 16px;
}
</style>
