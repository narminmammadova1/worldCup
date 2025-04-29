
import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className=' '>
        <div className="fixed top-[31px] left-[31px] z-50 lg:hidden">
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
            <nav>
                <ul className='   flex text-white font-extralight  text-[20px]'>
                    <Link href="/Live">
                      <div  className='w-[245px] flex  justify-center items-start   h-[52px] '>
                      
                      <div className='flex items-center gap-[6px] '> 
                      <div className='w-2 h-2 flex item-center   rounded-full bg-red-600'></div>
                      Live
                      </div>
                   </div></Link>
                    <li>  <div  className='w-[245px] flex  justify-center items-start   h-[52px] '>
                      
                      <div className='flex items-center gap-[6px]'> 
                      <div className='w-2 h-2 flex item-center  rounded-full bg-red-600'></div>
                      Starlist
                      </div>
                   </div></li>
                    <li>  <div  className='w-[245px] flex  justify-center items-start h-[52px] '>
                      
                      <div className='flex items-center gap-[6px]'> 
                      <div className='w-2 h-2 flex item-center  rounded-full bg-red-600'></div>
                      Schedule
                      </div>
                   </div></li>
                    <Link href="/Result" className='  '><div  className='w-[245px] flex  justify-center items-start  border-b-[2px] border-[#0A8BEC]  h-[52px] '>
                      
                      <div className='flex items-center gap-[6px] '> 
                      <div className='w-2 h-2 flex item-center  rounded-full bg-red-600'></div>
                      Results
                      </div>
                   </div></Link>
                    <li>  <div  className='w-[245px] flex  justify-center items-start  h-[52px] '>
                      
                      <div className='flex items-center gap-[6px]'> 
                      <div className='w-2 h-2 flex item-center  rounded-full bg-red-600'></div>
                      Medals
                      </div>
                   </div></li>
                </ul>
            </nav>
        </div>
    
        </header>
      
  
    </div>
  )
}

export default Header
