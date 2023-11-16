<template>
  <h1 style="margin-top: 80px; transition: 2s" v-motion-slide-visible-top>Наши партнеры</h1>

  <div class="wrapper">
    <div class="slider" style="margin-top: 50px">
      <div v-for="(item, index) in partnerItems" :key="index" class="slide-track">
        <div class="slide">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partnerItems: [
        { image: '/src/assets/images/frame11.png' },
        { image: '/src/assets/images/frame12.png' },
        { image: '/src/assets/images/frame13.png' },
        { image: '/src/assets/images/frame14.png' },
        { image: '/src/assets/images/frame15.png' },
        { image: '/src/assets/images/frame16.png' },
        { image: '/src/assets/images/frame17.png' },
        { image: '/src/assets/images/frame18.png' },
        { image: '/src/assets/images/playmobile.png' },
        { image: '/src/assets/images/frame11.png' },
        { image: '/src/assets/images/frame12.png' },
        { image: '/src/assets/images/frame13.png' },
        { image: '/src/assets/images/frame14.png' },
        { image: '/src/assets/images/frame15.png' },
        { image: '/src/assets/images/frame16.png' },
        { image: '/src/assets/images/frame17.png' },
        { image: '/src/assets/images/frame18.png' },
        { image: '/src/assets/images/playmobile.png' }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 35px;
  font-weight: 600;
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
