import Home from "../pages/home"
import PodcastLanding from '../pages/podcast';
import Favourites from '../pages/favourites';
import Episodes from "../pages/episodes";
import AudioToggle from "../components/audio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          {/* Takes us to the detail page for our podcasts */}
          <Route path="/home/podcast/id/:id" element={<PodcastLanding />} />
          <Route path="/home/podcast/id/:id/podcast/episodes/:seasonId" element={<Episodes />} />
          <Route path="favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
