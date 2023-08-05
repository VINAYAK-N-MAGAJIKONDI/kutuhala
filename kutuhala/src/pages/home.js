import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Base from './base/base';
import Aboutus from './about/about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/aboutus" element={<Aboutus />} />
          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Home;
