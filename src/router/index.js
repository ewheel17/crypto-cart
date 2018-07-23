import Vue from "vue";
import Router from "vue-router";
import Selection from "../views/Selection.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Login from "../views/Login";
import TandC from "../views/TandC.vue";
import Payment from "../views/Payment.vue";
import TransactionBTC from "../views/TransactionBTC.vue";
import TransactionUSD from "../views/TransactionUSD.vue";
import PostTransactionUSD from "../views/PostTransactionUSD.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "selection",
      component: Selection
    },
    {
      path: "/register",
      name: "register",
      component: CreateAccount
    //   beforeEnter: requireAuth
    },
    {
      path: "/login",
      name: "login",
      component: Login
    //   beforeEnter: requireAuth
    },
    {
      path: "/terms-and-conditions",
      name: "terms-and-conditions",
      component: TandC
    //   beforeEnter: requireAuth
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment
    //   beforeEnter: requireAuth
    },
    {
      path: "/btc",
      name: "btc",
      component: TransactionBTC
    //   beforeEnter: requirePermission
    },
    {
      path: "/usd",
      name: "usd",
      component: TransactionUSD,
    },
    {
      path: "/post-usd",
      name: "post-usd",
      component: PostTransactionUSD
    //   beforeEnter: requirePermission
    },
    {
      path: "*",
      component: PageNotFound,
    //   beforeEnter: requireAuth
    }
  ]
});
