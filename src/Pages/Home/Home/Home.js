import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import OurInfo from '../OurInfo/OurInfo';
import Project from '../Project/Project';
import Team from '../Team/Team';

const Home = () => {
    return (
        <main>
            <Banner/>
            <About/>
            <Features/>
            <Project/>
            <OurInfo/>
            <Team/>
        </main>
    );
};

export default Home;