<template>
<div id="progressBar">
  <div class="container">
    <div :class="[barStatus > 0 ? 'active' : 'inactive']" class="single-circle"></div>
    <div :class="[barStatus > 1 ? 'active-bar' : 'inactive-bar']" class="single-bar"></div>
    <div :class="[barStatus > 1 ? 'active' : 'inactive']" class="single-circle"></div>
    <div :class="[barStatus > 2 ? 'active-bar' : 'inactive-bar']"  class="single-bar"></div>
    <div :class="[barStatus > 2 ? 'active' : 'inactive']"  class="single-circle"></div>
    <div :class="[barStatus > 3 ? 'active-bar' : 'inactive-bar']"  class="single-bar"></div>
    <div :class="[barStatus > 3 ? 'active' : 'inactive']"  class="single-circle"></div>
    <div :class="[barStatus > 4 ? 'active-bar' : 'inactive-bar']"  class="single-bar"></div>
    <div :class="[barStatus > 4 ? 'active' : 'inactive']"  class="single-circle"></div>
  </div>
  <div class="container">
    <div class=""><p>Selection</p></div>
    <div class="white-space1"></div>
    <div class=""><p>Account</p></div>
    <div class="white-space2"></div>
    <div class="alignTandC"><p>Terms and Conditions</p></div>
    <div class="white-space3"></div>
    <div class=""><p>Payment Method</p></div>
    <div class="white-space4"></div>
    <div class=""><p>Checkout</p></div>
  </div>
</div>
</template>



<script>
export default {
  name: "ProgressBar",
  props: {
    barStatus: Number
  }
}
</script>



<style scoped lang="scss">
#progressBar {
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.container {
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
}

.alignTandC {
  text-align: right;
}

.single-circle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.active {
  background-color: #6FCF97;
}

.inactive {
  background: #C4C4C4;
}

.single-bar {
  width: 200px;
  margin: 22px 5px 0px;
}

.active-bar {
  border-top: #6FCF97 solid;
}

.inactive-bar {
  border-top: #C4C4C4 solid;
}

.white-space1 {
  width: 180px;
}
.white-space2 {
  width: 140px;
}
.white-space3 {
  width: 120px;
}
.white-space4 {
  width: 140px;
}

.connector-line {
  width: 12%;
  padding-top: 5%;
}

@media only screen and (max-width: 1100px) {
  .single-circle {
    height: 40px;
    width: 40px;
  }
  .single-bar {
    width: 90px;
    margin: 20px 4px 0px;
    border-width: 3px;
  }

  .white-space1 {
    width: 80px;
  }
  .white-space2 {
    width: 50px;
  }
  .white-space3 {
    width: 40px;
  }
  .white-space4 {
    width: 50px;
  }

  p {
    font-size: 14px;
  }
}

@media only screen and (max-width: 650px) {
  .alignTandC {
    text-align: center;
  }
}

@media only screen and (max-width: 580px) {
  .alignTandC {
    text-align: right;
  }

  .single-circle {
    height: 25px;
    width: 25px;
  }
  .single-bar {
    width: 57px;
    margin: 12.5px 2px 0px;
    border-width: 1px;
  }

  .white-space1 {
    width: 50px;
  }
  .white-space2 {
    width: 35px;
  }
  .white-space3 {
    width: 25px;
  }
  .white-space4 {
    width: 35px;
  }

  p {
    font-size: 8px;
  }
}

@media only screen and (max-width: 442px) {
  .alignTandC {
    text-align: center;
  }
}


@media only screen and (max-width: 380px) {
  .single-circle {
    height: 22px;
    width: 22px;
  }
  .single-bar {
    width: 50px;
    margin: 11px 1px 0px;
    border-width: .5px;
  }
}

</style>
