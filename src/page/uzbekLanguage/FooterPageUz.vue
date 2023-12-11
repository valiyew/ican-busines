<template>
  <ul class="footer">
    <div>
      <p>Manzil</p>
      <li>Sh.Toshkent, K.Shahrisabz 16A</li>
    </div>
    <div>
      <p>Tel raqam:</p>
      <li>+998 93 982 50 01</li>
    </div>
    <div>
      <p>Elektron pochta</p>
      <li>info@icangroup.uz</li>
    </div>
    <div>
      <p>Ijtimoiy tarmoq</p>
      <div class="contacts">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
    </div>
  </ul>
  <hr />

  <div class="muallif">
    <p>2023 Barcha huquqlar himoyalangan.</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  margin-top: 50px;
  display: grid;
}
.footer p {
  font-family: 'TT Firs Neue';
  font-size: 14px;
  color: #5a6161;
  font-weight: 500;
}
.footer li {
  font-family: 'TT Firs Neue';
  
  list-style: none;
  font-size: 18px;
  font-weight: 500;
}
.footer .contacts {
  display: flex;
  align-items: center;
  gap: 50px;
  cursor: pointer;
}

.muallif {
  font-family: 'TT Firs Neue';
  
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (min-width: 300px) {
  .footer {
    grid-template-columns: 4fr 1fr;
  }
  .footer p {
    margin: 0;
    font-size: 14px;
  }
  .footer li {
    margin-bottom: 15px;
    font-size: 12px;
  }
  .footer,
  .muallif {
    flex-direction: column;
    padding: 20px 30px;
  }
  .footer .contacts {
    gap: 20px;
    margin-top: 5px;
  }

  .muallif p {
    font-size: 14px;
  }
}

@media screen and (min-width: 776px) {
  .footer .contacts {
    gap: 40px;
  }

  .footer p {
    margin: 0;
    font-size: 14px;
  }
  .footer li {
    margin-bottom: 15px;
    font-size: 16px;
  }
  .muallif {
    flex-direction: row;
    
  }
}

@media screen and (min-width: 1000px) {
  .footer,
  .muallif {
    padding: 20px 150px;
  }
  .footer .contacts {
    gap: 50px;
  }
}

@media screen and (min-width: 1200px) {
  .footer {
    grid-template-columns: 2fr 1.7fr 1.7fr 1fr;
  }
}
</style>
