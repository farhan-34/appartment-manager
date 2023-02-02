import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Apartment, Home, Login, Rooms } from '../pages';

const PrivateRoutes = () => {
    let auth = {'token': false}
    return (
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

const AppRouter = () => {
    return (
        <Routes>
            <Route element={ <PrivateRoutes /> }>
                <Route path='/' exact element={ <Home />} />
                <Route path='/apartment' element={ <Apartment />} />
                <Route path='/apartment/:id/rooms' element={ <Rooms /> } />
            </Route>
        </Routes>
    )
}

export default AppRouter