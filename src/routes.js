import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pages from './pages'

const Router = () => {
    <Routes>
        <Route path='login' element={<Pages.Login />} />
    </Routes>
}

export default Router