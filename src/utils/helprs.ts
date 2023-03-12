export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD"
    }).format(price);
}
export const getOldPrice = (newPrice: number, discount: number): number =>{
  return (newPrice*100)/(100-discount)
}