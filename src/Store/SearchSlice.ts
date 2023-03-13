import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../utils/Interfaces";

export const searchResult = createAsyncThunk("product/search", async (arg:string, thunkAPI)=>{
try{
  const response = await axios.get(`https://dummyjson.com/products/search?q=${arg}`)
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
const SearchReducer = createSlice({
  name:"result",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(searchResult.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(searchResult.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload.products
    })
    builder.addCase(searchResult.rejected, (state, action) => {
      state.loading= false
    })
  },
})

export default SearchReducer.reducer