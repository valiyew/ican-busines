<template>
  <div class="modal">
    <div class="modal-content container">
      <button @click="$emit('closeModal')" class="back"><i class="fa-solid fa-x"></i></button>
      <div class="about">
        <h1>
          <span>Leave your contact and we will contact you:</span>
          <img class="check" src="../../assets/images/check.svg" alt="" />
        </h1>
        <div class="absaluteBox">It’s more convenient to work with us</div>
      </div>

      <div class="call">
        <form action="" @submit.prevent="handleChange">
          <div class="inputs">
            <div>
              <label for="fullname">Full Name</label>
              <input
                required
                v-model="siteData.fullname"
                class="input form-control"
                type="text"
                id="fullname"
                placeholder="Enter fullname"
              />
            </div>
            <div>
              <label for="phoneNumber">Phone Number</label>
              <input
                required
                v-model="siteData.phone_number"
                class="input form-control"
                type="text"
                id="phoneNumber"
                placeholder="Enter phone"
              />
            </div>
            <div>
              <label for="message">Message <span>(optional)</span></label>
              <input
                v-model="siteData.message"
                class="input form-control"
                type="text"
                id="message"
                placeholder="Enter message"
              />
            </div>
          </div>
          <button type="submit"><i class="fa-solid fa-phone"></i> Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const siteData = ref({
  full_name: '',
  phone_number: '',
  message: ''
})
const baseURL = 'https://backend.icangroup.uz/api/application'
const toast = useToast()

const handleChange = async () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const { data } = await axios.post(baseURL, siteData.value)
    toast.success(data.message)
    siteData.value.full_name = ''
    siteData.value.message = ''
    siteData.value.phone_number = ''
  } catch (error) {
    toast.error('You sent an incorrect request, please try again')
  }
}
</script>
<style scoped>
.modal {
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
  padding: 20px 30px;
  position: relative;
  border-radius: 25px;
}
.modal-content .about {
  padding: 50px 0;
  /* width: 100%; */
  position: relative;
}
.about h1 {
  font-family: 'TT Firs Neue';
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 30px;
  font-weight: 500;
}

.about h1 .check {
  z-index: 1;
  position: absolute;
  right: 8%;
  top: 35%;
}
.modal-content .absaluteBox {
  font-family: 'TT Firs Neue';
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(10deg);
  background: #fff;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 500;
  box-shadow: 4px 8px 10px 0px #606060;
}
.call .inputs div {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
.call h1 {
  font-family: 'TT Firs Neue';

  margin-top: 20px;
  color: #172d33;
  font-size: 20px;
}
.inputs label {
  font-size: 20px;
}
.inputs input {
  font-family: 'TT Firs Neue';
  font-size: 16px;
  font-weight: 400;
  padding: 15px;
}
.call button {
  font-family: 'TT Firs Neue';
  margin-top: 25px;
  padding: 15px 20px;
  color: #fff;
  background: #18b4ca;
  border-radius: 15px;
  border: none;
}

@media screen and (min-width: 300px) {
  .modal {
    padding: 20px 30px;
  }
  .modal-content {
    margin-top: 50px;
    width: 100%;
    position: relative;
  }
  .modal-content .about {
    width: 100%;
  }
  .back {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px 10px 0px 0px;
    background: none;
    font-size: 25px;
    border: none;
  }

  .modal-content .about {
    padding-right: 70px;
  }
  .about h1 {
    font-size: 20px;
  }

  .about h1 .check {
    top: 40%;
  }
}
@media screen and (min-width: 576px) {
  .modal-content {
    margin-top: 10px;
  }
  .modal-content .about {
    margin-top: 20px;
    width: 500px;
  }
  .about h1 {
    font-size: 35px;
  }
  .about h1 .check {
    top: 35%;
  }
}
@media screen and (min-width: 776px) {
  .modal-content {
    width: 80%;
  }
}
@media screen and (min-width: 992px) {
  .modal-content {
    width: 65%;
  }
}
@media screen and (min-width: 1100px) {
  .modal-content {
    width: 45%;
  }
}
</style>
