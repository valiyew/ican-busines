import './assets/styles/tailwind.css'

import { createApp, Transition } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const head = createHead()
const app = createApp(App).use(head)
app.use(Toast, {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true
})
app.component('Transition', Transition)
app.use(router).mount('#app')
