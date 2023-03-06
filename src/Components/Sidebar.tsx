import React, { useEffect, useRef } from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai"
import { sidebarCategories } from "../utils/constansts"
interface propsType {
  open:boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Sidebar = ({ open, setOpen }: propsType) => {
const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
      function handleClickOutside(e:any) {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  

  return (
    <div ref={ref} className={`absolute top-0 bottom-0 left-0 p-4 overflow-hidden ${open ? "md:w-1/4 w-full" : "w-0 p-0"} duration-500 
    bg-white`}>
      <div id="head" className="flex justify-between items-center">
        <h2 className="font-bold text-xl">All Categories</h2>
        <AiOutlineClose className="text-xl cursor-pointer" onClick={()=> setOpen(false) }/>
      </div>
      <div className="flex flex-col mt-5">
        {sidebarCategories.map((category) => <Link key={category.id} to={`/product-category/${category.path}`} 
          className='mb-2 pb-2 border-b-[1px] duration-200 hover:opacity-75 hover:translate-x-2' >
          {category.name}
        </Link>)}
      </div>
    </div>
  )
}

export default Sidebar