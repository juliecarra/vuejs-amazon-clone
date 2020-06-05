import axios from "axios";

export default {
  namespaced: true,
  state: { items: [], item: {} },
  getters: {},
  actions: {
    fetchCategories({ state, commit }) {
      return axios
        .get("/api/categories")
        .then((response) => {
          const categories = response.data;
          commit(
            "setItems",
            { resource: "categories", items: categories },
            { root: true }
          );
          return state.items;
        })
        .catch((error) => console.log(error));
    },

    createCategory({ state, commit }, { type }) {
      const category = {};
      category.type = type;

      return axios
        .post("/api/categories", category)
        .then((response) => {
          const createdCategory = response.data;
          const index = state.items.length;

          commit(
            "addItemToArray",
            { item: createdCategory, index, resource: "categories" },
            { root: true }
          );

          return createdCategory;
        })
        .catch((error) => console.log(error));
    },
  },
  mutations: {},
};
