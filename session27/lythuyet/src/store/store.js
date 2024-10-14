import { createStore } from "vuex"
import { count } from "./modules/count"
import { user } from "./modules/user"


const store = createStore({
    modules: {
        count: count,
        user: user
    }
})

export default store