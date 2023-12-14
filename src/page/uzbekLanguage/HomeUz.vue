<template>
  <div>
    <HeroUz />
    <div class="container">
      <IcanBusinessUz />
      <IcanChooseUz />
      <NewPageUz />
      <PartnerUz />
      <MapsUz />
      <FooterUz />
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import {
  HeroUz,
  IcanBusinessUz,
  NewPageUz,
  IcanChooseUz,
  PartnerUz,
  MapsUz,
  FooterUz
} from './index'
useHead({
  title: 'Ican Business Uz About | Автоматизация Рассрочки и Автосписание Платежей',
  meta: [
    {
      name: 'description',
      content:
        'IT решения для вашего бизнеса. Автоматизация рассрочки, складская система, ERP решения. Мы снизим ризки ведения вашего бизнеса, а также поможем повысить прозначность ваших бизнес процессов'
    },
    {
      name: 'keywords',
      content:
        "Ican, ican, ICAN, IT, it, IT, companya, company, Avtomatlashtirish, Bo'lib to'lash, O'zbekiston, ERP, Ombor buxgalteriya, IT kompaniyasi, Uz, Ru, En, Kreditlar, shoshilinch to'lov"
    }
  ]
})
</script>

<style scoped></style>
