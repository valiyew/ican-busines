import './assets/styles/tailwind.css'
import { MotionPlugin } from '@vueuse/motion'

import { createApp, Transition } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(MotionPlugin)
app.component('Transition', Transition)

app.use(router).mount('#app')
