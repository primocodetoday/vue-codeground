<template>
  <div id="add-blog">
    <p v-show="warning" class="warning">
      Posting is currently disabled
    </p>
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label for="">Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Papajs</label>
        <input type="checkbox" value="papajs" v-model="blog.categories" />
        <label>Nerds</label>
        <input type="checkbox" value="nerds" v-model="blog.categories" />
        <label>Smarties</label>
        <input type="checkbox" value="smarties" v-model="blog.categories" />
        <label>Chads</label>
        <input type="checkbox" value="chads" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{ category }}</li>
      </ul>
      <p>Author:{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Primoza", "Cherry", "Maciejson", "Egocentryk"],
      submitted: false,
      warning: false
    };
  },
  methods: {
    post() {
      this.$http
        .post("https://vue-blog-6680e.firebaseio.com/posts.json", this.blog)
        .then(() => {
          this.submitted = true;
        })
        .catch(() => {
          this.warning = true;
        });
    }
  }
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  padding: 10px;
  margin: 0 auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 15px;
}
#checkboxes label {
  display: inline-block;
  margin-right: 5px;
}
.warning {
  color: red;
  text-transform: uppercase;
  text-align: center;
}
</style>
