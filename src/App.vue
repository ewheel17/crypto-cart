<template>
  <div id="app">
    <CreateAccount/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ProgressBar from "./components/ProgressBar";
import Selection from "./components/Selection";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import TandC from "./components/TandC";
import Payment from "./components/Payment";
import PostTransaction from "./components/PostTransaction";

export default {
  name: "app",
  components: {
    HelloWorld,
    ProgressBar,
    Selection,
    CreateAccount,
    Login,
    TandC,
    Payment,
    PostTransaction
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  padding-top: 5%;
  background: #F2F2F2;
}

h1 {
  font-size: 22px;
  color: #4F4F4F;
}

p {
  font-size: 18px;
  color: #4F4F4F;
}

a, input {
  font-size: 18px;
}
</style>
