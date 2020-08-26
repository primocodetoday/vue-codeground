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
    }
  }
};

export default moduleTD;
