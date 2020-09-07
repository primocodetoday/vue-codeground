<template>
  <div>
    <router-link to="/" exact>Home</router-link>
    <router-link to="/one">One</router-link>
    <router-link to="/two">Two</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
a {
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 600;
}

.router-link-active {
  color: deeppink;
}
</style>
