import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import Home from '../pages/Home'
import MainLogin from '../pages/MainLogin'
import ShoppingCart from '../pages/ShoppingCart'

function PathRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<MainLogin />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default PathRouter
