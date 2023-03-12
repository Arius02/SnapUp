import Slider from "../Components/Slider"
import ProductsList from "../Components/ProductsList"

const Home = () => {
  return (
    <div className="container mx-auto px-10">
      <Slider/>
      { <> <div className="mt-10">
        <ProductsList title="SEE OUR PRODUCTS" arg="products" />
        </div>
      <div className="mt-10">
        <ProductsList  arg="products" title='SMARTPHONES' filter="smartphones" />
        </div>
      <div className="mt-10">
          <ProductsList arg="products" title='SKIN CARE' filter="skincare" />        
        </div>
      <div className="mt-10">
        <ProductsList arg="products" title='HOME DECORATION' filter="home-decoration" />        
        </div>
      <div className="mt-10">
        <ProductsList arg="products" title='GROCERIES' filter="groceries" />        
        </div>
      <div className="mt-10">
        <ProductsList arg="products" title='FRAGRANCES' filter="fragrances" />        
        </div>
      <div className="mt-10">
        <ProductsList arg="products" title='LAPTOPS' filter="laptops" />        
        </div></>}
    </div>
  )
}

export default Home