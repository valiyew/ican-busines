<template>
  <div>
    <Hero />
    <IcanBusines />
    <IcanChoose />
    <NewPage />
    <Partner />
    <MapsPage />
    <Footer />
  </div>
</template>

<script setup>
import { Hero, IcanBusines, IcanChoose, NewPage, Partner, MapsPage, Footer } from './index'

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
