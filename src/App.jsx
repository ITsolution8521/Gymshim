import { useState } from 'react'
import './App.css'
import store from './store'
import LoginPage from './component/Login/LoginPage'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderSidebar from './component/HeaderSidebar/HeaderSidebar'
import { ToastContainer } from "react-toastify";


function App() {


  return (
    <Provider store={store}>
        <Router>
        <HeaderSidebar />
        <ToastContainer position="top-right" autoClose={2000} />     
            <Routes>
                <Route path="/" element={<LoginPage/>} />
            </Routes>
        </Router>
    </Provider>
)
}

export default App
