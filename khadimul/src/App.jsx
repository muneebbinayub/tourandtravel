import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <div className="h-screen bg-primary w-full">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/hero" element={<Hero/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;