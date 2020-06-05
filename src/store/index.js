import Vue from "vue";
import Vuex from "vuex";

import products from "./modules/products";
import categories from "./modules/categories";
import owners from "./modules/owners";
import reviews from "./modules/reviews";
import auth from "./modules/auth";
import orders from "./modules/orders";
import addresses from "./modules/addresses";
import countries from "./modules/countries";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    categories,
    owners,
    reviews,
    auth,
    orders,
    addresses,
    countries,
  },
  state: {
    cart: [],
    cartLength: 0,
    shippingPrice: 0,
    shippingEstimatedDelivery: "",
  },
  getters: {
    getCartLength(state) {
      return state.cartLength;
    },
    getCart(state) {
      return state.cart;
    },
    getCartTotalPrice(state) {
      let total = 0;
      state.cart.map((product) => {
        total += product.price * product.quantity;
      });
      return total;
    },
    getCartTotalPriceWithShipping(state) {
      let total = 0;
      state.cart.map((product) => {
        total += product.price * product.quantity;
      });
      return total + state.shippingPrice;
    },
    getEstimatedDeliver(state) {
      return state.shippingEstimatedDelivery;
    },
  },
  actions: {
    addProductToCart({ state, commit }, product) {
      const cartProduct = state.cart.find((prod) => prod._id === product._id);

      if (!cartProduct) {
        commit("pushProductToCart", product);
      } else {
        commit("incrementProductQty", cartProduct);
      }

      commit("incrementCartLength");
    },
  },
  // Simple function to mutate the state
  mutations: {
    setItems(state, { resource, items }) {
      state[resource].items = items;
    },

    setItem(state, { resource, item }) {
      state[resource].item = item;
    },
    addItemToArray(state, { item, index, resource }) {
      Vue.set(state[resource].items, index, item);
    },
    pushProductToCart(state, product) {
      product.quantity = 1;
      state.cart.push(product);
    },

    incrementProductQty(state, product) {
      product.quantity++;
      let indexOfProduct = state.cart.indexOf(product);
      state.cart.splice(indexOfProduct, 1, product);
    },

    incrementCartLength(state) {
      state.cartLength = 0;
      if (state.cart.length > 0) {
        state.cart.map((product) => {
          state.cartLength += product.quantity;
        });
      }
    },
    changeQty(state, { product, qty }) {
      let cartProduct = state.cart.find((prod) => prod._id === product._id);
      cartProduct.quantity = qty;

      state.cartLength = 0;
      if (state.cart.length > 0) {
        state.cart.map((product) => {
          state.cartLength += product.quantity;
        });
      }

      let indexOfProduct = state.cart.indexOf(cartProduct);
      state.cart.splice(indexOfProduct, 1, cartProduct);
    },
    removeProduct(state, product) {
      state.cartLength -= product.quantity;
      let indexOfProduct = state.cart.indexOf(product);
      state.cart.splice(indexOfProduct, 1);
    },
    setShipping(state, { price, estimatedDelivery }) {
      state.shippingPrice = price;
      state.shippingEstimatedDelivery = estimatedDelivery;
    },
    clearCart(state) {
      state.cart = [];
      state.cartLength = 0;
      state.shippingPrice = 0;
      state.shippingEstimatedDelivery = "";
    },
  },
});
