import axios from "axios";

export default {
  namespaced: true,
  state: { items: [], item: {} },
  getters: {},
  actions: {
    fetchProducts({ state, commit }) {
      return axios
        .get("/api/products")
        .then((response) => {
          const products = response.data;
          commit(
            "setItems",
            { resource: "products", items: products },
            { root: true }
          );
          return state.items;
        })
        .catch((error) => console.log(error));
    },
    fetchProduct({ state, commit }, productId) {
      commit("setItem", { resource: "products", item: {} }, { root: true });
      return axios
        .get(`/api/products/${productId}`)
        .then((response) => {
          const product = response.data;

          commit(
            "setItem",
            { resource: "products", item: product },
            { root: true }
          );
          return state.item;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createProduct({ state, commit }, product) {
      return axios
        .post("/api/products", product)
        .then((response) => {
          const createdProduct = response.data;
          const index = state.items.length;

          commit(
            "addItemToArray",
            { item: createdProduct, index, resource: "products" },
            { root: true }
          );

          return createdProduct;
        })
        .catch((error) => console.log(error));
    },

    deleteProduct(_, productId) {
      return axios.delete(`/api/products/${productId}`).then((response) => {
        const productId = response.data;
        return productId;
      });
    },
  },
  mutations: {},
};
