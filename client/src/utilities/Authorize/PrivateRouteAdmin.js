import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRouteAdmin = () => {

    const adminloggedIn = localStorage.getItem('adminToken');

    if (adminloggedIn) {
        return <Outlet />
    } else {
        return <Navigate to={"/admin/login"} />
    }

};

export default PrivateRouteAdmin;