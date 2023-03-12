import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./ProductSlice"
import SingleProductSlice from './SingleProductSlice'
import SearchSlice from './SearchSlice'
export const store = configureStore({
  reducer:{
    products:ProductReducer,
    search: SearchSlice,
    singleProduct: SingleProductSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
