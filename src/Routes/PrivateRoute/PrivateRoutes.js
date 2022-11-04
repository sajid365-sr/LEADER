
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    

    if(loading){
        return <p>Please login</p>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>;
    }
    return children;

};

export default PrivateRoutes;