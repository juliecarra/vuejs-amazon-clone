import axios from "axios";

export default {
  namespaced: true,
  state: { items: [], item: {} },
  getters: {},
  actions: {
    fetchAddresses({ state, commit }) {
      return axios
        .get("/api/addresses")
        .then((response) => {
          const addresses = response.data;
          commit(
            "setItems",
            { resource: "addresses", items: addresses },
            { root: true }
          );
          return state.items;
        })
        .catch((error) => console.log(error));
    },
    fetchAddress({ state, commit }, addressId) {
      commit("setItem", { resource: "addresses", item: {} }, { root: true });
      return axios
        .get(`/api/addresses/${addressId}`)
        .then((response) => {
          const address = response.data;

          commit(
            "setItem",
            { resource: "addresses", item: address },
            { root: true }
          );
          return state.item;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createAddress({ state, commit }, address) {
      return axios
        .post("/api/addresses", address)
        .then((response) => {
          const createdAddress = response.data;
          const index = state.items.length;

          commit(
            "addItemToArray",
            { item: createdAddress, index, resource: "addresses" },
            { root: true }
          );

          return createdAddress;
        })
        .catch((error) => console.log(error));
    },

    deleteAddress(_, addressId) {
      return axios.delete(`/api/addresses/${addressId}`).then((response) => {
        const addressId = response.data;
        return addressId;
      });
    },
  },
  mutations: {},
};
