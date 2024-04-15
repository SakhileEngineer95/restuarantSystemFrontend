import React from 'react'

export default function ProductCard() {
  return (
    <div className='flex items-center w-full h-[80px] border-b-2 justify-between pe-8 ps-3 cursor-pointer'>
        <div className='flex gap-3'>
        <img className="rounded-[500px] w-[45px] h-[45px]" src="logo_luxy.png" alt="Image description" />
        <div className='flex flex-col'>
            <div className='font-semibold text-gray-500'>Swazi Man</div>
            <div className='font-semibold text-xs text-gray-500'>Contains extra cheese, chicken and tomato sauce</div>
        </div>
        </div>
        <div className='flex flex-col'>
        <div className='font-semibold text-gray-500'>E 200,00</div>
        </div>
    </div>
  )
}
