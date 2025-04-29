
"use client";

import React, { useState, useEffect } from "react";
import resultData from "../../resultData.json";

const DropDown = () => {
  const [openId, setOpenId] = useState(null);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(resultData);
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
          >
            <div className="w-[32px] flex items-center justify-center h-[32px] bg-[#0A8BEC]">
              {index+1}
            </div>
            <div>{data.Team}</div>
            <div>{data.Name}</div>
            <div>{data.Total}</div>
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
                  <p>{data.Total}</p>
                </div>
                <div className="flex justify-between">
                  <p>AA</p>
                  <p>{(data.D + data.E).toFixed(3)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Team</p>
                  <p>{data.Total}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
