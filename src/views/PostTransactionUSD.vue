<template>
<div id="postTransTab">
  <ProgressBar :barStatus="5"/>
  <div class="container">
    <div class="box-selection">
      <h1>Your Order is Pending</h1>
      <p>Please follow the wire instructions below to complete your order. You have been emailed a copy of these instructions also.  </p>
      <p>Please allow 3-5 business days for us to confirm your wire and respond to you with a confirmation email.</p>
      <p><b>IMPORTANT NOTE:</b>  If your wire is not received within 3 business days, your order will expire.  </p>
    </div>
    
    <div class="box-selection box-selection-large">
      <div class="bar-settings">
        <h1>Wire Instructions</h1>
      </div>
      <div class="wire-container">
        <p><u>Beneficiary Name (Recipient): &emsp; <b>Green United, LLC</b></u> <br/> (<b>IMPORTANT:</b>  If the beneficiary name is incorrect, our bank cannot assign the funds to our account.) </p>
        <p><u>Routing Number:&emsp; <b>124300327</b></u></p>
        <p><u>Account Number: &emsp; <b>41-138405</b></u></p>
        <p><u>Name of Bank: &emsp; <b>Central Bank</b></u></p>
        <p><u>Message: &emsp; Order ID: 5b4e65578040ab2f12fb4073</u> <br/> (<b>IMPORTANT!:</b> Please only include the order ID in the bank deposit message in order to credit your account. And do not mention Bitcoin, cryptocurrency or other messages that your institution may be confused by as it can prevent the wire from completing.)</p>
        <p><u>Bank Address: &emsp; 202 South Main Street Springville, Utah 84663 USA</u></p>
        <p><u>SWIFT: &emsp; ZFNBUS55</u></p>
        <p><u>Fee: &emsp; Choose "PAY ALL FEES" when you wire payment</u></p>
        <p><u>Remarks:</u></p>
        <p><b>1. Email your transfer proof to support@share.green. Include the sender name, payment amount and transfer proof or SWIFT message.</b></p>
        <p><b>2. Please use a separate bank transfer for each order. We cannot apply payment to more than one order from the same bank transfer. This is important to ensure that your order is completed in a timely manner.</b></p>
      </div>
    </div>
  </div>
</div>
</template>



<script>
import ProgressBar from "../components/ProgressBar";
export default {
  name: "TransactionUSD",
  components: {
    ProgressBar
  },
  props: {
  }
}
</script>



<style scoped lang="scss">
  #postTransTab {
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
    height: 90%;
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

  .bar-settings {
    border-bottom: #bdbdbd solid;
    border-width: 1px;
    width: 100%;
    height: 50px;
  }

  .box-selection {
    width: 1100px;
    height: 200px;
    background: #FFFFFF;
    border-radius: 4px;
    margin: 10px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }

  .box-selection-large {
    height: 650px;
  }

  .wire-container {
    margin: 20px;
  }

  @media only screen and (max-width: 1100px) {
    .box-selection {
      width: 550px;
    }
    .box-selection-large {
      height: 580px;
    }
    p, a, input {
      font-size: 14px;
    }
    h1 {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 720px) {
    .bar-settings {
      height: 35px;
    }
  }

  @media only screen and (max-width: 425px) {
    .box-selection {
      width: 300px;
    }
    p, a, input {
      font-size: 10px;
    }
    h1 {
      font-size: 16px;
    }
  }

  @media only screen and (max-height: 500px) {
    .currency-button {
      padding: 10px 28px;
      border-radius: 4px;
    }
    .currency-container {
      margin: 18px 0px;
    }
  }

</style>
