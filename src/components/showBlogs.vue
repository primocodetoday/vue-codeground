<template>
  <!-- 'wide' passing to custom directive as a string -->
  <div v-theme:column="'wide'" id="show-blogs">
    <h2>All Blog Articles</h2>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h3 v-rainbow>{{ blog.title | toUppercase }}</h3>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get("https://vue-blog-6680e.firebaseio.com/posts.json")
      .then(data => {
        return data.json();
      })
      .then(data => {
        const blogsArray = [];
        Object.keys(data).forEach(key => {
          const tempData = data;
          // adding missing id from obj key
          tempData[key].id = key;
          blogsArray.push(tempData[key]);
        });
        this.blogs = blogsArray;
      });
  },
  computed: {},
  filters: {
    toUppercase: value => value.toUpperCase(),
    snippet: value => `${value.slice(0, 100)}...`
  },
  directives: {
    rainbow: {
      bind(el) {
        const element = el;
        element.style.color = `#${Math.random()
          .toString()
          .slice(2, 8)}`;
      }
    }
  },
  mixins: [searchMixin]
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
