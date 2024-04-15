import React from 'react'
import { GrUserWorker } from "react-icons/gr";

export default function EmployeeCard({index}) {
  return (
    <div className='flex cursor-pointer h-[50px] w-full p-5 border-stone-300 border-b-1 gap-3'>
      <div className='text-gray-500'>{index}. Sakhile Mkhonta</div>
      <GrUserWorker size={20} className='text-red-500'/>
    </div>
  )
}
