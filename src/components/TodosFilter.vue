<template>
  <div>
    Filter Todos:
    <select v-model="selected" @change="filterTodos(selected)">
      <option disabled value="">Please select one</option>
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodosFilter",
  methods: {
    ...mapActions(["filterTodos"])
  },
  data() {
    return {
      selected: ""
    };
  }
};
</script>

<style lang="scss" scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
  border-radius: 5px;
}
</style>
