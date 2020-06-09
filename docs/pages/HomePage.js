import React from 'react';
import Header from '../components/Header';
import Carosel from '../components/Carosel';
import MultiItemCarosel from '../components/MultiItemCarosel'
import Footer from '../components/Footer'

const HomePage = () => (
  <React.Fragment>
    <Header />
    <Carosel />
    <MultiItemCarosel />
    <Footer />
  </React.Fragment>
)

export default HomePage