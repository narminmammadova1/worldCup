"use client"

import React, { useEffect, useState } from 'react'
import liveData from "@/app/liveData.json"
const LiveTable = () => {
    const [liveDatas,setLiveDatas]=useState([])
    useEffect(()=>{
        setLiveDatas(liveData)
    },[])
  return (
    <div>
        <table className='text-white mt-[96px] text-base w-full'>
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
            {liveDatas.map((data,index)=>(
 <tr key={index}  className="relative  after:absolute after:bottom-0   after:left-0 after:w-full after:h-[1px] after:bg-[linear-gradient(90deg,rgba(106,33,244,0)_0%,rgba(106,33,244,0.9)_44.79%)]">
 <td  className=' align-top pt-2 '><div className='w-[48px] h-[32px]' > 
     <img src={data.Icon} alt="" />
     </div></td>
 <td className=' align-top pt-4'>
     <div className='  flex gap-2'>
     <img src={data.Flag} alt="" /> <p>{data.Team}</p></div>
     {/* 2222 */}
      </td>
 <td className=' text-start align-top pt-4'><div>{data.Bib}</div></td>
 <td className='  align-top pt-4 '><div className=' me-6 '>{data.Name}</div></td>
 <td className='  align-top py-4'> {data.D ? (
    <div className=' '> {data.D}</div>
  ) : data.App?.status ? (
    <div className={`w-[95px] py-2 text-sm font-medium rounded-lg text-white flex items-center justify-center ${data.App.status === "Wait" ? "bg-yellow-400" : "bg-green-400"}`}>
      {data.App.status}
    </div>
  ) : (
    <div className="text-gray-400">—</div>
  )}</td>
 <td className='  align-top pt-4'><div>{data.E}</div></td>
 <td className='  align-top  pt-4'> <div>{data.Pen}</div></td>
 <td className='align-top pt-4'>
  {data.App?.score && data.App?.count ? (
    <div className='flex gap-3 items-center justify-center'>
      <p>{data.App.score}</p>
      <div className='w-[48px] h-[24px] bg-[#0A8BEC] text-white text-sm font-medium rounded-md flex items-center justify-center'>
        {data.App.count}
      </div>
    </div>
  ) : null}
</td>

<td className='align-top pt-4'>
  {data.AA?.score && data.AA?.count ? (
    <div className='flex gap-3 items-center justify-center mx-12'>
      <p>{data.AA.score}</p>
      <div className='w-[48px] h-[24px] bg-[#0A8BEC] text-white text-sm font-medium rounded-md flex items-center justify-center'>
        {data.AA.count}
      </div>
    </div>
  ) : null}
</td>

<td className='pb-[22px] pt-4'>
  {data.TeamScore?.score && data.TeamScore?.count ? (
    <div className='flex gap-3 items-center justify-end'>
      <p>{data.TeamScore.score}</p>
      <div className='w-[48px] h-[24px] bg-[#0A8BEC] text-white text-sm font-medium rounded-md flex items-center justify-center'>
        {data.TeamScore.count}
      </div>
    </div>
  ) : null}
</td>
 {/* <td className='  align-top pt-4'><div className='flex gap-3 items-center justify-center'><p>{data.App.score}</p><div className='w-[32px]  h-[32px] bg-[#0A8BEC] flex items-center justify-center'>{data.App.count}</div></div></td> */}
 {/* <td className='  align-top pt-4 '><div  className='flex gap-3 items-center justify-center  mx-12' ><p>{data.App.score}</p><div className='w-[32px] h-[32px] bg-[#0A8BEC]  flex items-center justify-center'>{data.AA.count}</div></div></td> */}
 {/* <td className='pb-[22px] pt-4 '><div  className='flex gap-3 items-center justify-end'><p>{data.TeamScore.score}</p><div className='w-[32px] h-[32px] bg-[#0A8BEC]  flex items-center justify-center'>{data.TeamScore.count}</div></div></td> */}
</tr>

            ))}
               

           

              
           

         
                

                
             
          
            </tbody>
        </table>
      
    </div>
  )
}

export default LiveTable
