import React from 'react';
import NavBar from '../components/Home/NavBar';
import SlideShow from '../components/Home/SlideShow';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <h1>Welcome to Visit Algeria!</h1>
            <p>Explore the beauty of Algeria.</p>
            <SlideShow/>
        </div>
    );
};

export default Home;