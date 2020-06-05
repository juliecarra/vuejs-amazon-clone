<template>
  <main>
    <div class="reviewPage mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div class="a-spacing-top-medium">
              <h1 class="a-spacing-base">
                <b>Create Review</b>
              </h1>
              <div class="row">
                <div class="col-md-2 col-sm-3 col-3">
                  <img :src="product.image" style="width: 80px" />
                </div>

                <div class="col-md-10 col-sm-9 col-9 m-auto">
                  <h4>
                    <b>{{ product.title }}</b>
                  </h4>
                </div>
              </div>
              <div class="a-spacing-top-medium"></div>
              <hr />
              <h2 class="a-spacing-base">Overall Rating</h2>
              <div class="a-row">
                <star-rating v-model="rating"></star-rating>
              </div>
              <div class="a-row a-spacing-top-large">
                <h2>Add photo or video</h2>
                <p
                  style="font-size: 14px; font-weight: 700;"
                >Shoppers find images and videos more helpful than text alone.</p>
              </div>
              <div class="a-row a-spacing-top-medium">
                <label class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" ref="file" v-on:change="handleImageUpload" />
                </label>
                <p>{{ imageName }}</p>
              </div>
              <div class="a-spacing-top-large"></div>
              <hr />

              <div class="headline a-spacing-large">
                <h2 class="a-spacing-base">Add a headline</h2>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 70%;"
                  placeholder="What's most important to know?"
                  v-model="headline"
                />
              </div>

              <div class="a-spacing-base">
                <h2 class="a-spacing-base">Write your review</h2>
                <textarea
                  placeholder="What do you like or dislike? What did you see this product for?"
                  style="height:6em; width: 100%;"
                  v-model="body"
                ></textarea>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <div class="a-spacing-top-medium">
              <p
                style="font-size: 14px; font-weight: 700;"
              >This is how you'll appear to other customers:</p>
              <div class="media a-spacing-top-large">
                <div class="media-left">
                  <img src="/img/avatar.png" class="img-fluid" style="width: 50px;" />
                </div>
                <div class="media-body pl-3 pt-2">
                  <input
                    type="text"
                    class="a-input-text"
                    style="width: 100%;"
                    :value="currentUser.name"
                  />
                </div>
              </div>
            </div>
            <div class="a-row a-spacing-top-medium">
              <span class="a-color-tertiary">Don't worry, you can always change this on your profile</span>
            </div>
            <div class="a-row text-right a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" v-on:click="submitForm">Submit</span>
                </span>
              </span>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
        <div class="a-spacing-large pb-5"></div>
        <hr />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  },
  data() {
    return {
      headline: "",
      body: "",
      rating: 0,
      image: "",
      imageName: "",
      user: ""
    };
  },
  computed: {
    ...mapState({
      product: state => state.products.item
    }),
    ...mapGetters({
      currentUser: "auth/currentUser"
    })
  },
  methods: {
    ...mapActions("products", ["fetchProduct"]),
    ...mapActions("reviews", ["createReview"]),

    handleImageUpload(e) {
      this.image = this.$refs.file.files[0];
      console.log(this.image);
      this.imageName = e.target.files[0].name;
    },

    async submitForm() {
      try {
        await this.createReview({
          productId: this.product._id,
          headline: this.headline,
          body: this.body,
          rating: this.rating,
          image: this.image
        });

        this.$router.push(`/products/${this.$route.params.id}`);
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    const productId = this.$route.params.id;
    this.fetchProduct(productId);
  }
};
</script>

<style scoped></style>
