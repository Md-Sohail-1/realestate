import { useState } from 'react'

import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

import { NavLink, Link } from 'react-router';

const Header = () => {
  const [toggle, setToggle] = useState(false)
 
  return (
    <>
      <input type="checkbox" id="checkbox" className="hidden" />  
      <header className="fixed top-0 w-full bg-slate-100 h-16 flex items-center text-blue-600 z-30 px-4 md:px-6 lg:px-10 shadow-sm" >
        <h1 className="text-2xl uppercase block md:w-84 lg:w-96 px-2 md:px-6 lg:px-12 font-bold">Prime Estate</h1>
        <label onClick={()=> setToggle(!toggle)} htmlFor="checkbox" className="absolute right-4 z-10 text-[24px] text-gray-100 cursor-pointer transition-all md:hidden">
            {
              toggle ? <FaXmark className="text-indigo-600"/> : <FaBars className="text-blue-600"/> 
            }
          </label>
        <nav className="absolute left-0 md:px-0 lg:px-12 py-6 w-full -top-[100vh] bg-slate-200 rounded-b-xl flex flex-col justify-start gap-0 shadow-md transition-all md:static md:flex-row md:h-auto md:justify-end md:gap-8 md:shadow-none md:bg-transparent">
          <h2 className="px-6 mt-5 mb-4 text-xl capitalize text-indigo-600 block md:hidden font-bold">Prime Estate</h2>
          <ul className="flex px-6 md:px-2 flex-col justify-evenly pb-2 md:flex-row md:justify-end md:gap-2 md:p-0 md:text-right">
            <NavLink to="/"><li className="py-2 md:px-4 text-slate-700 hover:text-indigo-600 font-semibold transition-all">Home</li></NavLink>
            <details className="py-2 md:w-content md:px-4 md:relative md:h-content md:w-content top-0 h-content text-slate-700 hover:text-indigo-600 transition-all">
              <summary className="font-semibold">Services</summary>
              <NavLink to="/buy-home"><li className="pt-2 md:w-full md:bg-slate-100 md:text-left md:absolute md:top-10 md:z-20 md:py-1 md:pt-0 md:px-2 px-6 text-slate-700 hover:text-indigo-600 font-regular md:text-sm transition-all">Buy a Home</li></NavLink>
              <NavLink to="/sell-home"><li className="pt-2 md:w-full md:bg-slate-100 md:text-left md:absolute md:top-16 md:z-20 md:py-1 md:pt-0 md:px-2 px-6 text-slate-700 hover:text-indigo-600 font-regular md:text-sm transition-all">Sell a Home</li></NavLink>
            </details>
            <a href="/#about"><li className="py-2 md:px-4 text-slate-700 hover:text-indigo-600 font-semibold transition-all">About</li></a>
            <a href="/#review"><li className="py-2 md:px-4 text-slate-700 hover:text-indigo-600 font-semibold transition-all">Reviews</li></a>
            <a href="/#contact_us"><li className="py-2 md:px-4 text-slate-700 hover:text-indigo-600 font-semibold transition-all">Contact Us</li></a>
          </ul>
        </nav>
      </header>  
    </>
  )
}

export default Header