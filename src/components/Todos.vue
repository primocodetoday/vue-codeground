<template>
  <div>
    <h3>Todos List</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span><span class="incomplete-box"></span> = Incomplete </span>
      <span><span class="complete-box"></span> = Complete </span>
    </div>
    <div class="todos-list">
      <div
        v-for="todo in allTodos"
        v-on:dblclick="onDblClick(todo)"
        :key="todo.id"
        class="todos-list-item"
        v-bind:class="{ 'todos-list-item__is-complete': todo.completed }"
      >
        {{ todo.title }}
        <inline-svg
          v-on:click="deleteTodo(todo.id)"
          class="todos-list-item-icon"
          :src="require('../assets/delete.svg')"
        ></inline-svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  components: {},
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),

    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
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

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

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

    &__is-complete {
      background: #35495e;
      color: white;
    }

    &-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      bottom: 10px;
      right: 10px;
      fill: #fff;
      cursor: pointer;
    }
  }
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;

  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  }
  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }
}
</style>
