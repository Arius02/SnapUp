import success from "../assets/images/correct.png"
const CartMessage = ()=><div className="absolute top-0 left-0 right-0 bottom-0 z-[99999999999] flex items-center justify-center">
<div className='flex flex-col items-center p-5 text-lg text-white rounded-md bg-black bg-opacity-50'>
    <figure>
      <img src={success} className="w-[150px]" alt="success" />
    </figure>
    <p>The has been added to the cart successfully.</p>
</div>
</div>


export default CartMessage