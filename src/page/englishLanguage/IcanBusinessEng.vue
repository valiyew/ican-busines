<template>
  <div class="icanBusines">
    <div class="bg">
      <div class="title" style="transition: 0.5s">
        <div class="about">
          <h1>
            <span>What is ICAN BUSINESS? </span>
            <img class="check" src="../../assets/images/check.svg" alt="" />
          </h1>
          <div class="absaluteBox">more than 5 years on the market</div>
        </div>
        <p class="aboutText">
          ICAN BUSINESS software is a program that automates credit institutions, fully automates
          credit institutions, helps pay off payments and debts on time, protects against
          fraudsters, and guarantees control of your employees. <br />
          <br />
          Take advantage of our innovative solutions to maximize business profits.
        </p>
        <a href="tel:+998781137400">
          <button class="callBtn">
            <i style="margin-right: 10px" class="fa-solid fa-phone"></i>
            <span> Connect with us</span>
          </button>
        </a>
      </div>
      <div class="img" style="transition: 0.5s">
        <img src="../../assets/images/businesImg.png" alt="" />
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
  padding: 0px 40px;
}

.img {
  width: 90%;
  height: 100%;
}
.bg .title {
  width: 40%;
}
.title .about {
  padding: 55px 0;
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
.aboutText {
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

.img img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 1900px) {
  .img {
    width: 100%;
    height: 550px;
  }
}

@media screen and (max-width: 1500px) {
  .img {
    width: 100%;
    height: 100%;
  }
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
