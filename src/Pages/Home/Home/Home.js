import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Project from '../Project/Project';

const Home = () => {
    return (
        <main>
            <Banner/>
            <About/>
            <Features/>
            <Project/>
        </main>
    );
};

export default Home;