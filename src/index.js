import './assets/scss/reset.scss';
import './assets/scss/button.scss';

import Vue from 'vue';
import HeaderGroup from './components/HeaderGroup.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#root',
  render: h => h(HeaderGroup)
});
