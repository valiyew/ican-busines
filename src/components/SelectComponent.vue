<template>
  <div class="languageDiv">
    <div
      style="display: flex; align-items: center; gap: 5px; cursor: pointer"
      @click="toggleLanguage"
    >
      <p style="color: #fff; font-size: 18px">{{ selectedValue }}</p>
      <img src="../assets/images/language.svg" alt="" />
    </div>
    <Transition name="fade">
      <ul v-if="showLanguage" class="chooseLanguage">
        <router-link to="/ru">
          <li @click="selectLanguage('Ru')" value="Ru">
            <img alt="" src="../assets/images/language1.png" style="width: 20px; height: 20px" />
            <p>Русский</p>
          </li>
        </router-link>

        <router-link to="/en">
          <li @click="selectLanguage('En')" value="En">
            <img alt="" src="../assets/images/language2.png" style="width: 20px; height: 20px" />
            <p>English</p>
          </li>
        </router-link>

        <router-link to="/uz">
          <li @click="selectLanguage('Uz')" value="Uz">
            <img alt="" src="../assets/images/language3.png" style="width: 20px; height: 20px" />
            <p>O’zbek</p>
          </li>
        </router-link>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const storedLanguage = localStorage.getItem('selectedLanguage')
const defaultLanguage = storedLanguage ? storedLanguage : 'Ru'

const selectedValue = ref(defaultLanguage)

const handleChange = () => {
  localStorage.setItem('selectedLanguage', selectedValue.value)
}

// eslint-disable-next-line no-unused-vars
const languages = [
  { value: 'Ru', label: 'Русский', img: '/src/assets/images/language1.png' },
  { value: 'En', label: 'English', img: '/src/assets/images/language2.png' },
  { value: 'Uz', label: 'O’zbek', img: '/src/assets/images/language3.png' }
]

const showLanguage = ref(false)
const toggleLanguage = () => {
  showLanguage.value = !showLanguage.value
}

const selectLanguage = (language) => {
  selectedValue.value = language
  handleChange()
  toggleLanguage()
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-5%);
  opacity: 0;
}

.languageDiv {
  display: flex;
  flex-direction: column;
  position: relative;
}

.chooseLanguage {
  position: absolute;
  top: 50px;
  z-index: 99;
  background: #fff;
  border-radius: 10px;
  padding-bottom: 3px;
}

.chooseLanguage li {
  width: 130px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 15px;
  list-style: none;
  cursor: pointer;
  margin-top: 5px;
}

.chooseLanguage li p {
  font-size: 18px;
  font-weight: 400;
  font-family: 'TT Firs Neue';
}

@media screen and (max-width: 1200px) {
  .languageDiv {
    padding: 5px 15px;
    border: 1px solid #fff;
    border-radius: 20px;
  }
}
</style>
