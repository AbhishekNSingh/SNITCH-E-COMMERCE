import { addItem, getCart,incrementCartItemApi } from "../services/cart.api"
import { useDispatch } from "react-redux";
import { addItem as addItemToCart, setItem,incrementCartItem } from "../state/cart.slice";

export const useCart = () => {
    const dispatch = useDispatch();

    async function handleAddItem({ productId, variantId }) {
        const data = await addItem({ productId, variantId })

        return data;

    }
    async function handleGetCart() {
        const data = await getCart();
        dispatch(setItem(data.cart.items))
    }

    async function handleIncrementCartItem({productId,variantId}){
        const data = await incrementCartItemApi({productId,variantId})
        dispatch(incrementCartItem({productId,variantId}))
    }

    return { handleAddItem, handleGetCart,handleIncrementCartItem }
}