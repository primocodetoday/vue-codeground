// import axios from "axios";

import Axios from "axios";

const moduleTD = {
  state: () => ({
    todos: []
  }),
  getters: {
    allTodos: state => state.todos
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos;
    },
    newTodo: (state, todo) => {
      state.todos.unshift(todo);
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      await Axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        commit("setTodos", response.data);
      });
    },
    async addTodo({ commit }, title) {
      await Axios.post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      }).then(response => {
        commit("newTodo", response.data);
      });
    }
  }
};

export default moduleTD;
