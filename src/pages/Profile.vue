<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Profile page</h2>
            <a class="a-button-history margin-right-10" v-on:click.prevent="handleLogout">Logout</a>

            <form>
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Name</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="name"
                  :placeholder="currentUser.name"
                />
              </div>

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Email</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="email"
                  :placeholder="currentUser.email"
                />
              </div>

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Password</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="password" />
              </div>

              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" v-on:click="handleUpdateProfile">Update profile</span>
                  </span>
                </span>
              </div>
            </form>
            <br />
          </div>
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
      name: "",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser"
    })
  },
  methods: {
    async handleUpdateProfile() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        await axios.patch("/api/auth/user", data);

        await this.$store.dispatch("auth/getCurrentUser");

        location.reload();
      } catch (error) {
        console.log(error);
      }
    },

    async handleLogout() {
      await this.$store.dispatch("auth/logout");
      await this.$router.push("/");
    }
  }
};
</script>

<style></style>
