import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ProductType from "../utils/ProductType";

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
  products: ProductType[]
  loading: boolean
}
const initialState = {
  products: [{id: 0,
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
  thumbnail:"",
  images: [""]}
  ],
  loading: true,
} as productType
const ProductReducer = createSlice({
  name:"product",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload.products
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading= false
    })
  },
})

export default ProductReducer.reducer