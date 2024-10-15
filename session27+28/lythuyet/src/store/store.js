import { createStore } from "vuex"
import { count } from "./modules/count"
import { user } from "./modules/user"
import product from "./modules/product"


const store = createStore({
    modules: {
        count: count,
        user: user,
        product: product
    }
})

export default store