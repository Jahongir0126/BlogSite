import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../Pages/Login/Login"
import Home from "../Pages/Home/Home"

export default function RoutesWrapper() {
  return (
    <Routes>
      <Route>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
