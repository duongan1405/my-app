import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Content from '../Content/Content'
import Login from '../Login/Login'
import Register from '../Register/Register'

export default function RouterHeader() {
    return (
        <Routes>
            <Route path="/"element={<Content/>}/>
            <Route path="/login"element={<Login/>}/>
            <Route path="/register"element={<Register/>}/>
        </Routes>
    )
}
