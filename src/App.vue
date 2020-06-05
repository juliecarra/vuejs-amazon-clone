<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  created() {
    //Persistate state
    this.$store.dispatch("auth/getCurrentUser");
  },
};
</script>

<style lang="css">
@import "./assets/css/default.css";
@import "./assets/css/font-awesome/css/all.css";
</style>
