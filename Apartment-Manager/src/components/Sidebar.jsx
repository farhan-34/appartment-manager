import React from 'react'
import { ApartmentRounded, HomeOutlined, HouseRounded, ListAltRounded } from '@mui/icons-material'
import { List, ListItem } from '@mui/material'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (

        <div class="min-h-screen bg-white overflow-hidden">
            <ul class="py-4">
                <li>
                    <Link to="/home" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><HomeOutlined /></span>
                        <span class="text-sm font-medium">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/apartment" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><ApartmentRounded /></span>
                        <span class="text-sm font-medium">Apartment</span>
                    </Link>
                </li>
                <li>
                    <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><HouseRounded /></span>
                        <span class="text-sm font-medium">My Apartment</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><ListAltRounded /></span>
                        <span class="text-sm font-medium">Grocery</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                        <span class="text-sm font-medium">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar