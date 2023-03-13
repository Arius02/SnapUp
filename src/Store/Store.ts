import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./ProductSlice"
import SingleProductSlice from './SingleProductSlice'
import SearchSlice from './SearchSlice'
import CartSlice from './CartSlice'
export const store = configureStore({
  reducer:{
    products:ProductReducer,
    search: SearchSlice,
    singleProduct: SingleProductSlice,
    cart: CartSlice
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
