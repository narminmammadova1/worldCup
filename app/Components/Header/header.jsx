"use client"
import React, { useState } from 'react'
import Link from 'next/link';
 import SliderComponent from "../../Components/SliderComponent/SliderComponenet"
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname=usePathname()
  return (
    <div className=''>
        <div className=" fixed top-[31px] right-[31px]   z-50 lg:hidden">
    <img src="hamburger.svg" alt="Hamburger Menu" className="w-8 h-8" />
  </div>

        <header className='mt-[64px] sm:mt-[96px]'>

          <div className='flex   gap-8 '>   <div className='flex   items-start text-start'>
       <div>   <img className='mt-3 ' src="arrow.svg" alt="" />
       </div>
      
      </div>
      <div className='text-[20px]'>
      <h1 className='text-[24px] md:text-[36px]  text-white'>FIG ARTISTIC GYMNASTICS WORLD CUP</h1>
        <div className='flex gap-4 text-base md:text-[20px] text-[#9598B1]  md:text-[#F2F2F2]
'> 
           <p className=' border-r-1 pe-4'>Doha, Qatar</p>
        <p>12/03/2023 - 13/02/2023</p>
       
        </div>
     
        
      
      </div></div>
      <div className=' mt-12 border-b-[1px] border-[#1A1635]'>


<div>
  
</div>
<div className='w-full text-white  text-base md:text-[20px]'>
<SliderComponent>
  <Link href="/Live">
    <div 
    className={`w-[148px] lg:w-[245px] flex justify-center items-start ${pathname==="/Live" ? " border-b-[2px] border-[#0A8BEC]"  :""} h-[52px]`}>
      <div className="flex items-center gap-[6px]">
        <div className={`w-2 h-2 rounded-full ${pathname === "/Live" ? "bg-red-600" : "bg-transparent"}`}></div>
        Live
      </div>
    </div>
  </Link>
  <Link href="">
    <div 
   className={`w-[148px] lg:w-[245px] flex justify-center items-start ${pathname==="/StarList" ? " border-b-[2px] border-[#0A8BEC]"  :""} h-[52px]`}>
      <div className="flex items-center gap-[6px]">
        <div className={`w-2 h-2 rounded-full ${pathname === "/StarList" ? "bg-red-600" : "bg-transparent"}`}></div>
        Starlist
      </div>
    </div>
  </Link>
  <Link href="">
    <div 
    className={`w-[148px] lg:w-[245px] flex justify-center items-start ${pathname==="/Schedule" ? " border-b-[2px] border-[#0A8BEC]"  :""} h-[52px]`}>
      <div className="flex items-center gap-[6px]">
        <div className={`w-2 h-2 rounded-full ${pathname === "/Schedule" ? "bg-red-600" : "bg-transparent"}`}></div>
        Schedule
      </div>
    </div>
  </Link>
  <Link href="/Result">
    <div 
    className={`w-[148px] lg:w-[245px] flex justify-center items-start ${pathname==="/Result" ? " border-b-[2px] border-[#0A8BEC]"  :""} h-[52px]`}>
      <div className="flex items-center gap-[6px]">
        <div className={`w-2 h-2 rounded-full ${pathname === "/Result" ? "bg-red-600" : "bg-transparent"}`}></div>
        Results
      </div>
    </div>
  </Link>
  <Link href="">
    <div 
    className={`w-[148px] lg:w-[245px] flex justify-center items-start ${pathname==="/Medals" ? " border-b-[2px] border-[#0A8BEC]"  :""} h-[52px]`}>
      <div className="flex items-center gap-[6px]">
        <div className={`w-2 h-2 rounded-full ${pathname === "/Medals" ? "bg-red-600" : "bg-transparent"}`}></div>
        Medals
      </div>
    </div>
  </Link>
</SliderComponent>
</div>


     
         
        </div>
    
        </header>
      
  
    </div>
  )
}

export default Header
