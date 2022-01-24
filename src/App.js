import React from 'react';
import Home from '../src/components/Home/Home';
import OurServices from './components/OurServices/OurServices';
import Careers from './components/Careers/Careers';
import ContactUs from './components/ContactUs/ContactUs';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/OurServices" element={<OurServices />} />
          <Route exact path="/Careers" element={<Careers />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
