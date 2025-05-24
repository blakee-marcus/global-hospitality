import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

import About from './pages/About';
import AreaOfExpertise from './pages/AreasOfExpertise';
import Blog from './pages/Blog';
import ClientList from './pages/ClientList';
import CodeOfEthics from './pages/CodeOfEthics';
import ConsultantProfiles from './pages/ConsultantProfiles';
import Contact from './pages/Contact';
import GlobalHospitality from './pages/GlobalHospitality';
import Guarantee from './pages/Guarantee';
import Home from './pages/Home';
import HowWeWork from './pages/HowWeWork';
import JobSearch from './pages/JobSearch';
import MatchProcess from './pages/MatchProcess';
import Proposal from './pages/Proposal';
import Testimonials from './pages/Testimonials';

import NavBar from './components/NavBar';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AnimatePresence mode='wait'>
          <NavBar />
          <Routes>
            <Route path='/about-us' element={<About />} />
            <Route path='/category/area-of-expertise' element={<AreaOfExpertise />} />
            <Route path='/gh-blog' element={<Blog />} />
            <Route path='/client-list' element={<ClientList />} />
            <Route path='/code-of-ethics' element={<CodeOfEthics />} />
            <Route path='/consultant-profiles' element={<ConsultantProfiles />} />
            <Route path='/global-hospitality' element={<GlobalHospitality />} />
            <Route path='/guarantee' element={<Guarantee />} />
            <Route path='/' element={<Home />} />
            <Route path='/how-we-work' element={<HowWeWork />} />
            <Route path='/positions-we-recruit' element={<JobSearch />} />
            <Route path='/match-process' element={<MatchProcess />} />
            <Route path='/proposal' element={<Proposal />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gh-testimonials' element={<Testimonials />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </HelmetProvider>
  );
}

export default App;
