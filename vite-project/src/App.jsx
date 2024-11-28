import { useState } from 'react'
import Home from "../pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="" />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
