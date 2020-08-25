<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add-container">
      <form @submit="onSubmit">
        <input type="text" v-model="newTodoTitle" placeholder="Add Todo..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      newTodoTitle: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.newTodoTitle);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
}

input {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  border-radius: 5px 0 0 5px;
}

button {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
}
</style>
