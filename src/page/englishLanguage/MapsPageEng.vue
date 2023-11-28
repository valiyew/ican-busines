<template>
  <div id="connect" class="maps">
    <div class="left" style="transition: 0.5s" v-motion-slide-once-visible-top>
      <div class="about">
        <h1>
          <span>Connect with us </span>
          <img class="check" src="../../assets/images/check.svg" alt="" />
        </h1>
        <div class="absaluteBox">Everything is very simple</div>
      </div>
      <p>
        Now, you must meet your partner face-to-face to conclude the contract no, you can easily
        conclude contracts remotely
      </p>
      <a href="tel:+998781137400">
        <button class="callBtn">
          <i style="margin-right: 10px" class="fa-solid fa-phone"></i>
          <span> Connect with us</span>
        </button>
      </a>
      <p>
        Subscribe and <br />
        stay up to date with our news
      </p>
      <div class="contacts" style="margin-top: 20px">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
      <div class="mapImg">
        <div style="position: relative; overflow: hidden; margin-top: 20px">
          <a
            href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Ташкент</a
          ><a
            href="https://yandex.com/maps/10335/tashkent/house/YkAYdQdhSkcEQFprfX9zcH5qZA==/?ll=69.301593%2C41.321279&utm_medium=mapframe&utm_source=maps&z=17.12"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >iCAN IT GROUP</a
          ><iframe
            src="https://yandex.com/map-widget/v1/?ll=69.301593%2C41.321279&mode=routes&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTQwNTM0EjdPyrt6YmVraXN0b24sIFRvc2hrZW50LCBNdXN0YXFpbGxpayBzaG9oIGtvyrtjaGFzaSwgNzlBIgoNR5qKQhX_SCVC&z=17.12"
            width="100%"
            height="450"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
            class="yandexMap"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="right" style="transition: 0.5s" v-motion-slide-once-visible-bottom>
      <div class="text">
        <h1>Partnership with us</h1>
        <p>
          Now, you must meet your partner face-to-face to conclude the contract no, you can easily
          conclude contracts remotely
        </p>
        <router-link to="/en/contact">
          <button class="addUser">
            <i style="margin-right: 10px" class="fa-solid fa-user-plus"></i>
            <span>Become a partner</span>
          </button>
        </router-link>
      </div>
      <div class="img">
        <img src="../../assets/images/macBook2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.yandexMap {
  border-radius: 40px;
  border: 1px solid #c2c2c3;
  filter: grayscale(30%) sepia(15%) hue-rotate(185deg) brightness(97%);
}
.maps {
  margin-top: 100px;
  font-family: 'TT Firs Neue';
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}
.about {
  padding: 60px 0;
  width: 500px;
  position: relative;
}
.about .absaluteBox {
  position: absolute;
  top: 2%;
  right: 8%;
  transform: rotate(10deg);
  background: #fff;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 4px 8px 10px 0px #606060;
}
.about h1 {
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  gap: 10px;
}
.left {
  width: 100%;
  /* height: 800px; */
  background: #f7f8fa;
  border-radius: 30px;
  padding: 40px 30px;
}

.left p {
  font-size: 18px;
  font-weight: 400;
}
.left .map {
  width: 100%;
  height: 400px;
}
.left .mapImg {
  position: relative;
}
.mapImg .location {
  position: absolute;
  top: 50%;
  right: 50%;
}
.left button {
  margin: 30px 0px;
  padding: 15px 20px;
  border-radius: 15px;
  color: #fff;
  border: 1px solid #18b4ca;
  background: #18b4ca;
  transition: 0.5s;
}
.left button:active {
  transform: scale(1.2);
}

.left .contacts {
  display: flex;
  align-items: center;
  gap: 50px;
  cursor: pointer;
  font-size: 25px;
}
.right {
  /* height: 800px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-image: url(../../assets/images/heroImg.svg);
  background-size: cover;
  border-radius: 30px;
  background-repeat: no-repeat;
  padding: 40px 30px;
}
.right .text h1 {
  padding: 60px 0px;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
}
.text p {
  font-size: 18px;
  color: #f0f0f0;
  font-weight: 400;
}
.right button {
  margin: 30px 0px;
  padding: 15px 20px;
  border-radius: 15px;
  color: #fff;
  border: 1px solid rgba(164, 220, 220, 255);
  background: rgba(114, 201, 216, 255);
  transition: 0.5s;
}
.right button:active {
  transform: scale(1.2);
}
.right .img {
  position: relative;
  width: 100%;
  height: 450px;
}

.img img {
  position: absolute;
  bottom: 0%;
  right: 10px;
  width: 500px;
  /* top: 1%; */
}

@media screen and (min-width: 300px) {
  .about {
    width: 100%;
  }
  .maps {
    padding: 20px 30px;
    grid-template-columns: 1fr;
  }
  .right button,
  .left button {
    width: 100%;
  }
}

@media screen and (min-width: 576px) {
  .about {
    width: 400px;
  }

  .left h1,
  .right .text h1 {
    font-size: 30px;
  }
}

@media screen and (min-width: 876px) {
  .about {
    width: 350px;
  }
  .maps {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 1350px) {
  .maps {
    padding: 20px 150px;
  }
}
@media screen and (min-width: 1200px) {
  .right button,
  .left button {
    width: 50%;
  }
}
</style>
