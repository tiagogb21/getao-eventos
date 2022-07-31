import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
      </Routes>
    </Router>
  )
}

export default PathRouter
