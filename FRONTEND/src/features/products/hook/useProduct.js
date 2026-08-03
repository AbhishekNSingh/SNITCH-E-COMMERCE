import {getSellerproduct,createproduct,getAllProducts,getProductById} from "../services/product.api";
import {useDispatch} from "react-redux";
import {setSellerProducts,setProducts} from "../state/product.slice"


export const useproduct = () => {

    const dispatch = useDispatch();

    async function handleCreateProduct (formData) {
        const data = await createproduct(formData);
        return data.products;
    }

    async function handleGetSellerProducts (){
        const data = await getSellerproduct()
        dispatch(setSellerProducts(data.products));
        return data.products;

    }

    async function handleGetAllProducts(){
        const data = await getAllProducts();
        dispatch(setProducts(data.product));
        
    }
    async function handlegetProductById(productId){
        const data = await getProductById(productId);
        return data.product
    }

    return {handleCreateProduct,handleGetSellerProducts,handleGetAllProducts,handlegetProductById};
}