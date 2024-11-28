import { useState } from 'react'
import Home from "../pages/home"
import PodcastLanding from '../pages/podcast';
import Favourites from '../pages/favourites';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="../pages/podcast" element={<PodcastLanding />} />
          <Route path="favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
