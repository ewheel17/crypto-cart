<template>
<div id="selectionTab">
  <ProgressBar :barStatus="1"/>
  <div class="container">
    <div class="box-selection">
      <div class="bar-settings">
        <h1>Box</h1>
      </div>
      <div class="container2 bar-settings small-unit">
        <div>
          <p>Price Per Unit:</p>
        </div>
        <div>
          <p>$3000</p>
        </div>
      </div>
      <div class="container2 bar-settings small-unit">
        <div>
          <p>Desired Units:</p>
        </div>
        <div>
          <input class="desired-units" type="text" name="box-units" v-model="desiredBoxes">
        </div>
      </div>
      <div class="container2 bar-settings bar-none small-unit">
        <div>
          <p>Total:</p>
        </div>
        <div>
          <p>${{ boxTotal }}</p>
        </div>
      </div>
    </div>
    <div class="box-selection">
      <div class="bar-settings">
        <h1>Box Pro</h1>
      </div>
      <div class="container2 bar-settings small-unit">
        <div>
          <p>Price Per Unit:</p>
        </div>
        <div>
          <p>$1,200,000</p>
        </div>
      </div>
      <div class="container2 bar-settings small-unit">
        <div>
          <p>Desired Units:</p>
        </div>
        <div>
          <input class="desired-units" type="text" name="boxpro-units" v-model="desiredProBoxes">
        </div>
      </div>
      <div class="container2 bar-settings bar-none small-unit">
        <div>
          <p>Total:</p>
        </div>
        <div>
          <p>${{ boxProTotal }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="currency-container">
    <router-link class="currency-button" to="/register">Continue</router-link>
  </div>
</div>
</template>



<script>
import ProgressBar from "../components/ProgressBar";
import CreateAccount from "./CreateAccount";
export default {
  name: "Selection",
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
    }
  }
}
</script>



<style scoped lang="scss">
  #selectionTab {
    height: 100%;
  }
  
  .container {
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    height: 40%;
  }

  .container2 {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    height: 70%;
    width: 100%;
    margin: 0px 10%;
  }

  .desired-units {
    height: 25px;
    width: 45px;
    background-color: #F2F2F2;
    border-radius: 4px;
    text-align: center;
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
    height: 100px;
    padding-top: 50px;
  }

  .box-selection {
    width: 500px;
    height: 600px;
    background: #FFFFFF;
    border-radius: 4px;
    margin: 2%;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }

  .currency-container {
    margin: 170px 0px;
  }

  .currency-button {
    height: 30px;
    width: 100px;
    background: #3399FF;
    padding: 15px 200px;
    border-radius: 4px;
    color:white;
    text-decoration: none;
    margin: 10px;
  }

  @media only screen and (max-width: 1300px) {

    .box-selection {
      width: 400px;
      height: 500px;
    }
    .small-unit {
      width: 80%;
      height: 70px;
      padding-top: 70px;
    }
  }

  @media only screen and (max-width: 1100px) {
    p, a, input {
      font-size: 14px;
    }
    h1 {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 580px) {
    .currency-container {
      margin: 30% 0px;
    }
    .currency-button {
      padding: 15px 120px;
    }
    .box-selection {
      width: 300px;
      height: 375px;
    }
    .small-unit {
      width: 80%;
      height: 40px;
      padding: 30px 0px;
    }
  }

  @media only screen and (max-width: 380px) {
    .box-selection {
      width: 180px;
      height: 250px;
    }
    .small-unit {
      width: 80%;
      height: 20px;
      padding: 20px 0px;
    }
    p, a, input {
      font-size: 10px;
    }
    h1 {
      font-size: 16px;
    }
  }
</style>
