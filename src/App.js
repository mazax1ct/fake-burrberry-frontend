import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import DetailCard from './Products/DetailCard';
import Recommend from './Products/Recommend';
import SectionsList from './Products/SectionsList';
import Footer from './Footer';

import './App.css'

export default () => {
  return(
    <div>
      <Header/>
      <div className="page-content">
        <div className="container">
          <DetailCard/>
          <Recommend/>
          <SectionsList/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
