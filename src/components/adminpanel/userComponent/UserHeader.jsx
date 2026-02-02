"use client"
import React, { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import SidePopUpSlider from '../SidePopup';
import AddUser from './AddUser';
import { IoSearch } from 'react-icons/io5';

const UserHeader = () => {
          const [showPopUp, setShowPopUp] = useState(false);
      const [popupKey, setPopupKey] = useState(0);
    
      function openAddPopup() {
        setPopupKey((k) => k + 1);
        setShowPopUp(true);
      }
  return (
    <div className=' flex flex-row justify-between items-center '>
              <div className=" flex flex-row gap-4">
        <div>
          <select
            // value={status === undefined ? "" : status ? "Active" : "Inactive"}
            // onChange={(e) => {
            //   const val = e.target.value;
            //   if (val === "Active") setStatus(true);
            //   else if (val === "Inactive") setStatus(false);
            //   else setStatus(undefined);
            // }}
            className="  px-4 rounded-md h-[3.5rem] w-[10rem] bg-site-gray text-site-black font-semibold text-sm flex justify-center items-center outline-none"
          >
            <option value="" className=" text-site-black">
              By Status
            </option>
            <option value="Active" className=" text-site-black">
              Active
            </option>
            <option value="Inactive" className=" text-site-black">
              Inactive
            </option>
          </select>
        </div>
        <div className="">
          <div className="w-[24rem] rounded-md flex gap-2 items-center px-2 bg-site-gray">
            <IoSearch className="text-site-black size-5" />
            <input
              type="text"
              placeholder="Search by name/mobile"
            //   value={searchTerm}
            //   onChange={(e) => setSearchTerm(e.target.value)}
              className="h-[3.5rem] bg-site-gray text-sm outline-none placeholder:text-site-black flex-1 capitalize placeholder:capitalize"
            />
          </div>
        </div>
      </div>
         <div>
        <button  onClick={openAddPopup} className=" w-fit px-6 h-[3.5rem] bg-gradient-to-r from-site-main to-site-sub text-white flex items-center gap-2 justify-center cursor-pointer font-semibold rounded-md">
          <FiPlusCircle /> Create User
        </button>
      </div>

            <SidePopUpSlider
        showPopUp={showPopUp}
        handleClose={() => setShowPopUp(false)}
      >
        <AddUser key={popupKey}/>
      </SidePopUpSlider>
      
    </div>
  )
}

export default UserHeader
