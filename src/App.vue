<template>
  <div id="app">
    <router-view></router-view>
    <!-- <CreateAccount/> -->
    <!-- <Login/> -->
    <!-- <TandC/> -->
    <!-- <Payment/> -->
    <!-- <TransactionBTC/> -->
    <!-- <TransactionUSD/> -->
    <!-- <PostTransactionUSD/> -->
    <!-- <junk/> -->
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar";
import Selection from "./views/Selection";
import CreateAccount from "./views/CreateAccount";
import Login from "./views/Login";
import TandC from "./views/TandC";
import Payment from "./views/Payment";
import PostTransactionUSD from "./views/PostTransactionUSD";
import TransactionUSD from "./views/TransactionUSD";
import TransactionBTC from "./views/TransactionBTC";
import junk from "./components/junk";

export default {
  name: "app",
  components: {
    ProgressBar,
    Selection,
    CreateAccount,
    Login,
    TandC,
    Payment,
    PostTransactionUSD,
    TransactionUSD,
    TransactionBTC,
    junk
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
