import { useContext } from "react";
import CartContext from "../contexts/CartProvider";
import { useCartContextType } from "../contexts/CartProvider";

const useCart = (): useCartContextType => {
    return useContext(CartContext)
}

export default useCart