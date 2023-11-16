<template>
  <h1 style="margin-top: 150px">Our partners</h1>
  <div class="partners">
    <img src="../../assets/images/frame11.png" alt="" />
    <img src="../../assets/images/frame12.png" alt="" />
    <img src="../../assets/images/frame13.png" alt="" />
    <img src="../../assets/images/frame14.png" alt="" />
    <img src="../../assets/images/frame15.png" alt="" />
    <img src="../../assets/images/frame16.png" alt="" />
    <img src="../../assets/images/frame17.png" alt="" />
    <img src="../../assets/images/frame18.png" alt="" />
    <img src="../../assets/images/playmobile.png" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #172d33;
  font-size: 40px;
  font-weight: 500;
}

@media screen and (min-width: 300px) {
  .partners {
    /* place-items: center;
    padding: 20px 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
    display: flex;
    gap: 30px;
    align-items: center;
    overflow-x: scroll;
  }

  .partners img {
    cursor: pointer;
  }

  h1 {
    margin-top: 20px;

    font-size: 26px;
  }

  .partnerImg {
    margin: 10px;
    width: 260px;
    height: 230px;
    border-radius: 15px;
  }
}

@media screen and (min-width: 576px) {
  .partners {
    gap: 0;
    overflow: hidden;
    place-items: center;
    padding: 20px 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  h1 {
    font-size: 26px;
  }

  .partnerImg {
    margin: 20px;
    width: 310px;
    height: 250px;
    border-radius: 15px;
  }
}

@media screen and (min-width: 776px) {
  .partners {
    place-items: center;
    padding: 20px 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  .partnerImg {
    margin: 25px;

    width: 350px;
    height: 260px;
  }
}
@media screen and (min-width: 992px) {
  .partners {
    place-items: center;
    padding: 20px 150px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  h1 {
    font-size: 40px;
    margin: 30px 0px 40px 0px;
  }
  .partnerImg {
    margin: 30px;

    width: 350px;
    height: 260px;
  }
}
</style>
