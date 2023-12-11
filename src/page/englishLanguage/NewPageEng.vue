<template>
  <div id="news" class="containerr">
    <Transition>
      <div v-if="isModalOpened">
        <AboutEng @closeModal="closeModal" />
      </div>
    </Transition>

    <div class="news" style="margin-top: 100px">
      <h1 style="transition: 0.5s">News</h1>
      <div style="display: flex; align-items: center; gap: 15px; transition: 0.5s">
        <button
          style="
            background: #f5f5f5;
            font-size: 18px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          "
          @click="prevSlide"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button
          style="
            background: #f5f5f5;
            font-size: 18px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          "
          @click="nextSlide"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <div class="row">
      <div class="owl-carousel owl-theme" style="margin-top: 50px; transition: 0.5s">
        <div class="item" @click="openModal">
          <div class="card">
            <div class="card-body">
              <div class="desktopText">
                <div>
                  <div>
                    <h3>A complete guide to working from home with our platform</h3>
                    <p>September 17, 2023</p>
                  </div>
                  <button
                    @click="openModal"
                    style="
                      background: #fff;
                      width: 50px;
                      height: 50px;
                      border-radius: 50%;
                      font-size: 14px;
                      font-weight: 500;
                      margin-top: 80px;
                    "
                  >
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <img src="../../assets/images/girlImg.png" alt="" height="200px" />
              <div class="mobileText">
                <h3>A complete guide to working from home with our platform</h3>
                <p>September 17, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item" @click="openModal">
          <div class="card">
            <div class="card-body">
              <div class="desktopText">
                <div>
                  <div>
                    <h3>A complete guide to working from home with our platform</h3>
                    <p>September 17, 2023</p>
                  </div>
                  <button
                    @click="openModal"
                    style="
                      background: #fff;
                      width: 50px;
                      height: 50px;
                      border-radius: 50%;
                      font-size: 14px;
                      font-weight: 500;
                      margin-top: 80px;
                    "
                  >
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <img src="../../assets/images/newPageImg.png" alt="" height="200px" />
              <div class="mobileText">
                <h3>A complete guide to working from home with our platform</h3>
                <p>September 17, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item" @click="openModal">
          <div class="card">
            <div class="card-body">
              <div class="desktopText">
                <div>
                  <div>
                    <h3>A complete guide to working from home with our platform</h3>
                    <p>September 17, 2023</p>
                  </div>
                  <button
                    @click="openModal"
                    style="
                      background: #fff;
                      width: 50px;
                      height: 50px;
                      border-radius: 50%;
                      font-size: 14px;
                      font-weight: 500;
                      margin-top: 80px;
                    "
                  >
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <img src="../../assets/images/girlImg.png" alt="" height="200px" />
              <div class="mobileText">
                <h3>A complete guide to working from home with our platform</h3>
                <p>September 17, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, Transition } from 'vue'
import { AboutEng } from '../../components/ModalEng'

export default {
  data() {
    return {
      isModalOpened: false
    }
  },
  methods: {
    openModal() {
      this.isModalOpened = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.isModalOpened = false
      document.body.style.overflow = 'auto'
    }
  },

  setup() {
    const owlCarousel = ref(null)
    onMounted(() => {
      // eslint-disable-next-line no-undef
      owlCarousel.value = $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          300: {
            items: 1
          },
          500: {
            items: 1.5
          },
          700: {
            items: 1
          },
          900: {
            items: 1
          },
          1000: {
            items: 1
          },
          1150: {
            items: 1
          },
          1200: {
            items: 1.5
          },
          1400: {
            items: 1.3
          },
          1500: {
            items: 2
          }
        }
      })
    })
    const nextSlide = () => {
      owlCarousel.value.trigger('next.owl.carousel')
    }
    const prevSlide = () => {
      owlCarousel.value.trigger('prev.owl.carousel')
    }
    return {
      nextSlide,
      prevSlide
    }
  },
  components: { Transition, AboutEng }
}
</script>
<style scoped>
.news {
  display: flex;
  align-items: center;
  gap: 20px;
}

.news h1 {
  font-size: 30px;
  font-weight: 600;
  font-family: 'TT Firs Neue';
}

.card {
  border-radius: 20px;
  background: #f7f8fa;
  border: none;
  padding: 5px;
}

.card h3 {
  font-size: 24px;
  font-weight: 500;
  font-family: 'TT Firs Neue';
  color: #172d33;
  margin-bottom: 15px;
}

.card p {
  font-size: 14px;
  font-weight: 400;
  color: #5a6161;
  font-family: 'TT Firs Neue';
}

.card .card-body {
  display: flex;
  gap: 30px;
}

.card-body .mobileText {
  display: none;
}

.card-body .desktopText {
  margin-top: 20px;
  display: none;
}

.card-body .desktopText {
  flex-direction: row;
}

@media screen and (min-width: 300px) {
  .containerr {
    padding: 20px 30px;
  }

  .card-body {
    /* display: flex; */
    flex-direction: column;
  }

  .card-body .mobileText {
    display: block;
    margin-top: 15px;
  }

  .mobileText h3 {
    font-size: 22px;
    font-weight: 500;
    font-family: 'TT Firs Neue';
    margin-bottom: 10px;
  }
}

@media screen and (min-width: 700px) {
  .card-body {
    flex-direction: row;
  }

  .card-body .mobileText {
    display: none;
  }

  .card-body .desktopText {
    display: block;
  }

  .desktopText h3 {
    font-size: 24px;
  }

  .card img {
    width: 100%;
  }
}

@media screen and (min-width: 1000px) {
  .containerr {
    padding: 20px 150px;
  }
}

@media screen and (min-width: 1500px) {
  .card img {
    width: 50%;
  }
}
</style>
