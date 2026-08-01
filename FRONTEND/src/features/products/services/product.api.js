import axios from "axios";

const productApiInstance = axios.create({
    baseURL: "/api/products",
    withCredentials: true
})

export async function createproduct(formData) {

    const response = await productApiInstance.post("/", formData);
    return response.data;

}

export async function getSellerproduct() {

    const response = await productApiInstance.get("/seller");
    return response.data;

}