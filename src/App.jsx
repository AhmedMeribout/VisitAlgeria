import NavBar from "./NavBar.jsx"
import Home from "./pages/Home.jsx"
import Discover from "./pages/Discover.jsx"
import Activities from "./pages/Activites.jsx"
import PlacesToGo from "./pages/PlacesToGo.jsx"
import TravelInfo from "./pages/TravelInfo.jsx"
import Blog from "./pages/Blog.jsx"

import {Route, Routes} from "react-router-dom"

function App() {
 

  return (
    <>
    <NavBar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/discover" element={<Discover/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/places-to-go" element={<PlacesToGo/>} />
        <Route path="/travel-info" element={<TravelInfo/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </div>
    
    </>
  );
}

export default App
