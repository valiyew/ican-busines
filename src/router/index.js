import { createRouter, createWebHistory } from 'vue-router'
import { AboutModal, CallModal } from '../components'
import { AboutEng, CallEng } from '../components/ModalEng'
import { AboutUz, CallUz } from '../components/ModalUz'
import { Home } from '../page'
import { HomeEng } from '../page/englishLanguage/index'
import { HomeUz } from '../page/uzbekLanguage/index'

// eslint-disable-next-line no-unused-vars
const languages = localStorage.getItem('selectedLanguage')
console.log(languages)

let defaultHomeComponent = ''

switch (languages) {
  case 'Uz':
    defaultHomeComponent = HomeUz
    break
  case 'Ru':
    defaultHomeComponent = Home
    break
  case 'En':
    defaultHomeComponent = HomeEng
    break
  default:
    defaultHomeComponent = Home
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: defaultHomeComponent
    },

    {
      path: '/ru',
      name: 'homeRu',
      component: Home
    },

    {
      path: '/en',
      name: 'homeEng',
      component: HomeEng
    },

    {
      path: '/uz',
      name: 'homeUz',
      component: HomeUz
    },

    {
      path: '/ru/contact',
      name: 'contactRu',
      component: CallModal
    },

    {
      path: '/en/contact',
      name: 'contactEn',
      component: CallEng
    },

    {
      path: '/uz/contact',
      name: 'contactUz',
      component: CallUz
    },

    {
      path: '/news/ru',
      name: 'aboutRu',
      component: AboutModal
    },

    {
      path: '/news/en',
      name: 'aboutEn',
      component: AboutEng
    },

    {
      path: '/news/uz',
      name: 'aboutUz',
      component: AboutUz
    }
  ]
})

export default router
