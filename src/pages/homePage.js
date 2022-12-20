import React from 'react';
import TopPart from '../components/TopPart/index';
import MainPart from '../components/MainPartHP'
import BottomPartHP from '../components/BottomPartHP/index';
import Footer from '../components/Footer'
import Shelves from '../components/Shelves/index';
import Slider from '../components/Slider'


const HomePage = () => {
  return (
    <div>
      <TopPart/>
      <Shelves/>
      <Slider/>
      <MainPart/>
    
      <BottomPartHP/>
      <Footer/>
    </div>
  )
}

export default HomePage