import React from 'react'
import { Header } from "./Header";
import Sidebar from './Sidebar';



export const HOC = (props) =>{
    return(
      <div className='max-h-screen overflow-y-auto'>
        <Header />
        <div className='grid grid-cols-12 bg-gray-200'>
          <div className='col-span-2 h-full'><Sidebar /></div>
          <div className='col-span-10 p-10'>
            <div className='rounded p-7'>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    )
}
