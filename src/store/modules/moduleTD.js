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
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      await Axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        commit("setTodos", response.data);
      });
    }
  }
};

export default moduleTD;
