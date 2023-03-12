import OwlCarousel from 'react-owl-carousel';
import { formatPrice, getOldPrice } from '../utils/helprs';
import { useEffect, useState } from 'react';
import { BsCartPlusFill } from "react-icons/bs"
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../Store/Store';
import { useDispatch, useSelector } from 'react-redux';
import ProductType from '../utils/ProductType';
import { getProduct } from '../Store/SingleProductSlice';
import Loader from '../Components/Loader';
const ProductDetails = () => {
const {id} = useParams()
  const Dispatch: AppDispatch = useDispatch()
  const state = useSelector((state: RootState) => state.singleProduct)
  useEffect(() => {
      Dispatch(getProduct(id? id :""))
  }, [])
  useEffect(() => {

  }, [state])
  const showInMain = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = document.getElementById("main-img") as HTMLImageElement
    if (img) {
      img.src = e.currentTarget.src;
    }
  }
  const [quantity, setQuantity] = useState<number>(1)
  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > state.product?.stock) tempQty = state.product?.stock;
      return tempQty;
    })
  }
  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    })
  }

  return (state.loading ?<Loader/>: <div className='container mx-auto'>
    <div className='bg-white p-5 m-10'>
      <div className='grid grid-cols-2'>
        <div className='md:col-span-1 col-span-2'>
          <figure className='duration-150'>
            <img id='main-img' src={state.product.thumbnail} className='w-full ' alt={state.product.title} />
          </figure>
          <div className='flex space-x-2 mt-3 '>
            {state.product.images.map((img, index) => <figure className='group border-2 w-1/5 border-transparent 
               hover:border-secondary hover:border-2 '>
              <img src={img} key={index} className='w-full group-hover:scale-[.9] duration-150' onClick={showInMain} alt="state.product image" />
            </figure>)}
          </div>
        </div>
        <div className='md:col-span-1 col-span-2'>
          <div className='md:pr-0 md:pl-10 px-0 py-5'>
            <h2 className='pb-2 border-b-[1px] font-semibold text-xl'>{state.product.title}</h2>
            <p className='font-light text-md'>{state.product.description}</p>
            <div className='flex space-x-4 mt-4'>
              <h3 className='text-primary py-0  pr-2 after:absolute 
                relative after:left-full after:top-1 after:bottom-1 after:bg-primary after:w-[1px]'>
                Rating: <span className='text-gray-700 text-[16px]  '>{state.product.rating}</span>
              </h3>
              <h3 className='text-primary py-0  pr-2 after:absolute 
                relative after:left-full after:top-1 after:bottom-1 after:bg-primary after:w-[1px]'>
                Brand: <span className='text-gray-700 text-[16px]  '>{state.product.brand}</span>
              </h3>
              <h3 className='text-primary py-0  '>
                Category: <span className='text-gray-700 text-[16px]  '>{state.product.category}</span>
              </h3>
            </div>
            <div className='bg-[#F5F5F5] mt-5 px-2 py-3 '>
              <div className='flex '>
                <del className=' text-gray-500  text-lg'>{formatPrice(getOldPrice(state.product.price, state.product.discountPercentage))}</del>
                <h5 className=' ml-3 text-black'>
                  Inclusive of all taxes
                </h5>
              </div>
              <div className='flex items-center space-x-3'>
                <h2 className='text-primary text-4xl font-semibold'>${state.product.price}</h2>
                <h2 className='bg-primary text-sm  rounded-sm px-2 font-semibold text-white'> {state.product.discountPercentage} OFF</h2>
              </div>
            </div>
            <div className='mt-5 flex space-x-2 items-center'>
              <h4>Quantity:</h4>
              <div className='flex'>
                <button type='button' onClick={decreaseQty} className='flex align-center justify-center px-1 border-[1px]'>-</button>
                <p className='flex align-center justify-center px-4 border-[1px]'>{quantity}</p>
                <button type='button' onClick={increaseQty} className='flex align-center justify-center px-1 border-[1px]'>+</button>
              </div>
            </div>
            <div className='flex space-x-3 mt-5'>
              <button type='button' className='bg-primary bg-opacity-5 flex items-center py-2
                px-5  border-[1px] border-primary text-primary hover:bg-opacity-25 duration-200'>
                <BsCartPlusFill className='mr-2' />
                Add To Cart
              </button>
              <button className='bg-primary flex items-center py-2
                px-5  text-white hover:bg-opacity-90 duration-200'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetails