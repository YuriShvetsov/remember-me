import { createApp } from 'vue'
import store from './store'
import App from './components/App.vue'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)

app.use(store)
app.use(Vue3Lottie, { name: 'LottieAnimation' })
app.mount('#app')
