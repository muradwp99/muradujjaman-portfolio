import React from 'react';
import Header from '../Shared/Header';
import Experience from './Experience';
import './Home.css';
import HomeBanner from './HomeBanner';
import MyAdvantage from './MyAdvantage';
import PopularService from './PopularService';
import Projects from './Projects';


const Home = () => {
    return (
        <div>

            <Header></Header>
            <HomeBanner></HomeBanner>
            <MyAdvantage></MyAdvantage>
            <PopularService></PopularService>
            <Experience></Experience>
            <Projects></Projects>

        </div>
    );
};

export default Home;