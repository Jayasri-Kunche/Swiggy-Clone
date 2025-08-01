import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import Hra from "../utils/Hra";
import { useSelector } from "react-redux";
const Head = () => {
    const isOnline = useOnline();
    const {out} = useContext(Hra)
    const cartItems = useSelector(store => store.cart.items)
    return (
        <div className="flex justify-between bg-lime-300 shadow-2xl">
            <img  className = "h-24 w-24" src = {logo} alt = "logo"/>
                <ul className="flex items-center">
                    <span>{out}</span>
                    <span>{isOnline ? "🟢🟢" : "🔴🔴"}</span>
                    <li className="font-bold text-xl p-2"><Link to ='/'>Home</Link></li>
                    <li className="font-bold text-xl p-2"><Link to ='/about'>About</Link></li>
                    <li className="font-bold text-xl p-2"><Link to = '/cart'>Cart-{cartItems.length}</Link></li>
                    <li className="font-bold text-xl p-2"><Link to = '/contact'>Contact</Link></li>
                    <li className="font-bold text-xl p-2"><Link to = '/login'>Login</Link></li>
                </ul>
        </div>
    )
}

export default Head;