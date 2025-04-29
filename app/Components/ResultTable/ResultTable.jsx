"use client"

import React, { useEffect, useState } from 'react'
import  resultData from "../../resultData.json"

const ResultTable = () => {
    const [datas,setDatas]=useState([])

    useEffect(()=>{

       setDatas(resultData) 
    },[])
  return (
    <div className='mt-[96px]'>
        <table className='w-full text-[16px]'>
            <thead className=''>
                <tr className=' '>
                    <td >Rank</td>
                <td>Team</td>
                <td>Bib</td>
                <td className='  '>Name</td>
                <td className='text-center'>D</td>
                <td className='text-center'>E</td>
                <td className='text-center'>Pen</td>
                <td className='text-center'>Total</td>
                </tr>
                <tr>
    <td colSpan="8" className="h-[48px]"></td> 
  </tr>
            </thead>
            <tbody className=' '>
                {datas.map((data,index)=>(
 <tr key={index} className="   relative after:absolute after:mb-[22px] after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[linear-gradient(90deg,rgba(106,33,244,0)_0%,rgba(106,33,244,0.9)_44.79%)]" > 
 <td ><div className='w-[32px]   absolute top-0 flex items-center justify-center h-[32px] bg-[#0A8BEC]'>1</div></td>
 <td className=''><div className=' absolute top-0 flex gap-2 text-base font-[400]'><img src={data.Flag} alt="" /> {data.Team}</div></td>
 <td><div className=' absolute top-0'>{data.Bib}</div></td>
 <td className='flex  items-start mt-0'><div >{data.Name}</div></td>
 <td className='text-center align-top'><div><p>{data.D}</p>
 <p>{data.D}</p></div></td>
 <td className='text-center align-top '><div><p>{data.E}</p>
 <p>{data.E}</p></div></td>  
 <td className='text-center align-top'><div><p>{data.Pen}</p>
 <p>{data.Pen}</p>
 <p>Score</p></div></td>               
 <td className='text-center align-top pb-[22px]'><div className='mb-[22px]'><p>{data.Total}</p>
 <p>{data.Total}</p>
 <p>{data.Total}</p></div>
 </td></tr>
                ))}
           
          
           


           
           

            </tbody>
        </table>
      
    </div>
  )
}

export default ResultTable
