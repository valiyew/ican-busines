<template>
  <h1 style="margin-top: 80px; transition: 0.5s">Bizning hamkorlarimiz</h1>
  <h2>Bular respublika bo'yicha 1000 dan ortiq kredit tashkilotlaridir</h2>

  <div class="wrapper">
    <div class="slider" style="margin-top: 50px">
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame11.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame12.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame13.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame14.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame15.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame16.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame17.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame18.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/playmobile.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame11.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame12.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame13.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame14.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame15.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame16.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame17.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/frame18.png" alt="" />
        </div>
      </div>
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/playmobile.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  text-align: center;
  font-size: 35px;
  font-weight: 600;
  font-family: 'TT Firs Neue';
}
h2 {
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  font-family: 'TT Firs Neue';
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.slider {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  position: relative;
  width: 100%;
  animation: RunSlider 20s linear infinite;
}

.slider .slide-track .slide {
  width: 200px;
}

@keyframes RunSlider {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-200px * 9));
  }
}
</style>
