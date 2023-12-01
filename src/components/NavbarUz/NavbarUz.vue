<template>
  <Transition name="fade">
    <div v-if="openMain" class="mainSidebar" :class="{ openSidebar: openMain, remove: !openMain }">
      <div class="logo" style="display: flex; align-items: center; justify-content: space-between">
        <img style src="../../assets/images/VectorsidebarIcon.svg" alt="" />
        <button
          @click="closeSidebar"
          style="
            background: none;
            font-size: 25px;
            border: none;
            cursor: pointer;
            position: absolute;
            top: 15px;
            margin: 10px 10px 0px 0px;
            right: 8%;
            z-index: 1;
          "
        >
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
      <div>
        <p @click="closeSidebar" style="display: flex; align-items: center; gap: 10px">
          <img src="../../assets/images/agendaprocust.svg" alt="" /> <span>Mahsulot haqida </span>
        </p>
        <p @click="closeSidebar" style="display: flex; align-items: center; gap: 10px">
          <img src="../../assets/images/note-2news.svg" alt="" />
          <span><a href="#news">Yangiliklar</a></span>
        </p>
        <p @click="closeSidebar" style="display: flex; align-items: center; gap: 10px">
          <img src="../../assets/images/shield-tickcheck.svg" alt="" />
          <span><a href="#choose">Afzalliklar</a></span>
        </p>
        <p @click="closeSidebar" style="display: flex; align-items: center; gap: 10px">
          <img src="../../assets/images/callMain.svg" alt="" />
          <span><a href="#contact">Biz bilan bog'lanish </a></span>
        </p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 30px">
        <button class="call"><i class="fa-solid fa-phone"></i> Biz bilan bog'lanish</button>
        <button class="addUser"><i class="fa-solid fa-user-plus"></i> Partenaga aylaning</button>
      </div>
    </div>
  </Transition>

  <div class="navbar">
    <ul>
      <img :class="{ remove: openMain }" src="../../assets/images/Vector.svg" alt="" />
      <li style="margin-left: 30px">
        <img src="../../assets/images/agenda.svg" alt="" /> <span>Mahsulot haqida </span>
      </li>
      <li @click="openNews">
        <img src="../../assets/images/note-2.svg" alt="" />
        <span><a href="#news">Yangiliklar</a></span>
      </li>

      <li @click="openPart">
        <img src="../../assets/images/shield-tick.svg" alt="" />
        <span><a href="#choose">Afzalliklar</a></span>
      </li>

      <li @click="openCall">
        <img src="../../assets/images/cal.svg" alt="" />
        <span><a href="#contact">Biz bilan bog'lanish </a></span>
      </li>
    </ul>

    <div class="language" :class="{ remove: openMain }">
      <SelectComponent  @selectChange="handleSelectChange" />

      <span><a href="#contact">Biz bilan bog'lanish </a></span>

      <div class="mains">
        <button @click="openSidebar" class="main">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SelectComponent from '../SelectComponent.vue'

const partModal = ref(false)
const openPart = () => {
  partModal.value = false
  setTimeout(() => {
    partModal.value = true
  })
}

const callModal = ref(false)
const openCall = () => {
  callModal.value = false
  setTimeout(() => {
    callModal.value = true
  })
}

const openMain = ref(false)
const openSidebar = () => {
  document.body.style.overflow = 'hidden'
  openMain.value = true
}
const closeSidebar = () => {
  document.body.style.overflow = 'auto'
  
  openMain.value = false
}
</script>

<style scoped>
@font-face {
  font-family: 'Neue';
  src: url(../assets/fonts/HALVARBREIT-TH.TTF);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-100%);
  /* opacity: 0; */
}
.navbar {
  padding: 30px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar ul {
  display: flex;
  align-items: center;
  gap: 20px;
}

ul li {
  list-style: none;
  display: flex;
  gap: 7px;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-family: 'TT Firs Neue';

  font-weight: 400;
  cursor: pointer;
}

.language {
  display: flex;
  align-items: center;
  gap: 20px;
}

.language span {
  /* font-family: 'Neue'; */
  font-family: 'TT Firs Neue';

  font-size: 16px;
  color: #fff;
  font-weight: 400;
}

.language select {
  padding: 5px 15px;
  outline: none;
  border-radius: 25px;
  color: #fff;
  background: none;
}

select option {
  color: #000;
  font-size: 20px;
  width: 100px;
}

.mains {
  display: none;
}

.main i {
  font-size: 18px;
}

.main {
  padding: 5px 15px;
  border: 1px solid #fff;
  border-radius: 25px;
  color: #fff;
  background: none;
}

@media screen and (max-width: 1200px) {
  .navbar ul li {
    display: none;
  }
  .mains {
    display: block;
  }
}

@media screen and (max-width: 890px) {
  .navbar {
    /* padding: 20px 0; */
    padding-right: 30px;
  }
  .navbar ul li {
    display: none;
  }
  .mains {
    display: block;
  }
  .language span {
    display: none;
  }

  .buttons button {
    width: 100%;
  }
}

@media screen and (min-width: 300px) {
  .mainSidebar {
    padding: 30px 8%;
    position: absolute;
    top: 0;
    background: #fff;
    width: 100%;
    height: 0;
    transition: 0.5s;
  }

  .mainSidebar div p {
    margin-top: 40px;
    color: #172d33;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }

  .language select {
    border: 1px solid #fff;
  }
  p img {
    width: 25px;
  }

  .call,
  .addUser {
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
  }
  .call {
    margin-top: 30px;
    background: #18b4ca;
    color: #fff;
    border: none;
  }
  .addUser {
    background: none;
    border: 1px solid #ccc;
    color: #000;
  }

  .remove {
    display: none;
  }

  .openSidebar {
    transition: 0.5s ease-out;
    height: 700px;
  }

  .openSidebar ul li {
    color: #000;
  }
}

@media screen and (min-width: 1200px) {
  .language select {
    border: none;
  }
}
</style>
