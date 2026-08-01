import {getSellerproduct,createproduct,getAllProducts} from "../services/product.api";
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

    return {handleCreateProduct,handleGetSellerProducts,handleGetAllProducts};
}