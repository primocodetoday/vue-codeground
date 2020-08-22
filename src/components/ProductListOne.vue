<template>
  <div class="list-one">
    <h2>I'm product list one</h2>
    <ul>
      <li v-for="product in products" :key="product.name">
        <span class="list-one-name">{{ product.name }}</span>
        <span class="list-one-price"> {{ product.price }}zł</span>
      </li>
    </ul>
    <button v-on:click="reducePriceBy1">Reduce Price by 1</button>
    <button v-on:click="reducePriceBy5">Reduce Price by 5</button>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    // hard coded getter in component
    // saleProducts() {
    //   const saleProducts = this.$store.state.products.map(product => {
    //     return {
    //       name: `**${product.name}**`,
    //       price: product.price / 2
    //     };
    //   });
    //   return saleProducts;
    // }
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  },
  methods: {
    reducePriceBy1() {
      this.$store.commit("reducePrice", 1);
    },
    reducePriceBy5() {
      this.$store.commit("reducePrice", 5);
    }
  }
};
</script>

<style lang="scss" scoped>
.list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  ul {
    padding: 0;
  }
  li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }
  &-price {
    font-weight: bold;
    color: #e8800c;
  }
}
</style>
