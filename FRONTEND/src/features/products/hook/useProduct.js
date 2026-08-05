import {getSellerproduct,createproduct,getAllProducts,getProductById,addProductVariant} from "../services/product.api";
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
    async function handleAddProductVariant(productId, newProductVariant){
        const data = await addProductVariant(productId, newProductVariant);
        console.log(data);
        return data;
    }

    return {handleCreateProduct,handleAddProductVariant,handleGetSellerProducts,handleGetAllProducts,handlegetProductById};
}