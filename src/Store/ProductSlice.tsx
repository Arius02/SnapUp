import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

// export ProductReducer.actions
export default ProductReducer.reducer