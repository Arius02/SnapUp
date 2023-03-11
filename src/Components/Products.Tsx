import { AppDispatch, RootState } from "../Store/Store"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Store/ProductSlice'
import { useEffect, useState } from 'react'
import Title from "../Components/Title"
import ProductType from "../utils/ProductType"
import Product from "./Product"
import loaderSVG from "../assets/images/loader.svg"

interface propsType {
  arg: string
  filter?: string
  title:string
}
const Products = ({ arg, filter, title }: propsType)  => {
  const Dispatch: AppDispatch = useDispatch()
  const [category, setCategory] = useState<ProductType[] >([])
  const state = useSelector((state: RootState) => state.products)
  const byCategory = (): ProductType[] => state.products.filter((product: ProductType) => product.category === filter)
  useEffect(() => {
if(!filter){
  Dispatch(getProducts(arg))
}
  }, [])
useEffect(()=>{
  setCategory(byCategory())
}, [state])
  return !filter?<>
        <Title title={title} />
    {state.loading? <div className="flex justify-center">
      <img src={loaderSVG} alt="loader" />
    </div> : <div className="grid gap-5 mt-10 grid-cols-12">
        { state.products.map((product: ProductType) => (
            <Product product={product} />
          ))
          }
        </div>}
  </> : <>
        <Title title={title} />
      {state.loading? <div className=" flex justify-center">
        <img src={loaderSVG} alt="loader" />
      </div> : <div className="grid mt-10 gap-5 grid-cols-12">
          {category.map((product: ProductType) => (
            <Product product={product} />
          ))
          }
        </div>}
      </>}
  
  


export default Products