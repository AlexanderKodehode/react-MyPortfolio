import React from 'react';
import {NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from "./pages/LandingPage";
import ProsjectPage from './pages/ProsjectPage';
import AboutMePage from './pages/AboutMePage';


function App() {
  return (
    <div className="App">
      <header>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/ProsjectPage"}>Prosjects</NavLink>
        <NavLink to={"/AboutMePage"}>About</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/ProsjectPage" element={<ProsjectPage/>}/>
        <Route path="/AboutMePage" element={<AboutMePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
