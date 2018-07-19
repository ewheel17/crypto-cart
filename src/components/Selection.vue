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
          <p>$3000.00</p>
        </div>
      </div>
      <div class="container2 bar-settings small-unit">
        <div>
          <p>Desired Units:</p>
        </div>
        <div>
          <p class="desired-units">2</p>
        </div>
      </div>
      <div class="container2 bar-settings small-unit">
        <div>
          <p>Total:</p>
        </div>
        <div>
          <p>$6000.00</p>
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
          <p>$3000.00</p>
        </div>
      </div>
      <div class="container2 bar-settings small-unit">
        <div>
          <p>Desired Units:</p>
        </div>
        <div>
          <p class="desired-units">0</p>
        </div>
      </div>
      <div class="container2 bar-settings small-unit">
        <div>
          <p>Total:</p>
        </div>
        <div>
          <p>$6000.00</p>
        </div>
      </div>
    </div>
  </div>

  <div id="footer">
    <div>
      <a class="button-next">Next</a>
    </div>
  </div>
</div>
</template>



<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "Selection",
  components: {
    ProgressBar
  },
  props: {
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
    justify-content: center;
    padding-bottom: 5px;
    height: 60%;
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
  }

  .bar-settings {
    border-bottom: #bdbdbd solid;
    border-width: 1px;
    width: 100%;
    height: 50px;
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
