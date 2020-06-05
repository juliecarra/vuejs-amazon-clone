<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4 side" style="border-right: 1px solid #ddd;">
          <br />
          <h1 style="font-weight: 700; font-size: 13px;">Popular in Books</h1>
          <div style="line-height: 5px;">
            <p class="sidebar">Award Winners</p>
            <p class="sidebar">Bargain Books</p>
            <p class="sidebar">Best Books of the Month</p>
            <p class="sidebar">Best Books of 2019</p>
            <p class="sidebar">Celebrity Picks</p>
            <p class="sidebar">Books in Spanish</p>
            <p class="sidebar">Children's Books</p>
            <p class="sidebar">Deals in Books</p>
            <p class="sidebar">Prime Book Box</p>
            <p class="sidebar">Top 20 Lists in Books</p>
          </div>
          <br />
          <h1 style="font-weight: 700; font-size: 13px;">More in Books</h1>
          <div style="line-height: 5px;">
            <p class="sidebar">100 Books to Read in a Lifetime</p>
            <p class="sidebar">Amazon Book Review Blog</p>
            <p class="sidebar">Amazon Books on Facebook</p>
            <p class="sidebar">Amazon Books on Twitter</p>
            <p class="sidebar">Amazon Books Stores</p>
            <p class="sidebar">Amazon First Reads</p>
            <p class="sidebar">Book Club Picks</p>
            <p class="sidebar">From Page to Screen</p>
            <p class="sidebar">Start a New Series</p>
          </div>
          <br />
          <h1 style="font-weight: 700; font-size: 13px;">Textbooks</h1>
          <div style="line-height: 5px;">
            <p class="sidebar">Textbooks Store</p>
            <p class="sidebar">Textbook Rentals</p>
            <p class="sidebar">Sell Us Your Books</p>
            <p class="sidebar">Kindle eTextbooks</p>
          </div>
          <br />
          <h1 style="font-weight: 700; font-size: 13px;">Kindle & Audible</h1>
          <div style="line-height: 5px;">
            <p class="sidebar">Audible Audiobooks</p>
            <p class="sidebar">Kindle eBooks</p>
            <p class="sidebar">Kindle Deals</p>
            <p class="sidebar">Kindle Unlimited</p>
            <p class="sidebar">Prime Reading</p>
          </div>
          <br />
          <h1 style="font-weight: 700; font-size: 16px; color: grey ;">Show results for</h1>
          <br />
          <h1 style="font-weight: 700; font-size: 13px;">New Releases</h1>
          <div style="line-height: 5px;">
            <p class="sidebar">Last 30 days</p>
            <p class="sidebar">Last 90 days</p>
            <p class="sidebar">Coming Soon</p>
          </div>
          <br />
          <hr />
          <h1 style="font-weight: 700; font-size: 13px;">Books</h1>
          <div style="line-height: 5px;">
            <p class="sidebar">Arts & Photography</p>
            <p class="sidebar">Biographies & Memoirs</p>
            <p class="sidebar">Business & Money</p>
            <p class="sidebar">Calendars</p>
            <p class="sidebar">Children's Books</p>
            <p class="sidebar">Christian Books & Bibles</p>
            <p class="sidebar">Comics & Graphic Novels</p>
            <p class="sidebar">Computers & Technology</p>
            <p class="sidebar">Cookbooks, Food & Wine</p>
            <p class="sidebar">Crafts, Hobbies & Home</p>
            <p class="sidebar">Education & Teaching</p>
            <p class="sidebar">Engineering & Transportation</p>
            <p class="sidebar">Health, Fitness & Dieting</p>
            <p class="sidebar">History</p>
            <p class="sidebar">Humor & Entertainment</p>
            <p class="sidebar">Law</p>
            <p class="sidebar">Literature & Fiction</p>
            <p class="sidebar">Medical Books</p>
            <p class="sidebar">Mystery, Thriller & Suspense</p>
            <p class="sidebar">Parenting & Relationships</p>
            <p class="sidebar">Politics & Social Sciences</p>
            <p class="sidebar">Reference</p>
            <p class="sidebar">Religion & Spirituality</p>
            <p class="sidebar">Romance</p>
            <p class="sidebar">Science & Math</p>
            <p class="sidebar">Science Fiction & Fantasy</p>
            <p class="sidebar">Self-Help</p>
            <p class="sidebar">Sports & Outdoors</p>
            <p class="sidebar">Teen & Young Adult</p>
            <p class="sidebar">Test Preparation</p>
            <p class="sidebar">Travel</p>
          </div>
          <br />
          <hr />
          <h1 style="font-weight: 700; font-size: 16px; color: grey ;">Refine by</h1>
          <div style="line-height: 5px;">
            <h1 style="font-weight: 700; font-size: 13px;">Format</h1>
            <p class="sidebar">Paperback</p>
            <p class="sidebar">Hardcover</p>
            <p class="sidebar">Kindle Edition</p>
            <p class="sidebar">Large Print</p>
            <p class="sidebar">Audible Audiobook</p>
            <p class="sidebar">Printed Access Code</p>
            <p class="sidebar">Loose Leaf</p>
            <p class="sidebar">Audio CD</p>
            <p class="sidebar">Board Book</p>
          </div>
        </div>

        <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
          <div class="mainResults">
            <ul class="s-result-list">
              <li class="s-result-item celwidget" v-for="product in products" :key="product._id">
                <div class="s-item-container">
                  <div class="a-spacing-micro"></div>
                </div>
                <div>
                  <div class="row">
                    <div class="col-sm-3 text-center">
                      <router-link :to="'/products/' + product._id">
                        <img :src="product.image" alt class="img-fluid" style="height: 250px;" />
                      </router-link>
                    </div>
                    <div class="col-sm-9">
                      <div class="a-row a-spacing-small">
                        <router-link :to="'/products/' + product._id" class="a-link-normal">
                          <h2 class="a-size-medium product-title">
                            {{ product.title }}
                            <span class="a-letter-space"></span>
                            <span class="a-letter-space"></span>
                          </h2>
                        </router-link>
                      </div>

                      <div class="a-row a-spacing-small">
                        <span class="a-size-small a-color-secondary">By</span>
                        <span class="a-size-small a-color-secondary">
                          <a
                            href="#"
                            class="a-link-normal a-text-normal"
                            style="color: #555"
                          >{{ product.owner.name }}</a>
                        </span>
                      </div>

                      <div class="a-row">
                        <span class="a-size-small">Ships worldwide</span>
                      </div>

                      <div class="row">
                        <div class="col-sm-7">
                          <div class="a-row a-spacing-none">
                            <a
                              href="#"
                              class="a-link-normal a-text-normal"
                              style="font-size: 13px; color: #555"
                            >Hardcover</a>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="a-row a-spacing-none">
                        <a href="#" class="a-link-normal a-text-normal">
                          <span class="a-offscreen">${{ product.price }}</span>
                          <span class="a-color-base sx-zero-spacing">
                            <span class="sx-price sx-price-large">
                              <sup
                                class="sx-price-currency"
                                style="font-size: 16px"
                              >${{ product.price }}</sup>
                            </span>
                          </span>
                        </a>
                      </div>

                      <div class="a-row a-spacing-none">
                        <span class="a-size-small a-color-secondary">Free with audible Trial</span>
                      </div>
                      <hr />

                      <span class="a-size-small a-color-secondary">
                        Other Formats:
                        <span class="a-letter-space"></span>
                        <a
                          href="#"
                          class="a-size-small a-link-normal a-text-normal"
                          style=" color:#e47911"
                        >Audio CD</a>
                      </span>
                    </div>

                    <div class="col-sm-5">
                      <div class="a-row a-spacing-mini"></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
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
    }
  },
  created() {
    this.$store.dispatch("products/fetchProducts");
  }
};
</script>

<style scoped>
.product-title {
  color: black;
}
.sidebar {
  font-size: 13px;
}
.sidebar:hover,
.product-title:hover {
  color: #e47911;
}
@media screen and (max-width: 992px) {
  .side {
    display: none;
  }
}
</style>
