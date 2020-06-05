<template>
  <main>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">
            All products
          </h1>
          <div class="a-spacing-large"></div>

          <router-link to="/products" class="a-button-buy-again"
            >Add a new product</router-link
          >
          <router-link to="/categories" class="a-button-history margin-right-10"
            >Add a new category</router-link
          >
          <router-link to="/owners" class="a-button-history margin-right-10"
            >Add a new owner</router-link
          >
        </div>
      </div>
    </div>
    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">
      <div class="row">
        <div
          v-for="product in products"
          v-bind:key="product._id"
          class="col-xs-2 col-lg-2 col-md-3 col-sm-6 br bb"
        >
          <div class="history-box">
            <a href class="a-link-normal">
              <img :src="product.image" alt class="img-fluid" />
            </a>

            <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal">
                <div class="p13n-sc-truncated">{{ product.title }}</div>
              </span>
            </div>

            <div class="a-row">
              <a href>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </a>
              <span class="a-letter-space"></span>
              <span class="a-color-tertiary a-size-small asin-review"
                >(9,710)</span
              >
            </div>

            <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13n-sc-price">${{ product.price }}</span>
              </span>
            </div>

            <div class="a-row">
              <router-link
                :to="{
                  name: 'UpdateProduct',
                  params: { id: product._id },
                }"
                class="a-button-history margin-right-10"
                >Update</router-link
              >
              <a
                href
                class="a-button-history margin-right-10"
                v-on:click.prevent="handleDelete(product._id)"
                >Delete</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products.items;
    },
  },
  created() {
    return this.$store.dispatch("products/fetchProducts");
  },
  methods: {
    handleDelete(productId) {
      this.$store
        .dispatch("products/deleteProduct", productId)
        .then(() => this.$store.dispatch("products/fetchProducts"))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
