<template>
  <div id="choose" class="icanShooseBox">
    <div style="transition: 0.5s" class="about">
      <h1 style="display: flex">
        <span>Nima uchun ICAN BUSINESSni tanlaysiz</span>
        <img class="check" src="../../assets/images/check.svg" alt="" />
      </h1>
      <div class="absaluteBox">hamma narsa mantiqiy</div>
    </div>

    <div class="icanChoose">
      <div class="left">
        <div style="transition: 0.5s" class="a">
          <div class="title">
            <h2>Biznesni avtomatlashtirishning barcha vositalari</h2>
            <p style="margin-top: 20px">
              Bizning platformamiz orqali siz o'z biznesingizni masofadan turib kuzatishingiz va
              boshqarishingiz mumkin bo'ladi.
            </p>
            <a href="tel:+998781137400">
              <button class="callBtn">
                <i style="margin-right: 10px" class="fa-solid fa-phone"></i>
                <span>Biz bilan bog'lanish</span>
              </button>
            </a>
          </div>
          <img style="border-radius: 15px" src="../../assets/images/imgA.png" alt="" />
        </div>

        <div style="transition: 0.5s" class="AandBSection">
          <div class="b" style="position: relative; height: 350px">
            <div style="width: 100%">
              <h2>Firibgarlikdan himoya qilish</h2>
              <p style="margin-top: 20px">
                Skorlash mijozni tahlil qilish imkonini beradi <br />
                bo'lib-bo'lib olish uchun ariza berishdan oldin. <br />
                Va bu kredit tarixi yomon bo'lgan mijozni aniqlash imkonini beradi.
              </p>
            </div>
            <img
              class="absoluteImg"
              style="border-radius: 15px; position: absolute; bottom: 0; right: 0"
              src="../../assets/images/imgB.png"
              alt=""
            />
          </div>
          <div class="c" style="position: relative; height: 350px">
            <div style="width: 100%">
              <h2>Xodimlar ustidan to'liq nazorat</h2>
              <p style="margin-top: 20px">
                Siz xodimlar va filiallar ustidan to'liq nazoratga ega bo'lasiz
              </p>
            </div>
            <img
              class="absoluteImg"
              style="border-radius: 15px; position: absolute; bottom: 0; right: 0"
              src="../../assets/images/imgC.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div style="transition: 0.5s" class="right">
        <div class="sklad">
          <div>
            <h2>Mijozlarning qarzlarini o'z vaqtida undirish</h2>
            <p style="margin-top: 20px">
              ICAN BUSINESS platformasi orqali kredit to'lovlari <br />
              o'z vaqtida va yig'iladi bu bilan qarzdor mijozlarning ko'payishining oldini oladi
            </p>
          </div>
          <img src="../../assets/images/skladImg.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.icanShooseBox {
  margin-top: 50px;
  padding: 20px 150px;
}

.about h1 {
  display: flex;
  align-items: center;
  gap: 10px;
}

.about h1 span {
  font-family: 'TT Firs Neue';
  font-size: 28px;
  font-weight: bold;
}
.icanShooseBox .about {
  padding: 60px 0;
  width: 500px;
  position: relative;
}

.icanShooseBox .absaluteBox {
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

.icanChoose {
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
}
.icanChoose p {
  font-family: 'TT Firs Neue';
  font-weight: 400;
  color: #5a6161;
  font-size: 14px;
}

.icanChoose h2 {
  font-family: 'TT Firs Neue';
  font-size: 28px;
  font-weight: 500;
}
.icanChoose .left .a {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #f7f8fa;
  justify-content: space-between;
  padding: 20px 30px;
  border-radius: 30px;
}

.a .title {
  width: 350px;
}
.a img {
  width: 250px;
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

.AandBSection {
  margin-top: 10px;
  display: flex;
  /* justify-content: space-between; */
  gap: 10px;
}

.AandBSection div {
  background: #f7f8fa;
  border-radius: 30px;
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.AandBSection div img {
  /* width: 250px; */
  width: 100px;
}

.right .sklad {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  padding: 20px 0px 0px 20px;
  background-image: url(../../assets/images/heroImg.svg);
  background-size: cover;
  background-repeat: no-repeat;
}
.sklad img {
  position: absolute;
  bottom: 0;
  right: 0;
}
.sklad h2 {
  margin-top: 20px;
  font-family: 'TT Firs Neue';
  font-weight: 500;
  font-size: 28px;
  color: #fff;
}
.sklad p {
  font-family: 'TT Firs Neue';
  margin-bottom: 20px;
  font-size: 14px;
  color: #fff;
  font-weight: 400;
}

@media screen and (max-width: 1400px) {
  .icanChoose {
    flex-direction: column;
  }
  .right .sklad {
    height: 650px;
  }

  .icanChoose .right .sklad {
    width: 400px;
  }
}
@media screen and (max-width: 1200px) {
  .left .a {
    width: 100%;
  }

  .AandBSection {
    gap: 40px;
    /* flex-direction: column; */
  }
  .AandBSection div {
    width: 100%;
  }
}

@media screen and (max-width: 1000px) {
  .icanShooseBox {
    padding: 20px 30px;
  }

  .left .a {
    width: 500px;
    text-align: center;
    flex-direction: column;
  }

  .AandBSection {
    gap: 40px;
    flex-direction: column;
  }
  .AandBSection div {
    width: 500px;
  }
}

@media screen and (max-width: 576px) {
  .icanShooseBox .about {
    width: 100%;
  }
  .icanChoose .right .sklad {
    width: 100%;
  }
  .right .sklad {
    height: 700px;
  }
  .left .a {
    width: 100%;
  }
  .a .title {
    width: 100%;
  }
  .a img {
    width: 100%;
  }
  .AandBSection div {
    width: 100%;
  }
  .AandBSection div img {
    width: 100%;
  }
}

@media screen and (min-width: 300px) {
  .AandBSection .absoluteImg {
    width: 180px;
  }
}
@media screen and (min-width: 400px) {
  .AandBSection .absoluteImg {
    width: 200px;
  }
}
@media screen and (min-width: 1000px) {
  .AandBSection .absoluteImg {
    width: 190px;
  }
}
</style>
