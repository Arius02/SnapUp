import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {ProductType} from "../utils/Interfaces";

export const getProduct = createAsyncThunk("product/getSingleProduuct", async (arg:string, thunkAPI)=>{
try{
  const response = await axios.get(`https://dummyjson.com/products/${arg}`)
  return response.data
}catch(error:any){
  if(!error.response)
  return thunkAPI.rejectWithValue(Response.error)
}
})
interface productType {
  product: ProductType
  loading: boolean
}
const initialState = {
  product: {id: 0,
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
  thumbnail:"",
  images: ["",]
  },
  loading: true,
} as productType
const SingleProductReducer = createSlice({
  name:"Singleproduct",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false
      state.product = action.payload
    })
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading= false
    })
  },
})

// export ProductReducer.actions
export default SingleProductReducer.reducer