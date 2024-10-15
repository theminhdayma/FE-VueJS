export const count = {
    state: {
        count: 0
    },
    mutations: {
        // Nơi khai báo các hàm (method) để biến đổi state
        // Khai báo hàm tăng giá trị biến count
        increase: (state, payload) => {
            state.count += payload.amount
        },
    },
    getters: []
}