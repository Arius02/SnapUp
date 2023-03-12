import { useEffect, } from "react"
import { useParams, } from "react-router-dom"
import { AppDispatch, RootState } from "../Store/Store"
import { useDispatch, useSelector } from "react-redux"
import { searchResult } from "../Store/SearchSlice"
import Title from "../Components/Title"
import Loader from "../Components/Loader"
import Product from "../Components/Product"

const Search = () => {
  const { id } = useParams()
  const Dispatch: AppDispatch = useDispatch()
  const state = useSelector((state: RootState) => state.search)
  useEffect(() => {
    Dispatch(searchResult(id ? id : ""))
  }, [id])

  return (<div className="container mx-auto px-10 mt-10">
      {state.loading ? <Loader /> : state.products.length == 0 ? <p>p</p> : <><Title title={`Search Result for ${id}`} />
        <div className="grid grid-cols-12 gap-5 mt-10 h-screen">
        {state.products.map((product, index) => <Product key={index} product={product} />)}
        </div>
      </>}
    </div>
  )
}

export default Search