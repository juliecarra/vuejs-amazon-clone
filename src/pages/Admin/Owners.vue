<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add a new owner</h2>
            <form>
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Name</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="name" />
              </div>

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">About</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="about" />
              </div>

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Add Image</label>
                <div class="a-row a-spacing-top-medium">
                  <label for class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" ref="file" v-on:change="handleImageUpload" />
                    <p style="margin-top: -70px">{{ imageName }}</p>
                  </label>
                </div>
              </div>

              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" v-on:click="submitForm">Add Owner</span>
                  </span>
                </span>
              </div>
            </form>
            <br />
            <ul v-for="owner in owners" :key="owner._id" class="list-group-item">
              <li>{{ owner.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      about: "",
      image: "",
      imageName: ""
    };
  },
  created() {
    return this.$store.dispatch("owners/fetchOwners");
  },
  computed: {
    owners() {
      return this.$store.state.owners.items;
    }
  },
  methods: {
    handleImageUpload(e) {
      this.image = this.$refs.file.files[0];
      console.log(this.image);
      this.imageName = e.target.files[0].name;
    },

    async submitForm() {
      try {
        // Initialize the form data
        let formData = new FormData();

        // Add the form data we need to submit

        formData.append("name", this.name);
        formData.append("about", this.about);
        formData.append("image", this.image, this.imageName);

        await this.$store.dispatch("owners/createOwner", formData);

        // Redirect to admin page
        this.$router.push("/admin");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
