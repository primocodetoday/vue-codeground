<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import addBlog from "./components/addBlog.vue";
// import showBlogs from "./components/showBlogs.vue";
// import listBlogs from "./components/listBlogs.vue";
import header from "./components/header.vue";

export default {
  name: "App",
  components: {
    "app-header": header
    // "add-blog": addBlog,
    // "show-blogs": showBlogs,
    // "list-blogs": listBlogs
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style>
body {
  margin: 0 auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
