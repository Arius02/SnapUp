import { AppDispatch, RootState, } from '../Store/Store'
import { useDispatch, useSelector, } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartQty, deleteFromCart, getTotal, clearCart } from '../Store/CartSlice'
import { formatPrice } from '../utils/helprs'
import { ImBin } from 'react-icons/im'
import EmptyCart from '../Components/EmptyCart'
import { Helmet } from "react-helmet";


const ShoppingCart = () => {
  const { carts, itemsCount, totalAmount } = useSelector((state: RootState) => state.cart)
  const Dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    Dispatch(getTotal())
  })
  return <>
    <Helmet>
      <title>
        Shopping Cart
      </title>
    </Helmet>
    <div className='container min-h-screen mx-auto '>
      {carts.length === 0 ? <EmptyCart /> : <>
        <div className=' md:grid grid-cols-12 hidden text-gray-500  bg-white my-5 px-5 py-2'>
          <h2 className='col-span-1'>S.N.</h2>
          <h2 className='col-span-3'>Product</h2>
          <h2 className='col-span-2'>Unit Price</h2>
          <h2 className='col-span-2'>Quantity</h2>
          <h2 className='col-span-2'>Total Price</h2>
          <h2 className='col-span-2'>Actions</h2>
        </div>
        <div className=' my-5 bg-white '>
          {carts.map((cart, index) => <div className='grid grid-cols-12 font-medium
         text-gray-500  px-5 py-3 border-b-[1px] border-b-gray-200'>
            <h2 key={cart.ID} className='col-span-1'>{index + 1}</h2>
            <Link to={`/product-details/${cart.ID}`} className="md:col-span-3 col-span-11 flex">
              <img src={cart.thumbnail} className="w-10 mr-1" alt="product picture" />
              <h2 >{cart.title}</h2>
            </Link>
            <h2 className='md:col-span-2 col-span-6 mt-4'>
              <span className="inline md:hidden">Price For Unit: </span>
              {formatPrice(cart.newPrice)}</h2>
            <div className='flex md:col-span-2 col-span-6 justify-center mt-4'>
              <button type='button' onClick={() => Dispatch(CartQty({ type: "DEC", ID: cart.ID }))} className='flex align-center justify-center px-1 border-[1px]'>-</button>
              <p className='flex align-center justify-center px-4 border-[1px]'>{cart.quantity}</p>
              <button type='button' onClick={() => Dispatch(CartQty({ type: "INC", ID: cart.ID }))} className='flex align-center justify-center px-1 border-[1px]'>+</button>
            </div>
            <h2 className='md:col-span-2 col-span-12 mt-2 text-primary'>
              <span className="inline md:hidden">Total Price: </span>
              {formatPrice(cart.totalPrice)}</h2>
            <button onClick={() => Dispatch(deleteFromCart({ ID: cart.ID }))}
              className='md:col-span-2 col-span-12 text-center hover:text-red-500 duration-200'>Delete</button></div>)}
        </div>
        <div className="bg-white py-3 px-5 flex justify-between">
          <button onClick={() => Dispatch(clearCart())}
            className="px-4 py-1 flex h-fit  items-center text-lg  border-[1px]  border-red-700 hover:bg-red-600 text-red-700 hover:text-white duration-500">
            <ImBin className="mr-1" />
            Clear Cart
          </button>
          <div className="flex flex-col justify-center" >
            <div className="flex items-center mb-1">
              <h6> Total ({itemsCount}) items:</h6>
              <h4 className="text-xl font-semibold ml-1 text-primary">{formatPrice(totalAmount)}</h4>
            </div>
            <button className="px-5 py-2 bg-secondary mt-2 text-white">
              Check Out
            </button>
          </div>
        </div></>}

    </div>
  </>

}

export default ShoppingCart