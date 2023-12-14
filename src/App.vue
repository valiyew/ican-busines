<script setup>
import { reactive, computed } from 'vue'
import { RouterView } from 'vue-router'
import { useHead } from '@vueuse/head'

const siteData = reactive({
  title: 'Ican Business Uz About | Автоматизация Рассрочки и Автосписание Платежей',
  description:
    'IT решения для вашего бизнеса. Автоматизация рассрочки, складская система, ERP решения. Мы снизим ризки ведения вашего бизнеса, а также поможем повысить прозначность ваших бизнес процессов'
})
useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: 'description',
      content: computed(() => siteData.description)
    }
  ]
})
</script>

<template>
  <main class="wow">
    <RouterView />
  </main>
</template>

<style>
.wow {
  overflow-x: hidden;
}
</style>
