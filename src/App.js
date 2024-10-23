import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menubar from './Components/Menubar'; // Assuming the ResponsiveAppBar component is in the same directory
import Home from './Components/Home'; // Import your Home component
import Blog from './Components/Blog'; // Import your Blog component
import AboutUs from './Components/AboutUs'; // Import your About Us component

function App() {
  return (
    <Router>
      <Menubar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
