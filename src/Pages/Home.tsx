import ProductsList from "../Components/ProductsList"
import {Helmet} from "react-helmet"
const Home = () => {
  return <>
  <Helmet>
    <title>
      Home
    </title>
  </Helmet>
    <div className="container min-h-screen mx-auto px-10">
       <div className="mt-10">
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
        </div>
    </div>
  </>
  
}

export default Home