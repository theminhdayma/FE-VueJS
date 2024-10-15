import { addProduct, getAllProduct } from "@/api/productApi";

const product = {
    state: {
        products: []
    },
    mutations: {
        getAllProduct: async (state) => {
            state.products = await getAllProduct();
        },
        addProductMutation: (state, payload) => {
            state.products.push(payload); 
        }
    },
    actions: {
        getAllProduct: ({ commit }) => {
            commit("getAllProduct");
        },
        addProductAction: async ({ commit }, payload) => {
            const newProduct = await addProduct(payload.data); 
            commit("addProductMutation", newProduct);
        }
    }
};

export default product;