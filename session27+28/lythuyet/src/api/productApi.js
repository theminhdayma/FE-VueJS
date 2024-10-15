// Api lấy toàn bộ thông tin của sản phẩm
import axios from "axios"

export const getAllProduct = async () => {
    const res = await axios.get("http://localhost:8080/products")
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