import { useEffect, } from "react"
import { useParams, } from "react-router-dom"
import { AppDispatch, RootState } from "../Store/Store"
import { useDispatch, useSelector } from "react-redux"
import { searchResult } from "../Store/SearchSlice"
import Title from "../Components/Title"
import Loader from "../Components/Loader"
import Product from "../Components/Product"
import {Helmet} from "react-helmet"

const Search = () => {
  const { id } = useParams()
  const Dispatch: AppDispatch = useDispatch()
  const state = useSelector((state: RootState) => state.search)
  useEffect(() => {
    Dispatch(searchResult(id ? id : ""))
      window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  return <>
<Helmet>
  <title>Search about:{id}</title>
</Helmet>
    <div className="container mx-auto px-10 mt-10">
      {state.loading ? <Loader /> : state.products.length == 0 ? <p className="min-h-screen font-bold text-xl text-red-900">
        No Products Found.
      </p> : <><Title title={`Search Result for ${id}`} />
        <div className="grid grid-cols-12 gap-5 mt-10 min-h-screen">
          {state.products.map((product, index) => <Product key={index} product={product} />)}
        </div>
      </>}
    </div>
  </>
  
}

export default Search