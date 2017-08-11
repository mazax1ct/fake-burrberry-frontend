import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Detail from './Products/Detail';
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
          <Detail/>
          <Recommend/>
          <SectionsList/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
