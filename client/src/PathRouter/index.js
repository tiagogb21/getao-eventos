import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function PathRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default PathRouter
