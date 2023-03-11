import { useState, useEffect, SetStateAction, Dispatch } from "react"
import { Link } from "react-router-dom"
import { AiFillInstagram } from "react-icons/ai"
import { BsFacebook, BsSearch } from "react-icons/bs"
import { MdOutlineContactSupport } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaShoppingBag } from "react-icons/fa"
import { RiShoppingCart2Fill } from "react-icons/ri"
import { CategoryLinks } from "../utils/constansts"


interface propsType{
  open : boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
const Navbar = ({ open, setOpen }: propsType) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth)
  const [showDown, setShowDown] = useState<boolean | null>(null)
  const handleOpen= ()=>{
    setTimeout(() => {
      setOpen(true)
    }, 10)
  }
  const handleSearchClick = (): void => {
    if (screenSize <= 768) {
      setShowDown(true)
    }
  }
  const handleInputDisplay = (): void => {
    setScreenSize(window.innerWidth)
    if (screenSize > 768) {
      setShowDown(false)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleInputDisplay)
    return () => {
      document.removeEventListener("resize", handleInputDisplay);
    };
  }, [screenSize])
  return <div className="bg-primary">

    <nav className=" mx-auto ">
      <div className="px-5 md:text-md text-sm text-white md:flex block justify-between py-1 text-center border-b border-[rgba(255,255,255,.3)]">
        <div className="space-x-5 flex md:mb-0 mb-2 md:justify-start justify-center  items-center ">
          <h5 className=" cursor-pointer link after ">
            Seller Center
          </h5>
          <h5 className=" cursor-pointer link  after">
            Download
          </h5>
          <div className=" cursor-pointer  flex items-center ">
            <h5>
              Follow us on:
            </h5>
            <AiFillInstagram className="mx-2" />
            <BsFacebook />
          </div>
        </div>
        <div className="flex space-x-5 md:justify-start justify-center">
          <div className=" cursor-pointer  flex items-center after">
            <MdOutlineContactSupport className="mr-2" />
            <h5 className="link">
              Support
            </h5>
          </div>
          <h5 className=" cursor-pointer link after">
            Register
          </h5>
          <h5 className=" cursor-pointer link ">
            Log in
          </h5>
        </div>
      </div>
      <div className="px-5 py-3 gap-x-2 grid grid-cols-12 relative">
        <div className="md:col-span-3 col-span-9 flex items-center text-white ">
          <GiHamburgerMenu className="text-2xl lg:mr-4 mr-1 cursor-pointer" onClick={()=>handleOpen()}/>
          <FaShoppingBag className="text-2xl mr-1" />
          <Link to="/">
            <h1 className="text-2xl">
              <span className="font-bold">Snap</span>Up.
            </h1>
          </Link>
        </div>
        <div className="md:col-span-8 col-sapn-1 p-1 flex md:bg-white bg-transparent" >
          <input className={`md:block hidden focus-visible:outline-0 caret-primary w-[96%]`} type="text" placeholder="Search your preferred items here" />
          <div className="md:bg-secondary flex items-center justify-center p-2 ">
            {!showDown && <BsSearch onClick={() => handleSearchClick()} className=" cursor-pointer  text-xl  text-white" />}
          </div>
        </div>
        <div className="md:col-span-1 col-span-2 flex justify-center items-center ">
          <Link to="/shopping-cart">
            <RiShoppingCart2Fill className="text-white text-3xl" />
          </Link>
        </div>
        <div className=" md:col-span-3"></div>
        <div className="md:col-span-9 col-span-12 md:mx-0 mx-auto flex space-x-2 text-white lg:text-sm md:text-[16px] text-[10px] font-light">
          {CategoryLinks.map((link) => <Link key={link.id} to={`/product-category${link.path}`} className="link">
            {link.name}
          </Link>)}
        </div>
        <div className={`${showDown ? "flex " : "hidden "} col-span-12 mt-4 bg-white p-1`} >
          <input className='focus-visible:outline-0 caret-primary w-[97%]' type="text" placeholder="Search your preferred items here" />
          <div className="bg-secondary flex items-center justify-center p-2">
            <BsSearch onClick={() => handleSearchClick()} className="cursor-pointer  text-xl text-white" />
          </div>
        </div>
      </div>
    </nav>
  </div>
}

export default Navbar