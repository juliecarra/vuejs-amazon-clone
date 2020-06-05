import axios from "axios";

export default {
  namespaced: true,
  state: { items: [] },
  getters: {},
  actions: {
    fetchReviews({ state, commit }, id) {
      return axios
        .get(`/api/reviews/product/${id}`)
        .then((response) => {
          const reviews = response.data;
          commit(
            "setItems",
            { resource: "reviews", items: reviews },
            { root: true }
          );
          return state.items;
        })
        .catch((error) => console.log(error));
    },
    createReview(
      { state, commit },

      { headline, body, rating, image, productId }
    ) {
      const review = {};
      review.headline = headline;
      review.body = body;
      review.rating = rating;
      review.image = image;

      return axios
        .post(`/api/reviews/product/${productId}`, review)
        .then((response) => {
          const createdReview = response.data;
          const index = state.items.length;

          commit(
            "addItemToArray",
            { item: createdReview, index, resource: "reviews" },
            { root: true }
          );

          return createdReview;
        })
        .catch((error) => console.log(error));
    },
  },
  mutations: {},
};
