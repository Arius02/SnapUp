// cart interfaces //
export interface cartItemType {
  ID: number
  quantity: number
  title: string
  thumbnail: string
  newPrice: number
  totalPrice: number
  stock: number
}
export interface cartType {
  carts: cartItemType[],
  itemsCount: number,
  totalAmount: number,
  isCartMessageOn: boolean
}
export interface addActionType {
  payload: cartItemType
  type: string
}
export interface quantityActionType {
  payload: {ID:number,
    type:string}
  type: string
}
export interface removeActionType {
  payload: {ID:number}
  type: string
}

// product interface 
export interface ProductType {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}