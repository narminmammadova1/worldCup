import React from 'react'

const LiveTable = () => {
  return (
    <div>
        <table className='text-white text-base w-full'>
            <thead>
                <tr className=''>
                    <td className='w-1/10'></td>
                <td  className='w-1/10'></td>
                <td  className='w-1/10'></td>
                <td className='w-2/10 mx-12'></td>
                <td  className='w-1/10' ></td>
                <td  className='w-1/10'></td>
                <td className='w-2/10'></td>
                <td className=' w-1/10 '><div className=' text-center'>App</div></td>
                <td className='  w-2/10'><div className=' text-center mx-12'>AA</div></td>
                <td  className='  w-1/10'><div className='  text-end pe-[26px]'>Team</div></td>
                </tr>
            </thead>
            <tbody
            > 
                <tr  className="relative  after:absolute after:bottom-0   after:left-0 after:w-full after:h-[1px] after:bg-[linear-gradient(90deg,rgba(106,33,244,0)_0%,rgba(106,33,244,0.9)_44.79%)]">
                    <td  className=' align-top pt-2 '><div className=''> 
                        <img src="icon1.svg" alt="" />
                        </div></td>
                    <td className=' align-top pt-4'>
                        <div className='  flex gap-2'>
                        <img src="est.svg" alt="" /> <p>EST</p></div>
                        {/* 2222 */}
                         </td>
                    <td className=' text-start align-top pt-4'><div>212</div></td>
                    <td className='  align-top pt-4 '><div className=' me-12'>Amirbekov T.</div></td>
                    <td className='  align-top pt-4'><div>D:5.400</div></td>
                    <td className='  align-top pt-4'><div>E:8.800</div></td>
                    <td className='  align-top  pt-4'> <div>P:0.3</div></td>
                    <td className='  align-top pt-4'><div className='flex gap-3 items-center justify-center'><p>12.500</p><div className='w-[32px]  h-[32px] bg-[#0A8BEC] flex items-center justify-center'>7</div></div></td>
                    <td className='  align-top pt-4 '><div  className='flex gap-3 items-center justify-center  mx-12' ><p>102.360</p><div className='w-[32px] h-[32px] bg-[#0A8BEC]  flex items-center justify-center'>4</div></div></td>
                    <td className='pb-[22px] pt-4 '><div  className='flex gap-3 items-center justify-end'><p>102.360</p><div className='w-[32px] h-[32px] bg-[#0A8BEC]  flex items-center justify-center'>12</div></div></td>
                </tr>

                <tr  className="relative  after:absolute after:bottom-0   after:left-0 after:w-full after:h-[1px] after:bg-[linear-gradient(90deg,rgba(106,33,244,0)_0%,rgba(106,33,244,0.9)_44.79%)]">
                    <td  className=' align-top pt-2 '><div className=''> 
                        <img src="icon1.svg" alt="" />
                        </div></td>
                    <td className=' align-top pt-4'>
                        <div className='  flex gap-2'>
                        <img src="est.svg" alt="" /> <p>EST</p></div>
                        {/* 2222 */}
                         </td>
                    <td className=' text-start align-top pt-4'><div>212</div></td>
                    <td className='  align-top pt-4 '><div className=' me-12'>Amirbekov T.</div></td>
                    <td className='  align-top pt-4'><div>D:5.400</div></td>
                    <td className='  align-top pt-4'><div>E:8.800</div></td>
                    <td className='  align-top  pt-4'> <div>P:0.3</div></td>
                    <td className='  align-top pt-4'><div className='flex gap-3 items-center justify-center'><p>12.500</p><div className='w-[32px]  h-[32px] bg-[#0A8BEC] flex items-center justify-center'>7</div></div></td>
                    <td className='  align-top pt-4 '><div  className='flex gap-3 items-center justify-center  mx-12' ><p>102.360</p><div className='w-[32px] h-[32px] bg-[#0A8BEC]  flex items-center justify-center'>4</div></div></td>
                    <td className='pb-[22px] pt-4 '><div  className='flex gap-3 items-center justify-end'><p>102.360</p><div className='w-[32px] h-[32px] bg-[#0A8BEC]  flex items-center justify-center'>12</div></div></td>
                </tr>

                <tr  className="relative  after:absolute after:bottom-0   after:left-0 after:w-full after:h-[1px] after:bg-[linear-gradient(90deg,rgba(106,33,244,0)_0%,rgba(106,33,244,0.9)_44.79%)]">
                    <td  className=' align-top pt-2 '><div className=''> 
                        <img src="icon1.svg" alt="" />
                        </div></td>
                    <td className=' align-top pt-4'>
                        <div className='  flex gap-2'>
                        <img src="est.svg" alt="" /> <p>EST</p></div>
                        {/* 2222 */}
                         </td>
                    <td className=' text-start align-top pt-4'><div>212</div></td>
                    <td className='  align-top pt-4 '><div className=' me-12'>Amirbekov T.</div></td>
                    <td className='  align-top pt-4'><div>D:5.400</div></td>
                    <td className='  align-top pt-4'><div>E:8.800</div></td>
                    <td className='  align-top  pt-4'> <div>P:0.3</div></td>
                    <td className='  align-top pt-4'><div className='flex gap-3 items-center justify-center'><p>12.500</p><div className='w-[32px]  h-[32px] bg-[#0A8BEC] flex items-center justify-center'>7</div></div></td>
                    <td className='  align-top pt-4 '><div  className='flex gap-3 items-center justify-center  mx-12' ><p>102.360</p><div className='w-[32px] h-[32px] bg-[#0A8BEC]  flex items-center justify-center'>4</div></div></td>
                    <td className='pb-[22px] pt-4 '><div  className='flex gap-3 items-center justify-end'><p>102.360</p><div className='w-[32px] h-[32px] bg-[#0A8BEC]  flex items-center justify-center'>12</div></div></td>
                </tr>

           

         
                

                
             
          
            </tbody>
        </table>
      
    </div>
  )
}

export default LiveTable
