import { createStore } from 'vuex'

const store = createStore({
  state :{
    count: 0,
    todos: [
        {
            id: 1,
            name: "Code",
            status: false
        },
        {
            id: 2,
            name: "jyhtgf",
            status: true
        },
        {
            id: 3,
            name: "hgfdzx",
            status: true
        }
    ]
  },
  getters: {
    getCount: (state) => {
        return state.count
    },
    getAllTodo: (state) => {
        return state.todos
    },
    doneTodos: (state) => {
        return state.todos.filter(todo => todo.status === true);
    }
  },
  mutations: {
    // Đi định nghĩa cá phương thức để tương tắc với state, chính là dữ liệu
    increment (state, payload) {
      state.count+= payload.amount
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})

export default store