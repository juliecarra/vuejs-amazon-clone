<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add a new category</h2>
            <form>
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Type</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="type"
                />
              </div>
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" v-on:click.prevent="submitForm"
                      >Add Category</span
                    >
                  </span>
                </span>
              </div>
            </form>
            <br />
            <ul
              v-for="category in categories"
              :key="category._id"
              class="list-group-item"
            >
              <li>{{ category.type }}</li>
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
      type: "",
    };
  },

  computed: {
    categories() {
      return this.$store.state.categories.items;
    },
  },
  created() {
    return this.$store.dispatch("categories/fetchCategories");
  },
  methods: {
    submitForm() {
      this.$store
        .dispatch("categories/createCategory", { type: this.type })
        .then(() => {
          this.$router.push("/admin");
        });
    },
  },
};
</script>

<style></style>
