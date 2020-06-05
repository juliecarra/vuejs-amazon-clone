import axios from "axios";

export default {
  namespaced: true,
  state: { items: [], item: {} },
  getters: {},
  actions: {
    fetchCountries({ state, commit }) {
      return axios
        .get("/api/addresses/countries")
        .then((response) => {
          const countries = response.data;
          commit(
            "setItems",
            { resource: "countries", items: countries },
            { root: true }
          );
          return state.items;
        })
        .catch((error) => console.log(error));
    },
  },
  mutations: {},
};
