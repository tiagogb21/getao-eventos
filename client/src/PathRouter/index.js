import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLogin from '../pages/MainLogin'

function PathRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLogin />} />
      </Routes>
    </Router>
  )
}

export default PathRouter
