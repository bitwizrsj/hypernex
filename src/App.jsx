// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home.jsx';
import Layout from './components/layout/Layout.jsx';
import About from './pages/about/About.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import BlogDetail from './pages/blogs/BlogDetail.jsx';
import Services from './pages/services/Services.jsx';
import Careers from './pages/Careers/Careers.jsx';
import Portfolio from './pages/portfolio/Portfolio.jsx';
import ProjectDiscussion from './pages/discuss/ProjectDiscussion.jsx';
import PrivacyPolicy2050 from './pages/Privacy-policy.jsx';
import MicrosoftStyleTermsAndConditions from './pages/TermsAndConditions.jsx';
import CancellationPolicy from './pages/CancellationPolicy.jsx';
import ShippingPolicy from './pages/Shipping.jsx';
import Contact from './pages/Contact.jsx';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/discuss" element={<ProjectDiscussion />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy2050 />} />
          <Route path="/terms-and-conditions" element={<MicrosoftStyleTermsAndConditions />} />
          <Route path='/cancellation-and-refunds' element={<CancellationPolicy />} />
          <Route path='/shipping-and-delivery' element={<ShippingPolicy />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
