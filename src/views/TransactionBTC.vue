<template>
<div id="selectionTab">
  <ProgressBar :barStatus="5"/>
  <div class="container">
    <div class="box-selection">
      <div class="bar-settings">
        <h1>Order Summary</h1>
      </div>
      <div class="container2 bar-settings small-unit">
        <div class="spacing30">
          <p>Box Units:</p>
        </div>
        <div class="spacing30">
          <p>{{ desiredBoxes }}</p>
        </div>
        <div class="spacing30">
          <p>${{ boxTotal }}</p>
        </div>
      </div>
      <div class="container2 bar-settings small-unit">
        <div class="spacing30">
          <p>Box Pro Units:</p>
        </div>
        <div class="spacing30">
          <p>{{ desiredProBoxes }}</p>
        </div>
        <div class="spacing30">
          <p>${{ boxProTotal }}</p>
        </div>
      </div>
      <div class="container2 bar-settings bar-none small-unit">
        <div class="spacing40">
          <p>Total:</p>
        </div>
        <div class="spacing40">
          <p>${{ sumTotal }}</p>
        </div>
      </div>
    </div>
    <div class="box-selection">
      <div class="bar-settings">
        <h1>Send Payment</h1>
      </div>
      <p>Click the QR Code below to copy the wallet address and correct BTC amount. Once we have received your payment, we will show your order confirmation on the screen.</p>
      <div class="container2" style="margin:0px;">
          <div>
              <form>
                <input class="input-field" type="email" name="btcamount" placeholder="BTC Amount" disabled><br>
                <input class="input-field" type="password" name="wallet" placeholder="35tnxRwZzgvDwRNn4SQiDqqRbTn83Rqf3h" disabled><br>
              </form>
          </div>
          <!-- <div>
              <img src="../assets/barcode.png" alt="Wallet Barcode">
          </div> -->
      </div>
    </div>
  </div>
</div>
</template>



<script>
import ProgressBar from "../components/ProgressBar";
export default {
  name: "TransactionBTC",
  components: {
    ProgressBar
  },
    data: function () {
    return {
      desiredBoxes: sessionStorage.getItem("desiredBoxes"),
      desiredProBoxes: sessionStorage.getItem("desiredProBoxes")
    }
  },
  computed: {
    boxTotal: function() {
      this.desiredBoxes = Math.round(this.desiredBoxes);
      sessionStorage.setItem("desiredBoxes", this.desiredBoxes);
      let newValue = this.desiredBoxes * 3000;
      return newValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    boxProTotal: function() {
      this.desiredProBoxes = Math.round(this.desiredProBoxes);
      sessionStorage.setItem("desiredProBoxes", this.desiredProBoxes);
      let newValue = this.desiredProBoxes * 1200000;
      return newValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    sumTotal: function() {
      let newValue = (this.desiredBoxes * 3000) + (this.desiredProBoxes * 1200000);
      return newValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>



<style scoped lang="scss">
  #selectionTab {
    height: 100%;
  }

  #footer {
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
    height: 10%;

    .button-next {
      height: 30px;
      width: 50px;
      background: #3399FF;
      padding: 10px 20px;
      border-radius: 4px;
      color:white;
    }
  }
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5px;
    height: 60%;
  }

  .container2 {
    display: flex;
    justify-content: space-around;
    padding-bottom: 5px;
    height: 70%;
    width: 100%;
    margin: 0px 10%;
  }

  .form-container {
    margin-top: 10px;
  }

  .form-settings {
    width: 100%;
  }

  .input-field {
    width:500px;
    background-color: #F2F2F2;
    border-radius: 4px;
    height: 15px; 
    padding: 12px;
    margin: 5px 0px;
    border: none;
    float:left;
  }

  .desired-units {
    height: 25px;
    width: 45px;
    background-color: #F2F2F2;
    border-radius: 4px;
  }

  .spacing30 {
    width: 30%;
  }

  .spacing40 {
    width: 30%;
  }

  .bar-settings {
    border-bottom: #bdbdbd solid;
    border-width: 1px;
    width: 100%;
    height: 50px;
  }

  .bar-none {
    border: none;
  }

  .small-unit {
    width: 80%;
    height: 50px;
    padding-top: 10px;
  }

  .box-selection {
    width: 800px;
    height: 300px;
    background: #FFFFFF;
    border-radius: 4px;
    margin: 10px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }

  .box-selection-small {
    height: 200px;
  }

  @media only screen and (max-width: 1100px) {
    .box-selection {
      width: 600px;
      height: 300px;
    }
    .box-selection-small {
      height: 150px;
    }
    p, a, input {
      font-size: 14px;
    }
    h1 {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 610px) {
    .box-selection {
      width: 500px;
    }
    .bar-settings {
      height: 35px;
    }
    .input-field {
      width: 300px;
    }
  }

  @media only screen and (max-width: 580px) {
    .box-selection {
      width: 350px;
      height: 210px;
    }
    .box-selection-small {
      height: 160px;
    }
    .small-unit {
      height: 40px;
      padding-top: 20px;
    }
  }

  @media only screen and (max-width: 425px) {
    .box-selection {
      width: 290px;
      height: 180px;
    }
    .box-selection-small {
      height: 130px;
    }
    .small-unit {
      height: 20px;
      padding-top: 5px;
    }
    .desired-units {
      height: 13px;
      width: 30px;
    }
    .input-field {
      width: 240px;
      height: 5px; 
      padding: 9px;
    }
    p, a, input {
      font-size: 10px;
    }
    h1 {
      font-size: 16px;
    }
  }

  @media only screen and (max-height: 500px) {
    .box-selection-small {
      height: 100px;
    }
    .currency-button {
      padding: 10px 28px;
      border-radius: 4px;
    }
    .currency-container {
      margin: 18px 0px;
    }
  }

</style>
