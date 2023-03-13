import { cartType, cartItemType, addActionType, quantityActionType } from './../utils/Interfaces';
import { createSlice } from "@reduxjs/toolkit";

export const fetchFromLocalStorage = (): cartItemType[] => {
  let cart = localStorage.getItem("cart")
  if (cart) {
    return JSON.parse(cart)
  } else {
    return []
  }
}
const storeInLocalStorage = (data: cartItemType[]) => {
  localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
  carts: fetchFromLocalStorage(),
  itemsCount: 0,
  totalAmount: 0,
  isCartMessageOn: false
} as cartType

const CartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: addActionType) => {
      const isItemInCart = state.carts.find(item => item.ID === action.payload.ID)
      if (isItemInCart) {
        let tempCart = state.carts.map(item => {
          if (item.ID === action.payload.ID) {
            const tempQuantity = action.payload.quantity + item.quantity
            const totalPrice = tempQuantity * action.payload.newPrice
            return { ...item, quantity: tempQuantity, totalPrice: totalPrice }
          } else {
            return item;
          }
        })
        state.carts = tempCart
      } else {
        state.carts.push(action.payload)
      }
      storeInLocalStorage(state.carts)
    },
    CartQty: (state, action: quantityActionType) => {
      const tempCart = state.carts.map(item => {
        if (item.ID === action.payload.ID) {
          let tempQty = item.quantity;
          let totalPrice = item.totalPrice;
          if (action.payload.type === "INC") {
            if (tempQty !== item.stock)
              tempQty++;
            if (tempQty === item.stock) {
              tempQty = item.stock
            }
            totalPrice = tempQty * item.newPrice
          }
          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) {
              tempQty = 1
            }
            totalPrice = tempQty * item.newPrice
          }
          return { ...item, quantity: tempQty, totalPrice: totalPrice };
        } else {
          return item;
        }
      });
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    getTotal:(state)=>{
      state.totalAmount = state.carts.reduce((totalItem, cartItem) => totalItem += cartItem.totalPrice, 0)
      state.itemsCount = state.carts.length
      console.log(state.itemsCount)
    },
    deleteFromCart: (state, action) => {
      const tempCart = state.carts.filter(item => item.ID !== action.payload.ID)
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    clearCart: (state)=>{
      state.carts = []
      storeInLocalStorage(state.carts);
    },
    CartMessageOn: (state) => {
      state.isCartMessageOn = true;
      console.log(state.isCartMessageOn)
    },
    CartMessageOff: (state) => {
      state.isCartMessageOn = false;
      console.log(state.isCartMessageOn)

    }
  },
})

export const { addToCart, CartQty, deleteFromCart, getTotal, clearCart, CartMessageOn, CartMessageOff } = CartReducer.actions
export default CartReducer.reducer