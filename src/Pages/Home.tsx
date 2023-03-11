import React, { useEffect } from 'react'
import Slider from "../Components/Slider"
import Products from "../Components/Products"
import ProductByCategory from "../Components/ProductByCategory"
const Home = () => {
  return (
    <div className="container mx-auto px-10">
      <Slider/>
      <div className="mt-10">
        <Products title="SEE OUR PRODUCTS" arg="products" />
        </div>
      <div className="mt-10">
        <Products  arg="products" title='SMARTPHONES' filter="smartphones" />
        </div>
      <div className="mt-10">
          <Products arg="products" title='SKIN CARE' filter="skincare" />        
        </div>
      <div className="mt-10">
        <Products arg="products" title='HOME DECORATION' filter="home-decoration" />        
        </div>
      <div className="mt-10">
        <Products arg="products" title='GROCERIES' filter="groceries" />        
        </div>
      <div className="mt-10">
        <Products arg="products" title='FRAGRANCES' filter="fragrances" />        
        </div>
      <div className="mt-10">
        <Products arg="products" title='LAPTOPS' filter="laptops" />        
        </div>
    </div>
  )
}

export default Home