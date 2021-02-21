import { createApp } from 'vue';
import App from './components/App.vue';
import Component from './components/Component.vue';

const app = createApp(App);

app.component('simple-component', Component);
app.mount('#app');