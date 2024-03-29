import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import { Apartment, Home, Login, Rooms } from '../pages';
import {PrivateRoute} from './PrivateRoute';
import ApartmentDetail from '../pages/apartmentDetail/apartmentDetail';
import MyApartment from '../pages/myApartment/MyApartment';

const AppRouter = () => {
    return (
        <Routes>
            <Route element={ <PrivateRoute /> }>
                <Route path='/' exact element={<Home />} />
                <Route path='/apartment' element={ <Apartment />} />
                <Route path='/apartment/room' element={<Rooms />} />
                <Route path='apartment/:id' element={<ApartmentDetail />} />
                <Route path='apartment/myApartment' element={<MyApartment />} />
            </Route>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}


export default (AppRouter)