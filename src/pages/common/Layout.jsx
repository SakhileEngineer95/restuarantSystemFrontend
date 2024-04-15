import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';

export default function Layout() {
  return (
    <div className='w-screen overflow-auto h-screen'>
      <div className='flex flex-col bg-stone-100 h-full flex-1'>
        {/* navigation bar */}
        <NavBar user_position='manager'/>
        {/* main */}
        <div className='flex flex-1 pt-2'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
