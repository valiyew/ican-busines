<template>
  <div class="hero">
    <Navbar />

    <div class="about">
      <div class="title">
        <div>
          <h1>Yuqori darajada xavfsiz va ishonchli ombor tizimi</h1>
          <p>
            Ushbu maqola sizga eng yaxshi omborlarni boshqarish tizimini (WMS) va boshqa
            operatsiyalarni boshqarish tizimlarini tezda taqqoslash va baholashga yordam beradi.
          </p>
        </div>
        <div class="buttons">
          <router-link to="/contact">
            <button class="call">
              <i style="margin-right: 10px" class="fa-solid fa-phone"></i>
              <span>Biz bilan bog'lanish</span>
            </button>
          </router-link>
          <button class="addUser">
            <i style="margin-right: 0px" class="fa-solid fa-user-plus"></i>
            <span>Partenaga aylaning </span>
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

<script>
import { Navbar } from '../../components/NavbarUz/index'

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.hero {
  height: 100vh;
  width: 100%;
  background-image: url(../../assets/images/heroImg.svg);
  background-size: cover;
  background-repeat: no-repeat;
}

.about {
  margin-top: 9%;
  display: flex;
  gap: 150px;
  align-items: center;
  justify-content: space-around;
  padding-left: 10%;
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
  align-items: center;
  gap: 30px;
  margin-bottom: 50px;
}

.call {
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
  border: 1px solid #e5e5e5;
  background: none;
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
  width: 100%;
  height: 617px;
  background-image: url(../../assets//images/aboutImg.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.sponsors {
  width: 100%;
}
@media screen and (max-width: 1200px) {
  .about .img {
    height: 500px;
  }
  .hero {
    height: 90vh;
  }

  .about {
    margin-top: 40px;
    justify-content: center;
    padding-left: 35px;
  }

  .about .title {
    width: 100%;
    padding-right: 30px;
  }

  .language select {
    background: none;
    color: #fff;
    border: 1px solid #fff;
    padding: 5px;
    border-radius: 20px;
  }
  .language span {
    display: none;
  }
  .buttons {
    margin: 0;
  }

  .buttons button {
    padding: 10px 20px;
    font-size: 14px;
  }

  .title h1 {
    font-size: 32px;
    line-height: 32px;
    /* width: 100%; */
  }
  .title p {
    margin-top: 20px;
    font-size: 14px;
  }
}

@media screen and (max-width: 890px) {
  .about .img {
    height: 350px;
  }
  .hero {
    height: 128vh;
  }

  .about {
    margin-top: 40px;
    justify-content: center;
    /* text-align: center; */
    padding-left: 35px;
    flex-direction: column;
  }

  .about .title {
    width: 100%;
    padding-right: 30px;
  }

  .language select {
    background: none;
    color: #fff;
    border: 1px solid #fff;
    padding: 5px;
    border-radius: 20px;
  }
  .language span {
    display: none;
  }

  .buttons {
    flex-direction: column;
  }
  .buttons button {
    width: 100%;
    font-size: 18px;
    padding: 15px 30px;
  }

  .buttons {
    margin: 0;
  }

  .title h1 {
    font-size: 32px;
    line-height: 32px;
    /* width: 100%; */
  }
  .title p {
    margin-top: 20px;
    font-size: 14px;
  }
}

@media screen and (min-width: 300px) {
  .about {
    gap: 38px;
  }
}

@media screen and (min-width: 576px) {
  .about {
    gap: 68px;
  }
}

@media screen and (min-width: 776px) {
  .about {
    gap: 38px;
  }
}

@media screen and (min-width: 890px) {
  .about .img {
    height: 643px;
  }
}

@media screen and (min-width: 992px) {
  .about {
    gap: 58px;
  }
  .about .img {
    height: 643px;
  }
}

@media screen and (min-width: 1100px) {
  .about {
    gap: 68px;
  }
  .about .img {
    height: 643px;
  }
}

@media screen and (min-width: 1600px) {
  .about {
    gap: 100px;
  }
  .about .img {
    height: 618px;
  }
}
</style>
