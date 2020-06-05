<template>
  <main>
    <div class="a-spacing-top-medium"></div>
    <div class="container-fluid">
      <div class="wayfinding-breadcrumbs-container">
        <ul class="a-unordered-list a-horizontal a-size-small">
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">{{
                product.category.type
              }}</a>
            </span>
          </li>
          <li>
            <span class="a-list-item">></span>
          </li>
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">{{
                product.title
              }}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid">
      <div class="dp-container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-4">
            <div class="leftCol">
              <div clas="imgBlock">
                <div class="eBooksimg">
                  <img :src="product.image" class="img-fluid" />
                </div>
              </div>

              <div class="authorFollow">
                <hr class="a-divider-normal" />
                <h1 class="authorFollowHeading">Follow The Author</h1>
                <div class="a-spacing-top-small">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="smallAuthorImageContainer">
                        <a href="#">
                          <img :src="product.owner.image" class="img-fluid" />
                        </a>
                      </div>
                    </div>

                    <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="authorNameCol">
                        <a href="#">{{ product.owner.name }}</a>
                      </div>
                    </div>

                    <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                      <div class="authorBtn mt-2">
                        <a href="#">
                          <span class="btnFollow">
                            <span class="a-btn-inner">
                              <button class="a-btn-text">+ Follow</button>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-8">
            <div class="centerCol">
              <div class="titleDiv">
                <h1 class="productTitle">
                  <span class="largeTitle">{{ product.title }}</span>
                  <span class="smallTitle" style="margin-left: 5px"
                    >Hardcover</span
                  >
                </h1>
              </div>

              <div class="bylineinfo">
                by
                <a href="#" class="authorName">
                  {{ product.owner.name }}
                  <i
                    class="fas fa-chevron-down"
                    style="font-size: 8px !important; color: #555 !important;"
                  ></i>
                </a>
                (Author)
              </div>
              <div class="reviewGroup"></div>

              <hr style="margin-top: 10px;" />

              <div class="mediaMatrix">
                <div class="formats">
                  <ul>
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>Kindle</span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcpAppBox">
                              <span class="a-declarative">
                                Read with Our
                                <span class="a-text-bold">Free App</span>
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>

                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>
                                <img
                                  src="/img/audibleLogo.png"
                                  class="img-fluid"
                                  style="width: 20px;"
                                />Audible
                              </span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcpAppBox">
                              <span class="a-declarative">
                                <span class="a-text-bold">Free App</span> with
                                your Audible Trial
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                    <!-- Paperback -->
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>Paperback</span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Description -->
              <div class="bookDescription">
                <div class="bookDescriptionInner">
                  {{ product.description }}
                </div>
              </div>

              <div class="aboutEbooksFeature">
                <hr />
                <div class="row">
                  <div class="col-sm-4 mb-1">
                    <div class="a-declarative">
                      Page Flip:
                      <span>
                        <a href="#">
                          Enabled
                          <i class="a-icon a-icon-popover"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="combinedBuyBox">
              <div class="buyBox">
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <label for="test1">Buy New</label>
                      </form>
                    </div>

                    <div class="float-right">
                      <span
                        class="a-size-medium a-color-price offer-price a-text-normal"
                        >${{ product.price }}</span
                      >
                    </div>
                  </div>
                </div>

                <div class="a-section a-spacing-none">
                  <div class="row"></div>
                </div>

                <div class="a-section a-spacing-small a-spacing-top-micro">
                  <div class="row">
                    <span class="a-color-base buyboxShippingLabel"></span>
                  </div>
                </div>
                <div class="a-section a-spacing-small">
                  <div class="a-section a-spacing-none">
                    <span class="a-size-medium a-color-success">In Stock</span>
                  </div>
                  <div class="a-section a-spacing-mini">
                    Ships from and sold by Amazon.
                  </div>
                </div>

                <div class="a-section">
                  <div
                    class="a-button-stack"
                    @click="addProductToCart(product)"
                  >
                    <span
                      class="a-spacing-small a-button-primary a-button-icon"
                    >
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-cart"></i>
                        <input
                          type="submit"
                          name="submit.add-to-cart"
                          class="a-button-input"
                        />
                        <span class="a-button-text">Add to Cart</span>
                      </span>
                    </span>
                  </div>
                  <div
                    class="a-button-stack"
                    @click="addProductToCart(product)"
                  >
                    <span
                      class="a-spacing-small a-button-primary a-button-icon"
                    >
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-buynow"></i>
                        <input
                          type="submit"
                          name="submit.add-to-cart"
                          class="a-button-input"
                        />
                        <span class="a-button-text">Buy Now</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="a-row">
                  <div class="a-spacing-top-small">
                    <div class="a-section a-spacing-none">
                      <div class="a-section a-spacing-none a-spacing-top-mini">
                        This item ships
                        <strong>Worlwide.</strong>
                        <b>
                          Want it in 3 days? Order now and choose the second
                          option at checkout.
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <span class="a-declarative">
                  <a href="#" class="a-link-normal">
                    <div class="a-row a-spacing-mini">
                      <i class="fal fa-map-market-alt"></i>
                      <span class="a-size-small">Worldwide delivery</span>
                    </div>
                  </a>
                </span>
                <br />
                <hr />
              </div>
            </div>

            <div class="kcpAppBaseBox text-center">
              <img src="/img/readyondevice.png" class="img-fluid" />
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div class="books-entity-teaser">
          <div class="bucket">
            <ReviewSection :product="product" :reviews="reviews" />
            <h2>More about the author</h2>
            <div class="content">
              <div class="row">
                <div class="col-md-2 col-sm-4 col-4">
                  <div class="authorContent">
                    <div class="authorImageSingle">
                      <a href="#">
                        <img :src="product.owner.image" class="img-fluid" />
                      </a>
                    </div>
                    <div class="authorFollow">
                      <button class="followButton" type="button">
                        <span class="pr-fb-icon"></span>
                        <span class="pr-fb-text">Follow</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-md-10 col-sm-8 col-8 pl-0">
                  <div class="mainContent">
                    <h3>Biography</h3>
                    <div id="authorBio" style="font-size: 14px">
                      {{ product.owner.about }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ReviewSection from "../components/ReviewSection";

export default {
  components: {
    ReviewSection,
  },

  computed: {
    ...mapState({
      product: (state) => state.products.item,
      reviews: (state) => state.reviews.items,
    }),
  },

  methods: {
    // Export all actions from store
    ...mapActions(["addProductToCart"]),
    ...mapActions("products", ["fetchProduct"]),
    ...mapActions("reviews", ["fetchReviews"]),
  },
  created() {
    const productId = this.$route.params.id;
    this.fetchProduct(productId), this.fetchReviews(productId);
  },
};
</script>

<style></style>
