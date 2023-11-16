<template>
  <transition>
    <div class="modal" v-if="openModal">
      <div class="modal-content container">
        <router-link to="/">
          <button @click="closeModal"><i class="fa-solid fa-x back"></i></button>
        </router-link>
        <div class="about">
          <h1>
            <span>Что такое ican business?</span>
            <img class="check" src="../assets/images/check.svg" alt="" />
          </h1>
          <div class="absaluteBox">более 10 лет на рынке</div>
        </div>

        <div class="title">
          <h2>Условия:</h2>
          <p>
            Приложение имеет удобный и простой в использовании интерфейс, который позволяет без
            каких-либо затруднений подписать договор. 🥇 Теперь для заключения договора не
            обязательно встречаться с партнером лично, договоры можно легко заключать удаленно.
          </p>

          <div class="experience">
            <div>
              <p style="display: flex; gap: 5px; align-items: center">
                <img src="../assets/images/status-up.svg" alt="" /> <span>Высокий опыт работы</span>
              </p>
              <p style="display: flex; gap: 5px; align-items: center">
                <img src="../assets/images/lamp-charge.svg" alt="" />
                <span>Высокий опыт работы</span>
              </p>
            </div>
            <div>
              <p style="display: flex; gap: 5px; align-items: center">
                <img src="../assets/images/star.svg" alt="" /> <span>Высокий опыт работы</span>
              </p>
              <p style="display: flex; gap: 5px; align-items: center">
                <img src="../assets/images/layer.svg" alt="" /> <span>Высокий опыт работы</span>
              </p>
            </div>
          </div>

          <div class="sponsor">
            <h1 style="font-family: 'TT Firs Neue'">Наши партнеры</h1>
            <div class="partners">
              <img src="../assets/images/frame11.png" alt="" />
              <img src="../assets/images/frame12.png" alt="" />
              <img src="../assets/images/frame13.png" alt="" />
              <img src="../assets/images/frame14.png" alt="" />
              <img src="../assets/images/frame15.png" alt="" />
              <img src="../assets/images/frame16.png" alt="" />
              <img src="../assets/images/frame17.png" alt="" />
              <img src="../assets/images/frame18.png" alt="" />
              <img src="../assets/images/playmobile.png" alt="" />
            </div>
          </div>

          <div class="call">
            <h1>Оставьте свой контакт, и мы свяжемся с вами:</h1>
            <form action="" @submit.prevent>
              <div class="inputs">
                <div>
                  <label for="name">Имя:</label>
                  <input
                    required
                    class="input form-control"
                    type="text"
                    id="name"
                    placeholder="Enter name..."
                  />
                </div>
                <div>
                  <label for="phoneNumber">Телефонный номер:</label>
                  <input
                    required
                    class="input form-control"
                    type="text"
                    id="phoneNumber"
                    placeholder="Enter phone..."
                    value="+998 "
                  />
                </div>
              </div>
              <button type="submit"><i class="fa-solid fa-phone"></i> Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const openModal = ref(true)
const closeModal = () => {
  openModal.value = false
}
</script>

<style scoped>
.partners {
  display: flex;
  gap: 20px;
}

.partners img {
  width: 100px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(91, 91, 91, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 45%;
  padding: 20px 30px;
  position: relative;
  border-radius: 25px;
}
.modal-content .about {
  padding: 50px 0;
  /* width: 100%; */
  position: relative;
}
.about h1 {
  font-family: 'TT Firs Neue';
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 35px;
  font-weight: 600;
}
.modal-content .absaluteBox {
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(10deg);
  background: #fff;
  border-radius: 15px;
  padding: 10px 20px;
  font-family: 'TT Firs Neue';

  font-size: 14px;
  font-weight: 500;
  box-shadow: 4px 8px 10px 0px #606060;
}

.title h2 {
  font-family: 'TT Firs Neue';
  font-weight: 500;
  color: #172d33;
  font-size: 24px;
}
.title p {
  font-family: 'TT Firs Neue';
  font-weight: 400;
  font-size: 14px;
  color: #172d33;
}
.title .experience {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.experience img {
  width: 30px;
}
.experience p {
  font-family: 'TT Firs Neue';

  font-size: 18px;
  color: #172d33;
  font-weight: 600;
}

.sponsor {
  margin-top: 30px;
}
.sponsor h1 {
  font-family: 'TT Firs Neue';

  font-size: 20px;
  color: #172d33;
}
.sponsor {
  width: 100%;
}
.sponsor div {
  overflow: scroll;
}
.call .inputs div {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
.call h1 {
  font-family: 'TT Firs Neue';

  margin-top: 20px;
  color: #172d33;
  font-size: 20px;
}

.inputs input {
  font-family: 'TT Firs Neue';
  font-size: 18px;
  padding: 15px;
}
.call button {
  font-family: 'TT Firs Neue';
  margin-top: 25px;
  padding: 15px 20px;
  color: #fff;
  background: #1fa6bb;
  border-radius: 15px;
  border: none;
}

@media screen and (min-width: 300px) {
  .modal {
    padding: 20px 30px;
  }
  .modal-content {
    margin-top: 350px;
    width: 100%;
    position: relative;
  }
  .modal-content .about {
    width: 100%;
  }
  .back {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px 10px 0px 0px;
    background: none;
    font-size: 25px;
    border: none;
  }
}
@media screen and (min-width: 576px) {
  .modal-content .about {
    margin-top: 20px;
    width: 500px;
  }

  .modal-content {
    margin-top: 200px;
  }
}
@media screen and (min-width: 776px) {
  .modal-content {
    margin-top: 100px;
    width: 80%;
  }
}
@media screen and (min-width: 992px) {
  .modal-content {
    margin-top: 180px;
    width: 70%;
  }
}
@media screen and (min-width: 1100px) {
  .modal-content {
    margin-top: 190px;
    width: 50%;
  }
}
</style>
