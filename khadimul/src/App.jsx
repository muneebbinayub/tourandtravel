import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Umrah from "./components/ui/Umrah";
import Admin from "./components/Admin";

export const App = () => {
  return (
    <div className="h-screen bg-primary w-full">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/hero" element={<Hero/>}/>
          <Route path="/umrah" element={<Umrah/>}/>
          <Route path="/Admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;