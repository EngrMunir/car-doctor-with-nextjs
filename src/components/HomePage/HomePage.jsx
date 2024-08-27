import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const HomePage = () => {
    return (
        <div className='h-screen'>
            <Banner />
            <About />
            <Services />
        </div>
    );
};

export default HomePage;