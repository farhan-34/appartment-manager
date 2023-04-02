import React from 'react'
import { Header } from "./Header";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Sidebar from './Sidebar';



export const HOC = (props) =>{
    return(
      <>
        <Header />
        <div className='grid grid-cols-12 bg-gray-200'>
          <div className='col-span-2'><Sidebar /></div>
          <div className='col-span-10 p-10'>
            <div className='min-w-full bg-white rounded min-h-full p-7'>
              {props.children}
            </div>
          </div>
        </div>
        </>
    )
}
