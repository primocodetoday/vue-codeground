<template>
  <div>
    <h3>Todos List</h3>
    <div class="todos-list">
      <div v-for="todo in allTodos" :key="todo.id" class="todos-list-item">{{ todo.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    ...mapActions(["fetchTodos"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style lang="scss" scoped>
.todos-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  &-item {
    @keyframes appear {
      0% {
        opacity: 0;
        transform: scale(0.7);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    animation: appear 0.3s ease;
  }
}
</style>
