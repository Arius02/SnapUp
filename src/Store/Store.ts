import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./ProductSlice"
import SingleProductSlice from './SingleProductSlice'
export const store = configureStore({
  reducer:{
    products:ProductReducer,
    singleProduct: SingleProductSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
