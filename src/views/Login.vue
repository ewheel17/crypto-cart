<template>
<div id="loginTab">
  <ProgressBar :barStatus="2"/>
  <div class="container">
    <div class="box-selection">
      <div class="bar-settings">
        <h1>Login</h1>
      </div>
      <div class="form-container">
        <form class="form-settings">
          <input class="input-field" type="email" name="email" placeholder="Email"><br>
          <input class="input-field" type="password" name="password1" placeholder="Password"><br>
        </form>
      </div>
      <div class="login-box">
        <router-link class="link-settings" to="/register">Don't have an Account? Register.</router-link>
        <router-link class="button-settings" to="/terms-and-conditions">Login</router-link>
      </div>
    </div>
  </div>
</div>
</template>



<script>
import ProgressBar from "../components/ProgressBar";
export default {
  name: "Login",
  components: {
    ProgressBar
  },
  props: {
  }
}
</script>



<style scoped lang="scss">
  #loginTab {
    height: 100%;
  }

  .button-settings {
    height: 30px;
    width: 50px;
    background: #3399FF;
    padding: 10px 20px;
    border-radius: 4px;
    color:white;
    text-decoration: none;
  }

  #footer {
    display: flex;
    justify-content: flex-start;
    margin-top: 5%;
    margin-left: 5%;
    height: 10%;
  }

  .testing1 {
    float: right;
    margin-right: 50px;
  }

  .container {
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    height: 30%;
  }

  .form-container {
    margin-top: 20px;
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

  .bar-settings {
    width: 100%;
    height: 50px;
  }

  .box-selection {
    width: 600px;
    height: 300px;
    background: #FFFFFF;
    border-radius: 4px;
    margin: 2%;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }

  .link-settings {
    color: #3399FF;
    margin-right: 40px;
  }

  .login-box {
    margin-top: 20px;
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

  @media only screen and (max-width: 800px) {
    #footer {
      margin-top: 50px;
    }
  }

  @media only screen and (max-width: 580px) {
    #footer {
      margin-right: 3%;
    }
    .box-selection {
      width: 375px;
      height: 250px;
    }
    .input-field {
      padding: 8px;
      margin: 8px 0px;
    }
  }

  @media only screen and (max-width: 380px) {
    .box-selection {
      width: 290px;
      height: 215px;
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

  @media only screen and (max-height: 580px) {
    #footer {
      margin-top: 70px;
    }
  }

  @media only screen and (max-height: 500px) {
    #footer {
      margin-top: 95px;
    }
  }
</style>

