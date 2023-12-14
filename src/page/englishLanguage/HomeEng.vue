<template>
  <div>
    <HeroEng />
    <div class="container">
      <IcanBusinessEng />
      <IcanChooseEng />
      <NewPageEng />
      <PartnerEng />
      <MapsEng />
      <FooterEng />
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import {
  HeroEng,
  IcanBusinessEng,
  NewPageEng,
  IcanChooseEng,
  PartnerEng,
  MapsEng,
  FooterEng
} from './index'
useHead({
  title: 'Ican Business En About | Автоматизация Рассрочки и Автосписание Платежей',
  meta: [
    {
      name: 'description',
      content:
        'IT решения для вашего бизнеса. Автоматизация рассрочки, складская система, ERP решения. Мы снизим ризки ведения вашего бизнеса, а также поможем повысить прозначность ваших бизнес процессов'
    },
    {
      name: 'keywords',
      content:
        'Ican, ican, ICAN, IT, it, IT, company, comp, Automation, Installment plan, Uzbekistan, ERP, Warehouse accounting, IT company, Uz, Ru, En, Loans, urgent payment'
    }
  ]
})
</script>
