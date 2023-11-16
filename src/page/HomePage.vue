<template>
  <div>
    <div
      v-if="
        languages === 'Ru' ||
        !languages ||
        languages === '' ||
        (languages !== 'Ru' && languages !== 'Uz' && languages !== 'En')
      "
    >
      <Hero />
      <IcanBusines />
      <IcanChoose />
      <NewPage />
      <Partner />
      <MapsPage />
      <Footer />
    </div>

    <div v-if="languages === 'En'">
      <HomeEng />
    </div>

    <div v-if="languages === 'Uz'">
      <HomeUz />
    </div>
  </div>
</template>

<script setup>
import { HomeEng } from './englishLanguage/index'
import { Hero, IcanBusines, IcanChoose, NewPage, Partner, MapsPage, Footer } from './index'
import { HomeUz } from './uzbekLanguage/index'

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

const languages = localStorage.getItem('selectedLanguage')
console.log(languages)
</script>

<style></style>
