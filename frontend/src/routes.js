import {useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import _ from 'lodash'
import useAuth  from './context/useAuth';

import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Dashboard from './pages/dashboard/home';
import AccountEdit from './pages/dashboard/edit';

function PrivateRoute({ children, ...rest }) {
    const navigate = useNavigate()
    const { isAuthenticated } = useAuth()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(!_.isEmpty(isAuthenticated() || {}) && !_.isEmpty(isAuthenticated()?.user || {})){
            setIsLoggedIn(true)
        }else{
            navigate('/login')
        }
    }, [isAuthenticated])

    return (
      <>{children}</> 
    );
}

const Pages = props => {

    return (
    <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/edit" element={<PrivateRoute><AccountEdit /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    )
}


export default Pages
