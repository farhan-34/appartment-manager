import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import { Apartment, Home, Login, Rooms } from '../pages';
import {PrivateRoute} from './PrivateRoute';

const AppRouter = () => {
    return (
        <Routes>
            <Route element={ <PrivateRoute /> }>
                <Route path='/home' exact element={ <Home />} />
                <Route path='/apartment' element={ <Apartment />} />
                <Route path='/apartment/:id/rooms' element={ <Rooms /> } />
                <Route path='*' element={ <Home /> } />
            </Route>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}


export default (AppRouter)