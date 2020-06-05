<template>
  <main>
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <router-link to="/cart">
                      <span>Your Cart</span>
                    </router-link>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li>
                    <router-link to="/placeorder">
                      <span>Place order</span>
                    </router-link>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <router-link to="/payment">
                      <span>Payment</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="a-section">
              <h2>Make a payment</h2>
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>The total price is ${{ getCartTotalPriceWithShipping }}</b>
              </div>

              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>(Test with this credit card number: 4242424242424242)</b>
              </div>
              <form action="#" method="post">
                <div class="a-spacing-medium a-spacing-top-medium">
                  <div class="a-spacing-top-medium">
                    <div ref="card"></div>
                  </div>

                  <div class="a-spacing-top-medium"></div>
                  <hr />
                  <div class="a-spacing-top-medium">
                    <span>
                      <b>Make sure your address is correct</b>
                    </span>
                  </div>
                  <div>
                    <span>
                      If the address contains typos or other errors, your
                      package may be undeliverable.
                    </span>
                  </div>

                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <span class="a-button-text" @click="onPurchase"
                          >Purchase</span
                        >
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      error: "",
      stripe: null,
      card: null,
    };
  },
  mounted() {
    // Create stripe card input
    this.stripe = window.Stripe("pk_test_5Rm43jFTyejDme7DVCGe3ysg00yqiEg949");
    let elements = this.stripe.elements();
    this.card = elements.create("card");
    this.card.mount(this.$refs.card);
  },
  computed: {
    ...mapGetters([
      "getCart",
      "getEstimatedDeliver",
      "getCartTotalPriceWithShipping",
    ]),
  },
  methods: {
    async onPurchase() {
      try {
        let token = await this.stripe.createToken(this.card);
        await axios.post("/api/payments", {
          token: token,
          totalPrice: this.getCartTotalPriceWithShipping,
          cart: this.getCart,
          estimatedDelivery: this.getEstimatedDeliver,
        });

        await this.$store.commit("clearCart");
        await this.$router.push("/orders");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
