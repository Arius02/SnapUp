import { Link } from 'react-router-dom'

import ProductType from "../utils/ProductType"
import { formatPrice, getOldPrice } from '../utils/helprs'
// import { MdAddShoppingCart } from "react-icons/md"
// import { AiOutlineHeart } from "react-icons/ai"
interface propsType {
  product: ProductType
}
const Product = ({ product }: propsType) => {
  return <div className="lg:col-span-3 relative shadow 
  sm:col-span-6 col-span-12 h-[400px] bg-white">
    <Link to={`/product-details/${product.id}`}>
      <div className="">
        <figure className="relative">
          <img className="w-full h-[220px]" src={product.thumbnail} />
        </figure>
        {/* <div className="flex justify-between items-center px-2"> */}
          {/* <AiOutlineHeart className="text-primary text-xl " /> */}
          <h3 className="font-semibold text-center mt-5">
            <span className="text-gray-500">Brand: </span>
            {product.brand}
          </h3>
          {/* <MdAddShoppingCart className="text-primary text-xl "/> */}
        {/* </div> */}
        <h4 className="font-semibold text-center my-3">{product.title}</h4>
        <div className="relative w-fit mx-auto">
          <h5 className="absolute top-0 right-full font-light text-gray-400">
            <del>
              ${product.price}
            </del>
          </h5>
          <h4 className="font-bold   px-2 pb-2 text-center border-b-secondary border-b-2">
            {formatPrice(getOldPrice(product.price,product.discountPercentage))}
          </h4>
        </div>
        <div className="bg-primary absolute top-5 -left-2 p-1 text-white font-semibold">
          <h5>
            {product.category}
          </h5>
        </div>
        <div className="bg-primary  absolute top-0 right-0 p-1 px-2 text-white font-semibold">
          <h5 className="text-white font-semibold">
            %{product.discountPercentage} Off
          </h5>
        </div>
      </div>
    </Link>
  </div>
}

export default Product