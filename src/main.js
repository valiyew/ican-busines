import './assets/styles/tailwind.css'

import { createApp, Transition } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
const head = createHead()

const app = createApp(App).use(head)
app.component('Transition', Transition)
app.use(router).mount('#app')
