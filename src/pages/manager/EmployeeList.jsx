import React from 'react'
import EmployeeCard from '../../components/EmployeeCard'
import SearchBar from '../../components/SearchBar'

export default function EmployeeList() {
  return (
    <div className='flex flex-col gap-4 w-full'>
       <SearchBar placeholder='Search product'/> 
      <div className='flex flex-col gap-1'>
        <EmployeeCard index={1}/>
        <EmployeeCard index={2}/>
        <EmployeeCard index={3}/>
      </div>
    </div>
  )
}
