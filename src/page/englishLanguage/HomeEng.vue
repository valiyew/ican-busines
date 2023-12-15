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
  title: 'Ican Business En About | Automation of Installments and Automatic Write-Off of Payments',
  meta: [
    {
      name: 'description',
      content:
        'IT solutions for your business. Installment automation, warehouse system, ERP solutions. We will reduce the risks of running your business and also help increase the integrity of your business processes'
    },
    {
      name: 'keywords',
      content:
        'Ican, ican business,icanbusiness, Ican business ican,icanbusiness, IcanBusiness, ICANBUSINESS, ican business, Ican Business, ICAN BUSINESS, ican busines, ICAN, IT, it, IT, company, comp, Automation, Installment plan, Uzbekistan, ERP, Warehouse accounting, IT company, Uz, Ru, En, Loans, urgent payment, business'
    }
  ]
})
</script>
