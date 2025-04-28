
import React from 'react'
import  ResultTable from "../Components/ResultTable/ResultTable"
const Result = () => {
  return (
    <div className=' text-white '>
      
    <section className='mt-[56px] ms-[116px] '>
   <div className='flex ms-2 gap-5 h-12'>
    <div className='flex rounded-[8px] w-[192px] border-[1px] text-[16px] border-[#1A1635]'>
      <div className='w-1/2  rounded-[8px] flex  items-center  justify-center bg-[#1A1635]'>MAG</div>
      <div className='w-1/2 rounded-2 flex  items-center  justify-center '>WAG</div>
    </div>
    <div className='flex rounded-[8px]  w-[240px] border-[1px] text-[16px] border-[#1A1635]'>
      <div className='w-1/2  rounded-[8px] flex   justify-center items-center  bg-[#1A1635]'>Qualication</div>
      <div className=' w-1/2 rounded-[8px]  justify-center flex  items-center '>Final</div>
    </div>
    <div className='flex w-[336px]  rounded-[8px]  border-[1px] text-[16px] border-[#1A1635]'>
      <div className='w-1/3 rounded-[8px] flex  items-center  justify-center  bg-[#1A1635]'>Apparatus</div>
      <div className='w-1/3 rounded-[8px] flex  items-center  justify-center '>Team</div>
      <div className='w-1/3 rounded-[8px] flex  items-center  justify-center '>All-around</div>

    </div>
    <div className='flex rounded-[8px] w-[168px] border-[1px] text-[16px] border-[#1A1635]'>
      <div className='w-1/2 rounded-[8px] flex  items-center  justify-center  bg-[#1A1635]'>Seniors</div>
      <div className='w-1/2 rounded-[8px] flex  items-center  justify-center '>Juniors</div>
    </div>
   </div>

<div className='flex items-center justify-center'>
<div className='icons mt-12 flex gap-[68px]'>
<div>
  <img src="icon1.svg" alt="" />
</div>
<div>
  <img src="icon2.svg" alt="" />
</div>
<div>
  <img src="icon3.svg" alt="" />
</div>
<div className=' text-center'>
  <img src="icon4.svg" alt="" />
 <p className=' text-[16px]  mt-2  leading-6'>Vault</p>
</div>
<div>
  <img src="icon5.svg" alt="" />
</div>
<div>
  <img src="icon6.svg" alt="" />
</div>

   </div>
        
</div>
  
   
      
    </section>
    <ResultTable/>
    </div>
  )
}

export default Result
