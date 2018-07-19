<template>
<div id="createAccountTab">
  <ProgressBar :barStatus="2"/>
  <div class="container">
    <div class="box-selection">
      <div class="bar-settings">
        <h1>Create Account</h1>
      </div>
      <div class="form-container">
        <form class="form-settings">
          <input class="input-field" type="text" name="firstname" placeholder="First Name"><br>
          <input class="input-field" type="text" name="lastname" placeholder="Last Name"><br>
          <input class="input-field" type="email" name="email" placeholder="Email"><br>
          <input class="input-field" type="password" name="password1" placeholder="Password"><br>
          <input class="input-field" type="password" name="password2" placeholder="Confirm Password"><br>
          <input class="input-field" type="text" name="phone" placeholder="Phone Number"><br>
        </form>
      </div>
      <div class="login-box">
        <a class="link-settings" href="">Already have an account? Login.</a>
        <a class="button-settings">Login</a>
      </div>
    </div>
  </div>

  <div id="footer">
    <div>
      <a class="button-settings">Next</a>
    </div>
  </div>
</div>
</template>



<script>
import ProgressBar from "./ProgressBar";
export default {
  name: "CreateAccount",
  components: {
    ProgressBar
  },
  props: {
  }
}
</script>



<style scoped lang="scss">
  #createAccountTab {
    height: 100%;
  }

  .button-settings {
    height: 30px;
    width: 50px;
    background: #3399FF;
    padding: 10px 20px;
    border-radius: 4px;
    color:white;
  }

  #footer {
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
    height: 10%;
  }
  .container {
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    height: 60%;
  }

  .form-container {
    margin-top: 20px;
  }

  .bar-settings {
    border-bottom: #bdbdbd solid;
    border-width: 1px;
    width: 100%;
    height: 50px;
  }

  .box-selection {
    width: 600px;
    height: 600px;
    background: #FFFFFF;
    border-radius: 4px;
    margin: 2%;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }

  .form-settings {
    width: 100%;
  }

  .input-field {
    width:80%;
    background-color: #F2F2F2;
    border-radius: 4px;
    height: 15px; 
    padding: 12px;
    margin: 15px 0px;
    border: none;
  }

  .link-settings {
    color: #3399FF;
    margin-right: 40px;
  }

  .login-box {
    margin-top: 20px;
  }

  @media only screen and (max-width: 1300px) {
  }

  @media only screen and (max-width: 1100px) {
    p, a, input {
      font-size: 14px;
    }
    h1 {
      font-size: 18px;
    }
    .bar-settings {
      height: 40px;
    }
  }

  @media only screen and (max-width: 580px) {
    .box-selection {
      width: 375px;
      height: 375px;
    }
    .input-field {
      padding: 8px;
      margin: 8px 0px;
    }
  }

  @media only screen and (max-width: 380px) {
    .box-selection {
      width: 290px;
      height: 320px;
    }
    .input-field {
      padding: 6px;
      margin: 6px 0px;
    }
    p, a, input {
      font-size: 10px;
    }
    h1 {
      font-size: 16px;
    }
  }
</style>

