import Home from "./Home"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cuisine from "./Cuisine";
function Pages() {
  return (
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes> 
      
    
  )
}

export default Pages