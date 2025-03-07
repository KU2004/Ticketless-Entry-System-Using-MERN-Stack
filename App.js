import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Monuments from "./pages/Monuments";
import Forts from "./pages/Forts";
import Sanctuaries from "./pages/Sanctuaries";
import Temples from "./pages/Temples";
import Palaces from "./pages/Palaces";
import Caves from "./pages/Caves";
import Museums from "./pages/Museums";
import Maps from "./pages/Maps";
import Offers from "./pages/Offers";
import GiftCards from "./pages/GiftCards";
import Home from "./pages/Home";  // If Home.js is inside 'pages/' folder



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monuments" element={<Monuments />} />
        <Route path="/forts" element={<Forts />} />
        <Route path="/sanctuaries" element={<Sanctuaries />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/palaces" element={<Palaces />} />
        <Route path="/caves" element={<Caves />} />
        <Route path="/museums" element={<Museums />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gift-cards" element={<GiftCards />} />
      </Routes>
    </Router>
  );
}

export default App;
