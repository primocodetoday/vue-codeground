<template>
  <div>
    <router-link to="/" exact>Home</router-link>
    <router-link to="/one">One</router-link>
    <router-link to="/two">Two</router-link>
    <h2>User Profiles</h2>
    <ul>
      <li v-for="(id, index) in userIds" :key="index">
        <router-link
          :to="{
            name: 'ViewProfile',
            params: {
              user_id: id
            }
          }"
          >Link to {{ id }}
        </router-link>
        <!-- or this solution
        <router-link
          :to="`/profile/${id}`"
          >Link to {{ id }}
        </router-link> -->
      </li>
    </ul>
    <h2>Navigation controls</h2>
    <li>
      <button @click="goBack">Go back</button>
    </li>
    <li>
      <button @click="goHome">Redirect to Home</button>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userIds: ["1", "2", "3", "4"]
    };
  },
  methods: {
    goHome() {
      // its router not route
      this.$router.push("/");
    },
    goBack() {
      // goForward .go(+1)
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
ul {
  margin: 0;
  padding: 10px 0;
}
li {
  list-style-type: none;
  display: inline-block;
}
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
