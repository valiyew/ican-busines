<template>
  <div class="modal">
    <div class="modal-content">
      <div class="hero">
        <div>
          <p>Sentabr 17, 2023</p>
          <h1>Bizning platformamiz bilan uyda ishlash bo'yicha to'liq qo'llanma</h1>
        </div>
        <button @click="$emit('closeModal')"><i class="fa-solid fa-x"></i></button>
      </div>
      <img src="../../assets/images/modalImg.png" alt="" />
      <div class="text">
        <p class="about">
          Ushbu sayt yuridik va jismoniy shaxslar bilan tijorat va o'zaro kelishuvdir. imzolashga
          ruxsat beradi. 🤗
        </p>
        <p class="about">
          Ushbu ilova ishlatish uchun qulay interfeysga ega, bu sizga shartnoma
          imzolashda har qanday qiyinchiliklarni bartaraf etishga imkon beradi.🥇
        </p>
        <p class="about">Ijtimoiy tarmoqlarda baham ko'ring</p>
        <div class="contacts">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-5%);
  opacity: 0;
}

.modal {
  overflow-y: hidden;
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
  height: 90vh;
  padding: 20px 30px;
  position: relative;
  border-radius: 25px;
}

.modal-content img {
  width: 100%;
  height: 410px;
}

.modal-content .contacts {
  display: flex;
  align-items: center;
  gap: 60px;
  cursor: pointer;
}
.modal-content .about {
  /* margin-top: 5px; */
  font-family: 'TT Firs Neue';
  font-weight: 400;
  font-size: 14px;
  width: 100%;
}
.modal-content .hero {
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;
}

.modal-content .text {
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: start;
}
.hero p {
  font-family: 'TT Firs Neue';
  font-weight: 400;
  font-size: 18px;
  color: #5a6161;
}
.hero h1 {
  font-size: 25px;
  font-family: 'TT Firs Neue';
  font-weight: 500;
  margin-bottom: 20px;
}
.hero button {
  top: 0;
  right: 0;
  margin-right: 10px;
  margin-top: 10px;
  position: absolute;
  font-family: 'TT Firs Neue';
  font-size: 22px;
  border: none;
  font-weight: bold;
  background: none;
}

@media screen and (min-width: 300px) {
  .modal {
    padding: 20px 30px;
  }
  .modal-content {
    margin-top: 50px;
    width: 100%;
    padding: 10px 15px;
  }
  .hero {
    margin-top: 30px;
  }

  .hero p {
    font-size: 14px;
    margin-top: 30px;
    margin: 0;
  }
  .hero img {
    height: 250px;
  }
  .modal-content .about {
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 576px) {
  .modal-content {
    /* margin-top: 200px; */
    padding: 30px 35px;
  }
  .hero {
    margin-top: 5px;
  }
  .hero img {
    height: 320px;
  }
}
@media screen and (min-width: 776px) {
  .modal-content {
    width: 80%;
    padding: 30px 35px;
  }
}
@media screen and (min-width: 992px) {
  .modal-content {
    width: 70%;
    padding: 30px 35px;
  }
}
@media screen and (min-width: 1100px) {
  .modal-content {
    margin-top: 50px;
    width: 50%;
    padding: 30px 40px;
  }
  .hero {
    margin: 0;
  }
  .hero img {
    height: 470px;
  }
  .hero p {
    margin-bottom: 5px;
  }
}
</style>
