<template>
  <div class="hero">
    <NavbarEng />

    <div v-if="isModalOpened">
      <Transition name="fade">
        <CallEng @closeModal="closeModal" />
      </Transition>
    </div>

    <div class="about">
      <div class="title">
        <div>
          <h1>Highly secure and reliable warehouse system</h1>
          <p>
            iCan Business provides a highly secure and reliable storage platform built for business.
          </p>
        </div>
        <div class="buttons">
          <a href="tel:+998781137400">
            <button class="callBtn">
              <i style="margin-right: 10px" class="fa-solid fa-phone"></i>
              <span> Connect with us</span>
            </button>
          </a>
          <button @click="openModal" class="addUser">
            <i style="margin-right: 0px" class="fa-solid fa-user-plus"></i>
            <span>Become a partner</span>
          </button>
        </div>
        <img
          style="margin-top: 30px"
          class="sponsors"
          src="../../assets/images/sponsors.png"
          alt=""
        />
      </div>

      <div class="img"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CallEng } from '../../components/ModalEng'
import { NavbarEng } from '../../components/NavbarEng/index'
const isModalOpened = ref(false)

const openModal = () => {
  document.body.style.overflow = 'hidden'
  isModalOpened.value = true
}

const closeModal = () => {
  document.body.style.overflow = 'auto'
  isModalOpened.value = false
}
</script>

