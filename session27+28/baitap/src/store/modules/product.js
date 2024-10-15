import { addProduct, getAllProduct } from "@/api/productApi";

const product = {
    state: {
        products: []
    },
    mutations: {
        // Cập nhật danh sách sản phẩm từ API
        getAllProduct: async (state) => {
            state.products = await getAllProduct();
        },
        // Thêm sản phẩm mới vào state
        addProductMutation: (state, payload) => {
            state.products.push(payload); // Đẩy sản phẩm mới vào danh sách
        }
    },
    actions: {
        // Lấy tất cả sản phẩm từ API và commit mutation
        getAllProduct: ({ commit }) => {
            commit("getAllProduct");
        },
        // Thêm sản phẩm mới và commit mutation để cập nhật state
        addProductAction: async ({ commit }, payload) => {
            const newProduct = await addProduct(payload.data); // Gọi API để thêm sản phẩm
            commit("addProductMutation", newProduct); // Commit sản phẩm mới
        }
    }
};

export default product;
