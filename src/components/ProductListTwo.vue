<template>
  <div class="list-two">
    <h2>I'm product list two</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        <span class="list-two-name">{{ product.name }}</span>
        <span class="list-two-price"> {{ product.price }}zł</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(["saleProducts"])
  }
};
</script>

<style lang="scss" scoped>
.list-two {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

  ul {
    padding: 0;
    list-style-type: none;
  }
  li {
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }
  &-price {
    font-weight: bold;
    color: #860ce8;
    display: block;
  }
}
</style>
