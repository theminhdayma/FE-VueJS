// Api lấy toàn bộ thông tin của sản phẩm
import axios from "axios"

export const getAllProduct = async () => {
    const res = await axios.get("http://localhost:8080/products")
    return res.data
}

export const getAllCart = async () => {
    const res = await axios.get("http://localhost:8080/carts")
    return res.data
}

// Thêm 1 sản phẩm mới
export const addProduct = async (product) => {
    try {
        const res = await axios.post("http://localhost:8080/products", product)
        return res.data
    } catch (error) {
        console.log("Lỗi");
    }
}

export const updateProduct = async (product) => {
    try {
        const res = await axios.patch("http://localhost:8080/products", product)
        return res.data
    } catch (error) {
        console.log("Lỗi");
    }
}

// Xóa 1 sản phẩm theo id
export const deleteProduct = async (productId) => {
    try {
        const res = await axios.delete(`http://localhost:8080/products/${productId}`);
        return res.data;
    } catch (error) {
        console.log("Lỗi khi xóa sản phẩm", error);
    }
};

// Xóa 1 sản phẩm khỏi giỏ hàng theo id
export const deleteCartItem = async (cartItemId) => {
    try {
        const res = await axios.delete(`http://localhost:8080/carts/${cartItemId}`);
        return res.data;
    } catch (error) {
        console.log("Lỗi khi xóa sản phẩm khỏi giỏ hàng", error);
    }
};
