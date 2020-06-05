import axios from "axios";

export default {
  namespaced: true,
  state: {
    user: null,

    isAuthResolved: false,
  },
  getters: {
    currentUser(state) {
      return state.user || null;
    },

    isAuthenticated(state) {
      return !!state.user;
    },
  },
  actions: {
    loginWithEmailAndPassword({ commit }, userData) {
      return axios.post("/api/auth/login", userData).then((response) => {
        const user = response.data;
        commit("setAuthUser", user);
      });
    },

    registerUser(context, userData) {
      return axios.post("/api/auth/signup", userData);
    },

    getCurrentUser({ commit, getters }) {
      //so that we don't call the api all the time
      const currentUser = getters["currentUser"];
      if (currentUser) return Promise.resolve(currentUser);

      const config = {
        headers: {
          "Cache-Control": "no-cache",
        },
      };
      return axios
        .get("/api/auth/user", config)
        .then((response) => {
          const user = response.data;
          commit("setAuthUser", user);
          commit("setAuthResolved", true);
          return user;
        })
        .catch((error) => {
          commit("setAuthUser", null);
          commit("setAuthResolved", true);
          return error;
        });
    },

    logout({ commit }) {
      return axios
        .post("/api/auth/logout")
        .then(() => {
          commit("setAuthUser", null);
          return true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    setAuthUser(state, user) {
      state.user = user;
    },

    setAuthResolved(state, isAuthResolved) {
      state.isAuthResolved = isAuthResolved;
    },
  },
};
