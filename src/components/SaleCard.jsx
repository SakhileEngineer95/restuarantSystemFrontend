import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

export default function SaleCard({index,statusValue}) {
    let status = ''
    if(statusValue === 'successful'){
        status = <div className='flex flex-1 gap-1 items-start text-gray-500'>
            <div>Successful</div>
            <IoIosCheckmarkCircle size={23} className=' text-light-green-600'/>
        </div>
    }else{
        status = <div className='flex flex-1 gap-1 items-start text-gray-500'>
            <div>Failed</div>
            <IoMdCloseCircle size={23} className=' text-red-500'/>
        </div>
    }
  return (
    <div className='flex cursor-pointer justify-evenly h-[50px] w-full p-5 border-stone-300 border-b-1 gap-3'>
      <div className='flex-1 text-gray-500'>{index}. 0001</div>
      <div className='flex flex-1 flex-col'>
          <div className='text-gray-500'>002</div>
      </div>
      <div className='flex flex-1 items-start flex-col text-gray-500'><div>Mar 21 2024 20:00</div></div>
      {status}
    </div>
  )
}
