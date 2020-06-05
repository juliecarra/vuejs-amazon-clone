import axios from "axios";

export default {
  namespaced: true,
  state: { items: [], item: {} },
  getters: {},
  actions: {
    fetchOrders({ state, commit }) {
      return axios
        .get("/api/orders")
        .then((response) => {
          const orders = response.data;
          commit(
            "setItems",
            { resource: "orders", items: orders },
            { root: true }
          );
          return state.items;
        })
        .catch((error) => console.log(error));
    },
  },
  mutations: {},
};
