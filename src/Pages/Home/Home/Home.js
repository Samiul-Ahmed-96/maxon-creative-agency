import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import OurInfo from '../OurInfo/OurInfo';
import Project from '../Project/Project';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <main>
            <Banner/>
            <About/>
            <Features/>
            <Project/>
            <OurInfo/>
            <Team/>
            <Testimonial/>
            <Contact/>
            
        </main>
    );
};

export default Home;