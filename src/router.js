import Vue from "vue";
import Router from "vue-router";
import Admin from "@/pages/Admin/Admin";
import Categories from "@/pages/Admin/Categories";
import Owners from "@/pages/Admin/Owners";
import Products from "@/pages/Admin/Products";
import UpdateProduct from "@/pages/Admin/UpdateProduct";
import Home from "@/pages/Home";
import ProductItem from "@/pages/ProductItem";
import Cart from "@/pages/Cart";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Profile from "@/pages/Profile";
import Reviews from "@/pages/Reviews";
import Placeorder from "@/pages/Placeorder";
import Payment from "@/pages/Payment";
import Orders from "@/pages/Orders";
import Addresses from "@/pages/Addresses";
import AddressAdd from "@/pages/AddressAdd";
import UpdateAddress from "@/pages/UpdateAddress";

import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      meta: { isLoggedIn: true },
    },
    {
      path: "/admin/products/:id",
      name: "UpdateProduct",
      component: UpdateProduct,
      meta: { isLoggedIn: true },
    },
    {
      path: "/categories",
      name: "Categories",
      component: Categories,
      meta: { isLoggedIn: true },
    },
    {
      path: "/owners",
      name: "Owners",
      component: Owners,
      meta: { isLoggedIn: true },
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
      meta: { isLoggedIn: true },
    },
    {
      path: "/products/:id",
      name: "ProductItem",
      component: ProductItem,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: { isLoggedIn: true },
    },
    {
      path: "/reviews/:id",
      name: "Reviews",
      component: Reviews,
      meta: { isLoggedIn: true },
    },
    {
      path: "/placeorder",
      name: "Placeorder",
      component: Placeorder,
      meta: { isLoggedIn: true },
    },
    {
      path: "/payment",
      name: "Payment",
      component: Payment,
      meta: { isLoggedIn: true },
    },
    {
      path: "/orders",
      name: "Orders",
      component: Orders,
      meta: { isLoggedIn: true },
    },
    {
      path: "/addresses",
      name: "Addresses",
      component: Addresses,
      meta: { isLoggedIn: true },
    },

    {
      path: "/addresses/add",
      name: "AddressAdd",
      component: AddressAdd,
      meta: { isLoggedIn: true },
    },
    {
      path: "/addresses/:id",
      name: "UpdateAddress",
      component: UpdateAddress,
      meta: { isLoggedIn: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  store.dispatch("auth/getCurrentUser").then(() => {
    const isAuthenticated = store.getters["auth/isAuthenticated"];

    //To see secret page
    if (to.meta.isLoggedIn) {
      if (isAuthenticated) {
        next();
      } else {
        next({ name: "Login" });
      }
      //To be unable to see login and register if we are logged in
    } else if (to.meta.isGuest) {
      if (isAuthenticated) {
        next({ name: "Home" });
      } else {
        next();
      }
    } else {
      next();
    }
  });
});

export default router;
