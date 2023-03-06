import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Home from "./Pages/Home"
import ProductDetails from "./Pages/ProductDetails"
import ProductCategory from "./Pages/ProductCategory"
import ShoppingCart from "./Pages/ShoppingCart"
import Search from "./Pages/Search"
import { Provider } from "react-redux"
import { store } from "./Store/Store"
import "./index.css"


const App = () => {

  const[open, setOpen] = useState<boolean>(false)
  return <Provider store={store}>
   <BrowserRouter>
      <Navbar setOpen={setOpen} open={open} />
        <Sidebar setOpen={setOpen} open={open} />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product-details" element={<ProductDetails/>}/>
    <Route path="/product-category" element={<ProductCategory />}/>
    <Route path="/shopping-cart" element={<ShoppingCart/>}/>
    <Route path="/search" element={<Search/>}/>
   </Routes>
   </BrowserRouter>
  </Provider>
}

export default App
