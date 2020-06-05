import axios from "axios";

export default {
  namespaced: true,
  state: { items: [] },
  getters: {},
  actions: {
    fetchOwners({ state, commit }) {
      return axios
        .get("/api/owners")
        .then((response) => {
          const owners = response.data;
          commit(
            "setItems",
            { resource: "owners", items: owners },
            { root: true }
          );
          return state.items;
        })
        .catch((error) => console.log(error));
    },
    createOwner({ state, commit }, owner) {
      return axios
        .post("/api/owners", owner)
        .then((response) => {
          const createdOwner = response.data;
          const index = state.items.length;

          commit(
            "addItemToArray",
            { item: createdOwner, index, resource: "owners" },
            { root: true }
          );

          return createdOwner;
        })
        .catch((error) => console.log(error));
    },
  },
  mutations: {},
};
