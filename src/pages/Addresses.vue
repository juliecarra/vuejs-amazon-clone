<template>
  <main>
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-10">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <a href="#">
                      <span>Your Account</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>Your Adresses</span>
                    </a>
                  </li>
                </ul>
              </div>
              <h1 class="a-spacing-medium a-spacing-top-medium">Your Addresses</h1>

              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>{{ message }}</b>
              </div>
              <div class="a-spacing-double-large">
                <div class="row a-spacing-micro">
                  <div class="col-lg-4 col-md-5 col-sm-12 pb-2">
                    <router-link
                      to="/addresses/add"
                      class="a-link-normal add-new-address-button"
                      style="text-decoration:none;"
                    >
                      <div class="a-box first-desktop-address-tile">
                        <div class="a-box-inner a-padding-extra-large">
                          <i class="far fa-plus"></i>
                          <h2 class="a-color-tertiary">Add Address</h2>
                        </div>
                      </div>
                    </router-link>
                  </div>

                  <div
                    class="col-lg-4 col-md-4 col-sm-12 pl-md-0 pb-2"
                    v-for="address in addresses"
                    :key="address._id"
                  >
                    <div class="a-box a-spacing-none normal-desktop-address-tile">
                      <div class="a-box-inner a-padding-none">
                        <div class="address-section-no-default">
                          <div class="a-spacing-small">
                            <ul class="a-unordered-list a-nostyle a-vertical">
                              <li>
                                <h5>
                                  <b>{{ address.fullName }}</b>
                                </h5>
                              </li>

                              <li>{{ address.streetAddress }}</li>

                              <li>
                                {{ address.city }}, {{ address.state }},
                                {{ address.zipCode }}
                              </li>

                              <li>{{ address.country }}</li>

                              <li>Phone number: {{ address.phoneNumber }}</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="edit-address-desktop-link">
                        <router-link :to="`/addresses/${address._id}`">Edit</router-link>&nbsp; | &nbsp;
                        <a
                          href="#"
                          v-on:click.prevent="handleDelete(address._id)"
                        >Delete</a>
                        &nbsp; | &nbsp;
                        <a
                          href="#"
                          v-on:click="onSetDefault(address._id)"
                        >Set as Shipping address</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-3 col-sm-12"></div>
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
import axios from "axios";
export default {
  data() {
    return {
      message: ""
    };
  },
  created() {
    this.$store.dispatch("addresses/fetchAddresses");
  },
  computed: {
    addresses() {
      return this.$store.state.addresses.items;
    }
  },

  methods: {
    handleDelete(addressId) {
      this.$store
        .dispatch("addresses/deleteAddress", addressId)
        .then(() => this.$store.dispatch("addresses/fetchAddresses"))
        .catch(error => console.log(error));
    },

    async onSetDefault(id) {
      try {
        const response = await axios.put(`/api/addresses/default`, {
          id: id
        });

        // this.$toasted.success(
        //   "Your address has been successfully registered as your shipping address. ",
        //   {
        //     duration: 8000
        //   }
        // );
        this.message = response.message;

        location.reload();
      } catch (error) {
        this.message = error.message;
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
