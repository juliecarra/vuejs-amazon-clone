<template>
  <div>
    <div class="reviewsMedley">
      <div class="row">
        <div class="col-lg-4 col-md-5 col-sm-12">
          <a href="#" class="a-color-base">
            <h2>{{ reviews.length }} customer reviews</h2>
          </a>

          <div class="clearfix">
            <div class="float-left">
              <hr class="a-spacing-large" />
            </div>
          </div>
          <h3 class="a-spacing-micro">Review this product</h3>
          <div class="a-row a-spacing-large">Share your thoughts with other customers</div>
          <div class="a-row">
            <span class="a-button-base writeReviewButton cm-cr-button-wide">
              <span class="a-button-inner">
                <router-link
                  :to="`/reviews/${product._id}`"
                  class="a-button-text"
                >Write a customer review</router-link>
              </span>
            </span>
          </div>
          <div class="clearfix">
            <div class="float-left">
              <hr class="mt-4 a-spacing-large" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-7 col-sm-12">
          <!-- <div class="reviews-image-gallery">
            <h3>Customer images</h3>

            <div class="a-spacing-small a-spacing-top-small">
              <img
                class="img-fluid"
                width="22.5%"
                v-for="review in reviews"
                :key="review._id"
                :src="review.image"
              />
            </div>
            <div>
              <a href="#">See all customer images</a>
            </div>
          </div>-->
          <div class="cr-lighthut">
            <h3>Read reviews</h3>
            <div class="cr-lighthouse-terms">
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">beautifully written</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">best book</span>
                </a>
              </span>

              <br />

              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">well written</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">great read</span>
                </a>
              </span>
              <br />
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">must read</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">great book</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">highly recomended</span>
                </a>
              </span>
              <br />
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">well searched</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">long term</span>
                </a>
              </span>
            </div>
          </div>
          <div class="cr-widget-focalreviews">
            <div class="card-padding">
              <div class="review-header">
                <h3>
                  <span class="a-size-base">Showing 1-8 of {{ reviews.length }} reviews</span>
                </h3>
              </div>
              <div class="review-sort-type">
                <span class="a-dropdown-container">
                  <span class="a-button a-button-dropdown">
                    <span class="a-button-inner">
                      <span class="a-button-text">
                        <span class="a-dropdown-prompt">Top Reviews</span>
                      </span>
                      <i class="a-icon a-icon-dropdown"></i>
                    </span>
                  </span>
                </span>
              </div>

              <div class="review-body" v-for="review in reviews" :key="review._id">
                <div class="genome-widget">
                  <a href="#">
                    <div class="profile-avatar">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
                      />
                    </div>

                    <div class="profile-content">
                      <span class="a-profile-name">{{ review.user.name }}</span>
                    </div>
                  </a>
                </div>
                <div class="a-row">
                  <a href="#">
                    <i class="fas fa-star" v-for="i in review.rating" :key="i"></i>
                  </a>
                  <span class="a-letter-space"></span>

                  <a href="#" class="review-title">{{ review.headline }}</a>
                </div>

                <div class="review-data">
                  <span class="a-color-secondary">Format: Hardcover</span>
                  <div
                    style="width: 1px !important; height: 15px !important; background-color: #ddd; display: inline-block; margin: 0px 5px -3px 5px;"
                  ></div>
                  <span class="avp-badge a-color-state">Verified Purchase</span>
                </div>

                <div class="review-body">
                  <span>{{ review.body }}</span>
                </div>
                <div class="review-comments">
                  <div class="a-spacing-small">
                    <span class="a-size-base a-color-tertiary">60 people found this helpful</span>
                  </div>
                  <div class="cr-helpful-button">
                    <span class="a-button-base">
                      <span class="a-button-inner">
                        <a href="#" class="a-button-text">
                          <div class="cr-helpful-text">Helpful</div>
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="review-footer">
            <div class="a-row">
              <span class="a-button a-button-base writeReviewButton" id="a-autoid-15">
                <span class="a-button-inner">
                  <router-link
                    :to="`/reviews/${product._id}`"
                    class="a-button-text"
                    role="button"
                  >Write a customer review</router-link>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-0 col-sm-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    },
    reviews: {
      required: true,
      type: Array
    }
  }
};
</script>