<style scoped>
.hero {
  height: 100vh;
  width: 100%;
  background-image: url(../../assets/images/heroImg.svg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.about {
  margin-top: 10%;
  text-align: left;
  padding: 20px 150px;
}

.about .title {
  width: 40%;
}

.title h1 {
  font-family: 'TT Firs Neue';

  color: #fff;
  font-size: 48px;
  font-weight: 600;
  /* font-family: 'TT Firs Neue'; */
}
.title p {
  color: #fff;
  font-family: 'TT Firs Neue';

  font-size: 16px;
  font-weight: 400;
  margin: 30px 0px;
}
.buttons {
  margin-top: 50px;
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
}

.callBtn {
  width: 250px;
  gap: 10px;
  font-family: 'TT Firs Neue';
  font-size: 18px;
  font-weight: 500;
  padding: 16px 24px 16px 24px;
  border-radius: 15px;
  color: #18b4ca;
  border: 1px solid #18b4ca;
  background: #fff;
  transition: 0.3s;
}

.addUser {
  width: 250px;
  font-family: 'TT Firs Neue';
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px 16px 24px;
  border-radius: 15px;
  color: #fff;
  border: 1px solid rgba(164, 220, 220, 255);
  background: rgba(114, 201, 216, 255);
  transition: 0.3s;
}

.call:active {
  transform: scale(1.1);
}
.addUser:active {
  transform: scale(1.1);
}

.addUser:hover img {
  color: #18b4ca;
}

.about .img {
  width: 48%;
  height: 600px;
  background-image: url(../../assets/images/aboutImg.png);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
}

.sponsors {
  width: 100%;
}

@media screen and (min-width: 1900px) {
  @media screen and (min-height: 1100px) {
    .hero {
      height: 100vh;
    }

    .about .img {
      height: 930px;
    }

    .title h1 {
      font-size: 54px;
    }

    .title p {
      font-size: 26px;
    }

    .buttons button {
      width: 330px;
      padding: 25px 10px;
      font-size: 24px;
    }
  }
}
@media screen and (max-width: 1900px) {
  .hero {
    height: 100vh;
  }

  .about {
    margin-top: 10%;
    padding: 20px 150px;
  }

  .about .title {
    width: 45%;
  }

  .title h1 {
    text-align: left;
    font-size: 48px;
  }

  .title p {
    text-align: left;
    font-size: 16px;
  }

  .buttons {
    margin-top: 30px;
    flex-direction: row;
    gap: 30px;
  }

  .buttons button {
    padding: 15px 20px;
    font-size: 18px;
  }

  .about .img {
    height: 650px;
    width: 45%;
  }
  @media screen and (min-height: 600px) {
    .hero {
      height: 115vh;
    }
    .about .img {
      height: 550px;
    }
  }
  @media screen and (min-height: 700px) {
    .hero {
      height: 100vh;
    }
    .about .img {
      height: 660px;
    }
  }
  @media screen and (min-height: 1100px) {
    .about .img {
      height: 930px;
    }

    .title h1 {
      font-size: 48px;
    }

    .title p {
      font-size: 24px;
    }

    .buttons button {
      padding: 25px 10px;
      font-size: 20px;
    }
  }
}
@media screen and (max-width: 1500px) {
  .about .img {
    height: 650px;
  }
  @media screen and (min-height: 1100px) {
    .about .img {
      height: 930px;
    }

    .title h1 {
      font-size: 48px;
    }

    .title p {
      font-size: 24px;
    }

    .buttons {
      flex-direction: column;
    }
    .buttons button {
      width: 100%;
    }
  }
}
@media screen and (max-width: 1400px) {
  .hero {
    height: 100vh;
  }

  .about {
    margin-top: 10%;
    padding: 20px 100px;
  }

  .about .title {
    width: 45%;
  }

  .title h1 {
    text-align: left;
    font-size: 42px;
  }

  .title p {
    text-align: left;
    font-size: 16px;
  }

  .buttons {
    margin-top: 30px;
    flex-direction: row;
    gap: 30px;
  }

  .buttons button {
    padding: 20px 5px;
    font-size: 16px;
  }

  .about .img {
    height: 650px;
    width: 45%;
  }
  @media screen and (min-height: 1100px) {
    .about .img {
      height: 930px;
    }

    .title h1 {
      font-size: 48px;
    }

    .title p {
      font-size: 24px;
    }

    .buttons button {
      padding: 25px 10px;
      font-size: 20px;
    }
  }
}
@media screen and (max-width: 1350px) {
  .hero {
    height: 100vh;
  }

  .about {
    margin-top: 10%;
    padding: 20px 50px;
  }

  .about .title {
    width: 40%;
  }

  .title h1 {
    text-align: left;
    font-size: 38px;
  }

  .title p {
    text-align: left;
    font-size: 16px;
  }

  .buttons {
    margin-top: 30px;
    flex-direction: column;
    gap: 10px;
  }

  .buttons button {
    padding: 15px 30px;
    width: 100%;
    font-size: 18px;
  }

  .about .img {
    height: 630px;
    width: 50%;
  }
  @media screen and (min-height: 1100px) {
    .about .img {
      height: 930px;
    }

    .title h1 {
      font-size: 48px;
    }

    .title p {
      font-size: 24px;
    }

    .buttons button {
      padding: 25px 10px;
      font-size: 20px;
    }
  }
}
@media screen and (max-width: 1100px) {
  .hero {
    height: 170vh;
  }

  .about {
    margin-top: 5%;
    padding: 20px 150px;
  }

  .about .title {
    width: 100%;
  }

  .title h1 {
    text-align: center;
    font-size: 52px;
  }

  .title p {
    text-align: center;
    font-size: 20px;
  }

  .buttons {
    flex-direction: column;
    gap: 10px;
  }

  .buttons button {
    padding: 18px 20px;
    width: 100%;
    font-size: 20px;
  }

  .about .img {
    height: 700px;
    width: 85%;
  }
  @media screen and (min-height: 600px) {
    .hero {
      height: 220vh;
    }
  }
  @media screen and (min-height: 1100px) {
    .hero {
      height: 140vh;
    }

    .about .img {
      height: 1050px;
    }

    .buttons button {
      padding: 25px 10px;
      font-size: 22px;
    }
  }
}
@media screen and (max-width: 992px) {
  .hero {
    height: 155vh;
  }

  .about {
    margin-top: 5%;
    padding: 20px 150px;
  }

  .about .title {
    width: 100%;
  }

  .title h1 {
    text-align: center;
    font-size: 48px;
  }

  .title p {
    text-align: center;
    font-size: 18px;
  }

  .buttons {
    flex-direction: column;
    gap: 10px;
  }

  .buttons button {
    width: 100%;
  }

  .about .img {
    height: 600px;
    width: 85%;
  }
  @media screen and (min-height: 1100px) {
    .hero {
      height: 130vh;
    }
    .about .img {
      height: 1050px;
    }
    .buttons button {
      padding: 25px 10px;
      font-size: 22px;
    }
  }
}
@media screen and (max-width: 876px) {
  .hero {
    height: 160vh;
  }

  @media screen and (min-height: 1100px) {
    .hero {
      height: 125vh;
    }
  }
}
@media screen and (max-width: 776px) {
  .hero {
    height: 135vh;
  }

  .about {
    padding: 20px 50px;
  }

  .about .title {
    width: 100%;
  }

  .title h1 {
    font-size: 38px;
  }

  .title p {
    font-size: 18px;
  }

  .buttons {
    flex-direction: column;
    gap: 10px;
  }

  .buttons button {
    width: 100%;
    font-size: 18px;
    padding: 18px 20px;
  }

  .about .img {
    height: 500px;
    width: 85%;
  }
  @media screen and (min-height: 600px) {
    .hero {
      height: 180vh;
    }
  }
  @media screen and (min-height: 1100px) {
    .hero {
      height: 110vh;
    }

    .about .img {
      height: 1050px;
    }

    .buttons button {
      padding: 25px 10px;
      font-size: 22px;
    }
  }
}
@media screen and (max-width: 576px) {
  .hero {
    height: 140vh;
  }

  .about {
    padding: 20px 30px;
  }

  .about .title {
    width: 100%;
  }

  .title h1 {
    font-size: 34px;
  }

  .title p {
    font-size: 16px;
  }

  .buttons {
    flex-direction: column;
    gap: 10px;
  }

  .buttons button {
    padding: 15px 20px;
    width: 100%;
    font-size: 18px;
  }

  .about .img {
    height: 500px;
    width: 85%;
  }
  @media screen and (min-height: 600px) {
    .hero {
      height: 180vh;
    }
  }
  @media screen and (min-height: 700px) {
    .hero {
      height: 160vh;
    }
  }
  @media screen and (min-height: 800px) {
    .hero {
      height: 140vh;
    }
  }
  @media screen and (min-height: 1100px) {
    .hero {
      height: 105vh;
    }

    .buttons button {
      padding: 20px 10px;
      font-size: 22px;
    }
  }
}
@media screen and (min-width: 576px) {
  @media screen and (min-height: 700px) {
    .hero {
      height: 160vh;
    }
  }
}
@media screen and (min-width: 776px) {
  @media screen and (min-height: 700px) {
    .hero {
      height: 185vh;
    }
  }
}
@media screen and (min-width: 1100px) {
  @media screen and (min-height: 700px) {
    .hero {
      height: 105vh;
    }
  }
}
</style>
