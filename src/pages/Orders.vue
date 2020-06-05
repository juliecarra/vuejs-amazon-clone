<template>
  <main>
    <div class="container-fluid your-order">
      <div class="row">
        <div class="col-xl-2 col-lg-1 col-md-12"></div>
        <div class="col-xl-8 col-lg-9 col-md-12">
          <div class="a-spacing-large a-spacing-top-small a-subheader a-breadcrumb">
            <ul class="a-unordered-list a-nostyle a-horizontal">
              <li>
                <span class="a-list-item">
                  <a class="a-link-normal">
                    <span>Your Account</span>
                  </a>
                </span>
              </li>
              <li class="a-breadcrumb-divider">›</li>
              <li>
                <span class="a-list-item">
                  <span class="a-color-state">Your Orders</span>
                </span>
              </li>
            </ul>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-5 col-12">
              <h1 class="a-spacing-medium">Your Orders</h1>
            </div>
          </div>
          <div class="a-row a-spacing-medium custom-view-options">
            <ul class="a-unordered-list a-nostyle a-horizontal">
              <li role="tab">
                <span class="a-list-item"></span>
              </li>
              <li class="selected" role="tab">
                <span class="a-list-item">
                  <span class="item">Orders</span>
                </span>
              </li>
            </ul>
          </div>

          <div class="orderContent">
            <div class="orderContentHeader">
              <div class="row"></div>
            </div>

            <div class="orderContentBodyAlt" v-for="order in orders" :key="order._id">
              <div class="a-row">
                <h1
                  class="a-size-medium a-text-bold"
                  style="color: #111 !important;font-family: 'MyWebFont',Arial,sans-serif !important; "
                >Estimated Delivery - {{ order.estimatedDelivery }}</h1>
              </div>

              <div v-for="product in order.products" :key="product._id">
                <div class="a-spacing-base"></div>
                <div class="row">
                  <div class="col-xl-2 col-lg-2 col-2">
                    <a href="#">
                      <img :src="product.id.image" class="img-fluid" style="width: 100px;" />
                    </a>
                  </div>
                  <div class="col-xl-10 col-lg-10 col-10">
                    <div class="a-row">
                      <span class="a-size-small">
                        <a href="#">{{ product.id.title }}</a>
                      </span>
                    </div>
                    <div class="a-row">
                      <span class="a-size-mini a-color-secondary">Sold by: Amazon Export Sales LLC</span>
                    </div>
                    <div class="a-row">
                      <span
                        class="a-size-mini"
                        style="color: #111; font-weight: 400;"
                      >Quantity: {{ product.quantity }}</span>
                    </div>
                    <div class="a-row">
                      <span class="a-size-mini a-color-price">${{ product.id.price }}</span>
                    </div>
                    <br />
                    <div class="a-row">
                      <span class="a-button-buy-again">Buy it again</span>
                      <span class="a-button-view-item">View your item</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-1 col-md-12"></div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("orders/fetchOrders");
  },
  computed: {
    orders() {
      return this.$store.state.orders.items;
    },
    ...mapGetters({
      currentUser: "auth/currentUser"
    })
  }
};
</script>
