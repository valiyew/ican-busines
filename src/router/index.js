import { createRouter, createWebHistory } from 'vue-router'
import { AboutModal, CallModal, PartnerModal } from '../components'
import { AboutEng, CallEng, PartnerEng } from '../components/ModalEng'
import { AboutUz, CallUz, PartnerUz } from '../components/ModalUz'
import { Home } from '../page'

const languages = localStorage.getItem('selectedLanguage')

const routeComponent1 = (language) => {
  switch (language) {
    case 'Ru':
      return AboutModal
    case 'En':
      return AboutEng
    case 'Uz':
      return AboutUz
    default:
      return AboutModal
  }
}

const routeComponent2 = (language) => {
  switch (language) {
    case 'Ru':
      return PartnerModal
    case 'En':
      return PartnerEng
    case 'Uz':
      return PartnerUz
    default:
      return PartnerModal
  }
}

const routeComponent3 = (language) => {
  switch (language) {
    case 'Ru':
      return CallModal
    case 'En':
      return CallEng
    case 'Uz':
      return CallUz
    default:
      return CallModal
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: routeComponent1(languages)
    },
    {
      path: '/partner',
      name: 'partner',
      component: routeComponent2(languages)
    },
    {
      path: '/contact',
      name: 'contact',
      component: routeComponent3(languages)
    }
  ]
})

export default router
