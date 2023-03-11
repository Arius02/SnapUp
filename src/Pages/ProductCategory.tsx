import { useParams, Params } from "react-router-dom"
import ProductByCategory from "../Components/ProductByCategory"

const ProductCategory = () => {
  const { id }: Readonly<Params<string>> =useParams()
  return (
    <div className="container mx-auto px-10 mt-10"> 
      <ProductByCategory arg={`products/category/${id}`} title={`${id && id.toUpperCase()}`}  />
</div>
  )
}

export default ProductCategory