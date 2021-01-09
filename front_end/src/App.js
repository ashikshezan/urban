import React from 'react';
import About from './components/About';
import ContainerProductCard from './components/ContainerProductCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSlide from './components/HeroSlide'
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      <HeroSlide />
      <ContainerProductCard />
      <About />
      <Footer />
    </div>
  );
}