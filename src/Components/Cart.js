import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/store/cartSlice";
const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const clearCart = () => {
             dispatch(clearItem())
    }
    return (
        <div className="w-1/2 mx-auto flex flex-col items-center">
            <h1 className="font-bold text-xl">Cart</h1>
            <button onClick={clearCart} className="m-2 p-2 bg-black text-white text-2xl rounded-xl">Clear cart</button>
            {cartItem.length ===0 && <h1>Add Items to your cart.</h1>}
            <ItemList items = {cartItem}/>
        </div>
    )
}

export default Cart;