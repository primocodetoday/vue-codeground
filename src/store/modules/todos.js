// import axios from "axios";

const moduleTD = {
  state: () => ({
    todos: [
      { id: 1, title: "Todo One" },
      { id: 2, title: "Todo Two" }
    ]
  }),
  getters: {
    allTodos: state => state.todos
  },
  mutations: {},
  actions: {}
};

export default moduleTD;
