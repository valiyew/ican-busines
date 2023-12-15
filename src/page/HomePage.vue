<template>
  <div>
    <Hero />
    <div class="container">
      <IcanBusines />
      <IcanChoose />
      <NewPage />
      <Partner />
      <MapsPage />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { Hero, IcanBusines, IcanChoose, NewPage, Partner, MapsPage, Footer } from './index'
useHead({
  title: 'Ican Business Ru About | Автоматизация Рассрочки и Автосписание Платежей',
  meta: [
    {
      name: 'description',
      content:
        'IT решения для вашего бизнеса. Автоматизация рассрочки, складская система, ERP решения. Мы снизим ризки ведения вашего бизнеса, а также поможем повысить прозначность ваших бизнес процессов'
    },
    {
      name: 'keywords',
      content:
        'ican бусинесс,icanбусинесс, icanbusiness, IcanBusiness, ICANBUSINESS, ican business, Ican Business, ICAN BUSINESS, ican busines, Ican, ican, ICAN, IT, it, Iт, компания, Автоматизация, Рассрочка, Узбекистан, ERP, Складской учёт, Айти компания, Uz, Ру, Ен, Кредиты , срочный платеж'
    }
  ]
})

// eslint-disable-next-line no-unused-vars
const components = {
  Hero,
  IcanBusines,
  IcanChoose,
  NewPage,
  Partner,
  MapsPage,
  Footer
}

// eslint-disable-next-line no-unused-vars
const languages = localStorage.getItem('selectedLanguage')
</script>

<style></style>
