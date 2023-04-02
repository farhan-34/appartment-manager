import React from 'react'
import { Header } from "./Header";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Sidebar from './Sidebar';



export const HOC = (props) =>{
    return(
      <>
        <Header />
        <div className='grid grid-cols-7 bg-gray-200'>
          <div className='col-2'><Sidebar /></div>
          <div className='col-5 p-10'>
            <div className='w-100 bg-white rounded'>
              {props.children}
            </div>
          </div>
        </div>
        </>
    )
}
