import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { FcSalesPerformance } from "react-icons/fc";
import { LuLogOut } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { BsArrowDownCircleFill } from "react-icons/bs";

export default function NavBar({user_position}) {
  let menu = ""
  if(user_position == "waiter"){
    menu = <div className='flex gap-14 cursor-pointer'>
      <div className='flex flex-col justify-center'>
        <BsArrowDownCircleFill className='text-4xl text-red-500'/>
        <div className='text-gray-500 font-semibold'>Orders</div>
      </div>
      <div className='flex flex-col justify-center'>
        <FaShoppingCart className='text-4xl text-red-500'/>
        <div className='text-gray-500 font-semibold'>Products</div>
      </div>
      <div className='flex flex-col justify-center'>
        <LuLogOut className='text-4xl text-red-500'/>
        <div className='text-gray-500 font-semibold'>Logout</div>
      </div>
    </div>
  }else if(user_position == "manager"){
    menu = <div className='flex gap-14 cursor-pointer'>
      <div className='flex flex-col justify-center'>
        <BsArrowDownCircleFill className='text-4xl text-red-500'/>
        <div className='text-gray-500 font-semibold'>Orders</div>
      </div>
      <div className='flex flex-col justify-center'>
        <GrUserWorker className='text-4xl text-red-500'/>
        <div className='text-gray-500 font-semibold'>Employee M</div>
      </div>
      <div className='flex flex-col justify-center'>
        <FcSalesPerformance className='text-4xl text-red-500'/>
        <div className='text-gray-500 font-semibold'>Sales M</div>
      </div>
      <div className='flex flex-col justify-center'>
        <TbReportSearch className='text-4xl text-red-500'/>
        <div className='text-gray-500 font-semibold'>Reports</div>
      </div>
      <div className='flex flex-col justify-center'>
        <LuLogOut className='text-4xl text-red-500'/>
        <div className='text-gray-500 font-semibold'>Logout</div>
      </div>
    </div>
  }
  return (
    <div className='flex z-0 justify-between items-center bg-gray-100 sticky top-0 px-8 py-8 h-[80px] shadow-md'>
      <div className='flex flex-col justify-center cursor-pointer'>
        <AiFillHome className='text-4xl text-red-500'/>
        <div className='text-gray-500 font-semibold'>Home</div>
      </div>
      {menu}
    </div>
  )
}
