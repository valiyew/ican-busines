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
  title:
    "Ican Business Uz About | Bo'lib-bo'lib to'lash va to'lovlarni avtomatik hisobdan chiqarishni avtomatlashtirish",
  meta: [
    {
      name: 'description',
      content:
        "Biznesingiz uchun IT yechimlari. To'lovlarni avtomatlashtirish, ombor tizimi, ERP yechimlari. Biz biznesingizni yuritishdagi xatarlarni kamaytiramiz va biznes jarayonlaringizning yaxlitligini oshirishga yordam beramiz"
    },
    {
      name: 'keywords',
      content:
        "ican business,icanbusiness,icanbusiness, IcanBusiness, ICANBUSINESS, ican business, Ican Business, ICAN BUSINESS, ican busines, ican biznes,icanbiznes,Ican biznes, Ican, ican, ICAN, IT, it, IT, companya, company, Avtomatlashtirish, Bo'lib to'lash, O'zbekiston, ERP, Ombor buxgalteriya, IT kompaniyasi, Uz, Ru, En, Kreditlar, shoshilinch to'lov"
    }
  ]
})
</script>

<style scoped></style>
