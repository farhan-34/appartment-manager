import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Apartment, Home, Login, Rooms } from '../pages';
import { getAuthSession } from '../redux/authentication/authentication.selectors';

const PrivateRoutes = (props) => {
    return (
        props.auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

const AppRouter = (auth) => {
    return (
        <Routes>
            <Route element={ <PrivateRoutes auth={auth}/> }>
                <Route path='/home' exact element={ <Home />} />
                <Route path='/apartment' element={ <Apartment />} />
                <Route path='/apartment/:id/rooms' element={ <Rooms /> } />
                <Route path='*' element={ <Home /> } />
            </Route>
        </Routes>
    )
}

const mapStateToProps = createStructuredSelector({
    auth: getAuthSession,
});

export default connect(mapStateToProps)(AppRouter)