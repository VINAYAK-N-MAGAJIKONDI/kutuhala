import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Home from './Home/Home';
import Team from './team/team';
import Gallery from './gallery/gallery';
import Games from './games/games';
import Register from './register/register';
import UEvents from './upcomingevent/upcomingevent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Base() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<UEvents />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Games" element={<Games />} />

          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Base;
