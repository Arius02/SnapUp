import Title from "./Title"
import { AppDispatch, RootState } from "../Store/Store"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Store/ProductSlice'
import { useEffect } from 'react'
import {ProductType} from "../utils/Interfaces"
import Product from "./Product"
import Loader from "./Loader"

interface propsType {
  arg: string
  title:string
}
const ProductByCategory = ({ arg, title }: propsType)=>{
  const Dispatch: AppDispatch = useDispatch()
  const state = useSelector((state: RootState) => state.products)
  useEffect(() => {
    Dispatch(getProducts(arg))
    
  }, [title])
  return state.loading ? <Loader/> : <>
      <Title title={title} />
      <div className="grid gap-5 mt-10 grid-cols-12">
        {state.products.map((product: ProductType) => (
          <Product product={product} />
        ))
        }
      </div>
    </> 

}


export default ProductByCategory