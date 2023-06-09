export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD"
    }).format(price);
}
export const getDiscount = (price: number, discountPercentage: number): number =>{
  return (price) - (price * (discountPercentage / 100))
}