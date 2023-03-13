import { useParams, Params } from "react-router-dom"
import ProductByCategory from "../Components/ProductByCategory"
import {useEffect} from "react"
const ProductCategory = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  const { id }: Readonly<Params<string>> =useParams()
  return (
    <div className="container min-h-screen mx-auto md:px-10 px-3 mt-10"> 
      <ProductByCategory arg={`products/category/${id}`} title={`${id && id.toUpperCase()}`}  />
</div>
  )
}

export default ProductCategory