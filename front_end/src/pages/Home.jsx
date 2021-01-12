import React, { Fragment } from 'react';
import About from '../components/About';
import ContainerProductCard from '../components/ContainerProductCard';
import Footer from '../components/Footer';
import HeroSlide from '../components/HeroSlide';

const Home = () => {
    return (
        <Fragment>
            <HeroSlide />
            <ContainerProductCard />
            <About />
            <Footer />
        </Fragment>
    )
}
export default Home;