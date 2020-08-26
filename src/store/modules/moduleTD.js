import axios from "axios";

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
    },
    removeTodo: (state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    upTodo: (state, updatedTodo) => {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updatedTodo);
      }
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      await axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        commit("setTodos", response.data);
      });
    },
    async addTodo({ commit }, title) {
      await axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed: false
        })
        .then(response => {
          commit("newTodo", response.data);
        });
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(() => {
        commit("removeTodo", id);
      });
    },
    async filterTodos({ commit }, selected) {
      await axios
        .get(`https://jsonplaceholder.typicode.com/todos?_limit=${selected}`)
        .then(response => {
          commit("setTodos", response.data);
        });
    },
    async updateTodo({ commit }, updTodo) {
      await axios
        .put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)
        .then(response => {
          commit("upTodo", response.data);
        });
    }
  }
};

export default moduleTD;
