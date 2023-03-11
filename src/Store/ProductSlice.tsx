import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ProductType from "../utils/ProductType"

export const getProducts = createAsyncThunk("product/getProduuct", async (arg:string, thunkAPI)=>{
try{
  const response = await axios.get(`https://dummyjson.com/${arg}`)
  return response.data
}catch(error:any){
  if(!error.response)
  return thunkAPI.rejectWithValue(Response.error)
}
})
interface productType {
  products: []
  loading: boolean
}
const initialState = {
  products: [],
  loading: false,
} as productType
const ProductReducer = createSlice({
  name:"product",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true
      // console.log(action)

    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload.products
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading= false
      console.log(action.error , "act")

    })
  },
})

// export ProductReducer.actions
export default ProductReducer.reducer