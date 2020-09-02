<template>
  <div>
    <nav>
      <img class="nav-img" src="../assets/logo.png" />
      <ul>
        <li><router-link to="/" exact>Blog</router-link></li>
        <li><router-link to="/add" exact>Add a New Entry</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  padding: 5px 0 5px 5px;
}
li {
  display: inline-block;
  margin: 0;
  /* text-transform: uppercase; */
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 30px;
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #444;
  padding: 14px 0;
  max-width: 1240px;
  margin: 0 auto 10px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
.nav-img {
  height: 30px;
}
</style>
