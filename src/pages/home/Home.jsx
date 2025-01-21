import React from 'react';
import '../../App.css';
import './Home.css';

import Hero from './Hero.jsx';
import Client from './Clients.jsx';
import ServicesLayout from './Services.jsx';
import Works from './Works.jsx';
import TestimonialSlider from './TestimonialSlider.jsx';
import DarkCareersSection from './Job.jsx';


const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Client />
            <ServicesLayout />
            <Works />
            <TestimonialSlider />
            <DarkCareersSection />
        </div>
    );
};

export default Home;
