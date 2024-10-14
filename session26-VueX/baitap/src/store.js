import { createStore } from 'vuex'

const store = createStore({
  state :{
    users: [
        {
            id: 1,
            name: "Nguyễn Thế Minh",
            gender: "Nam",
            dateOfBirth: "23 - 12 - 2005",
            address: "Phúc Thọ, Hà Nội"
        },
        {
            id: 2,
            name: "Trần Thị Minh Sâm",
            gender: "nữ",
            dateOfBirth: "28 - 07 - 2006",
            address: "Phúc Thọ, Hà Nội"
        }
    ],
    products: [
        { id: 1, productName: 'Laptop', price: 1200, quantity: 10 },
        { id: 2, productName: 'Smartphone', price: 800, quantity: 15 },
        { id: 3, productName: 'Headphone', price: 150, quantity: 20 },
    ],
    counter: 0,
    randomNumbers: []
  },
  getters: {
    getUsers: (state) => {
        return state.users
    },
    getProducts: (state) => {
        return state.products;
    },
    getCounter: (state) => {
        return state.counter;
    },
    getRandomNumbers: (state) => {
        return state.randomNumbers;
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    addRandomNumber(state, randomNumber) {
        state.randomNumbers.push(randomNumber);
    }
  },
  actions: {
    incrementCounter({ commit }) {
      commit('increment');
    },
    decrementCounter({ commit }) {
      commit('decrement');
    },
    generateRandomNumber({ commit }) {
        const randomNumber = Math.floor(Math.random() * 100); // Tạo số ngẫu nhiên từ 0 đến 99
        commit('addRandomNumber', randomNumber);
    }
  },
})

export default store