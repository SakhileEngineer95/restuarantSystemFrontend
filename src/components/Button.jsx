import React from 'react'
import { FaClipboardList } from "react-icons/fa";

export default function Button({width, height, text}) {
  return (
    <div className={`flex flex-1 flex-col bg-red-500 w-full h-[${height}]
     text-white rounded-[4px] items-center justify-center
     hover:bg-red-400 font-semibold cursor-pointer`}>
        <FaClipboardList className='text-4xl cursor-pointer'/>
        <div>{text}</div>
    </div>
  )
}
