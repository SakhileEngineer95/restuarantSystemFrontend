import React from 'react'
import { IoSearch } from "react-icons/io5";

export default function SearchBar({placeholder}) {
  return (
    <div className='flex  border-red-500 border-2 items-center w-[400px] ps-2 m-3'>
        <IoSearch className='text-2xl text-red-500'/>
        <input
          type="text"
          placeholder={placeholder}
          className='border-0 py-2 pe-2 h-full flex-1'
        />
    </div>
  )
}
