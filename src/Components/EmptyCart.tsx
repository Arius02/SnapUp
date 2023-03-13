import empty from "../assets/images/shopping_cart.png"
import { Link } from "react-router-dom"

const EmptyCart = ()=> <div className="h-screen flex flex-col items-center justify-center">
  <figure className="text-center">
    <img src={empty} className="w-[200px]" alt="empty cart" />
  </figure>
    <p className="text-gray-500 text-xl my-2">Your shopping cart is empty.</p>
    <Link to="/" className="bg-primary text-lg text-white font-semibold  mt-3 px-5 py-2">Go Sopping Now</Link>
</div>

export default EmptyCart