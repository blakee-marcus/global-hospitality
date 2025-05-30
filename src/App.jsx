import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

import About from './pages/About';
import AreaOfExpertise from './pages/AreasOfExpertise';
import Blog from './pages/Blog';
import CampusDining from './pages/CampusDining';
import Casinos from './pages/Casinos';
import ClientList from './pages/ClientList';
import Clubs from './pages/Clubs';
import CodeOfEthics from './pages/CodeOfEthics';
import ConsultantProfiles from './pages/ConsultantProfiles';
import Contact from './pages/Contact';
import FoodAndBeverageProduction from './pages/FBProduction';
import FoodServices from './pages/FoodServices';
import Guarantee from './pages/Guarantee';
import Home from './pages/Home';
import HotelResorts from './pages/HotelResorts';
import HowWeWork from './pages/HowWeWork';
import JobSearch from './pages/JobSearch';
import MatchProcess from './pages/MatchProcess';
import PrivateService from './pages/PrivateService';
import Proposal from './pages/Proposal';
import Restaurants from './pages/Restaurants';
import SeniorLiving from './pages/SeniorLiving';
import Spa from './pages/Spa';
import Testimonials from './pages/Testimonials';

import NavBar from './components/NavBar';

function App() {
  return (
      <Router>
        <AnimatePresence mode='wait'>
          <NavBar />
          <Routes>
            <Route path='/about-us' element={<About />} />
            <Route path='/category/area-of-expertise' element={<AreaOfExpertise />} />
            <Route path='/gh-blog' element={<Blog />} />
            <Route path='/campus-dining-and-campus-services' element={<CampusDining />} />
            <Route path='/casinos' element={<Casinos />} />
            <Route path='/client-list' element={<ClientList />} />
            <Route path='/clubs' element={<Clubs />} />
            <Route path='/code-of-ethics' element={<CodeOfEthics />} />
            <Route path='/consultant-profiles' element={<ConsultantProfiles />} />
            <Route path='/food-beverage-production-recruitment' element={<FoodAndBeverageProduction />} />
            <Route path='/food-services' element={<FoodServices />} />
            <Route path='/guarantee' element={<Guarantee />} />
            <Route path='/' element={<Home />} />
            <Route path='/hotels-resorts' element={<HotelResorts />} />
            <Route path='/how-we-work' element={<HowWeWork />} />
            <Route path='/positions-we-recruit' element={<JobSearch />} />
            <Route path='/match-process' element={<MatchProcess />} />
            <Route path='/private-service' element={<PrivateService />} />
            <Route path='/proposal' element={<Proposal />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/restaurants' element={<Restaurants />} />
            <Route path='/senior-living' element={<SeniorLiving />} />
            <Route path='/spas' element={<Spa />} />
            <Route path='/gh-testimonials' element={<Testimonials />} />
          </Routes>
        </AnimatePresence>
      </Router>
  );
}

export default App;
