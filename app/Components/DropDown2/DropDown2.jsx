

"use client";

import React, { useState, useEffect } from "react";
import liveData from "../../liveData.json"

const DropDown2 = () => {
  const [openId, setOpenId] = useState(null);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(liveData);
  }, []);

  const toggleDropdown = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="space-y-4 mt-6">
      {datas.map((data,index) => (
        <div key={data.id} className="relative">
          <div
         
            className={`bg-[#1A1635] text-white h-[56px] px-4 py-2 flex justify-between items-center text-base ${
              openId === data.id ? "rounded-t-md" : "rounded-md"
            } w-full`}
          ><div className='w-[40px] h-[32px]' > 
     <img src={data.Icon} alt="" />
     </div>
            
            <div className=" ">{data.Team}</div>
            <div className=" flex justify w-1/2  text-start ">{data.Name}</div>
            <div>{data.Bib}</div>
            <button 
            className=" cursor-pointer"
               onClick={() => toggleDropdown(data.id)}>
              <img
                src={openId === data.id ? "arrow2.svg" : "arrow3.svg"}
                alt="arrow"
              />
            </button>
          </div>

          {openId === data.id && (
            <div className="p-4 w-full text-white bg-[#1A1635] rounded-b-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1 flex flex-col gap-3">
                <div className="flex justify-end gap-7">
                  <p>D: {data.D}</p>
                  <p>E: {data.E}</p>
                  <p>P: {data.Pen}</p>
                </div>
                <div className="flex justify-between">
                  <p>App</p>
                  <div className="flex items-center gap-[22px]">
                  <p>{data.App.score}</p>
                  <div className=" w-[32px] h-[32px] flex justify-center items-center bg-[#0A8BEC]">{data.App.count}</div>
                  </div>
                 
                </div>
                <div className="flex justify-between">
                  <p>AA</p>
                  <div className="flex items-center gap-[22px]">
                  <p>{data.AA.score}</p>
                  <div className=" w-[32px] h-[32px] flex justify-center items-center bg-[#0A8BEC]">{data.AA.count}</div>
                  </div>
                 
                </div>
                <div className="flex justify-between">
                  <p>Team</p>
                  <div className="flex items-center gap-[22px]">
                  <p>{data.TeamScore.score}</p>
                  <div className=" w-[32px] h-[32px] flex justify-center items-center bg-[#0A8BEC]">{data.TeamScore.count}</div>
                  </div>
                 
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDown2;
