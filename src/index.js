// import './js/component';
import './styles.css';

import Vue from 'vue';
import HeaderGroup from './components/HeaderGroup.vue';

new Vue({
  el: '#root',
  render: h => h(HeaderGroup)
})
