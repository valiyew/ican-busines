<template>
  <div class="icanBusines">
    <div class="bg">
      <div class="title" style="transition: 0.5s" v-motion-slide-visible-once-top>
        <div class="about">
          <h1>
            <span>Что такое ican business?</span>
            <img class="check" src="../assets/images/check.svg" alt="" />
          </h1>
          <div class="absaluteBox">более 10 лет на рынке</div>
        </div>
        <p class="aboutText">
          Данный сайт является коммерческим и взаимным соглашением с юридическими и физическими
          лицами, позволяющим подписание. ⚡️Договор имеет при этом юридическую силу. 🤗 В
          приложении есть удобный и простой в использовании интерфейс, благодаря которому вам не
          придется предоставлять возможность подпишите договор без затруднений.
        </p>
          <button>
            <i style="margin-right: 10px" class="fa-solid fa-phone"></i>
            <span>Связаться с нами</span>
          </button>
      </div>
      <div style="transition: 0.5s" class="img" v-motion-slide-visible-once-bottom>
        <img class="imgBg" src="../assets/images/macBg.png" alt="" />
        <img class="imgMac" src="../assets/images/macAir.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.icanBusines {
  padding: 30px 150px;
  margin-top: 100px;
}
.bg {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  background: #f7f7f7;
  border-radius: 20px;
  padding: 20px 40px;
}
.img {
  position: relative;
  /* width: 0%; */
}
.bg .title {
  width: 50%;
}
.title .about {
  padding: 60px 0;
  width: 500px;
  position: relative;
}
.about h1 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'TT Firs Neue';

  font-size: 30px;
  font-weight: 600;
}
.about .aboutText {
  font-family: 'TT Firs Neue';
  color: #5d5d5f;
  font-size: 14px;
  font-weight: 400;
}

.title button {
  font-family: 'TT Firs Neue';
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  padding: 15px 20px;
  border-radius: 15px;
  color: #fff;
  border: 1px solid #18b4ca;
  background: #18b4ca;
  transition: 0.5s;
}
.title button:active {
  transform: scale(1.2);
}

.title .absaluteBox {
  font-family: 'TT Firs Neue';
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(10deg);
  background: #fff;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 4px 8px 10px 0px #606060;
}

.img .imgBg {
  width: 600px;
}
.img .imgMac {
  position: absolute;
  bottom: 0;
  top: 20px;
}

@media screen and (max-width: 1200px) {
  .icanBusines {
    padding: 20px 40px;
  }
  .bg {
    text-align: center;
    padding: 10px 20px;
    flex-direction: column;
  }
  .img img {
    width: 700px;
  }
  .bg .title {
    width: 100%;
  }
}

@media screen and (max-width: 890px) {
  .icanBusines {
    padding: 30px;
  }
  .bg {
    padding: 10px 20px;
    flex-direction: column;
  }

  .title .about {
    width: 100%;
  }

  .img img {
    width: 100%;
  }
  .about h1 {
    font-size: 30px;
  }
}
</style>
