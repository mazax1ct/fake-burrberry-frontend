import React from 'react';
import styled from 'styled-components';

const Recommend = styled.div`
  margin-bottom: 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  @media only screen and (min-width: 48rem) {
    margin-bottom: 0;
    padding-right: 0;
    padding-left: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default () =>
(
  <Recommend>
    <h2 className="recommend__title">WE RECOMMEND</h2>
    <div className="row">
      <div className="col-xs-6 col-sm-3 col-md-3">
        <a className="recommend-item" href="#">
            <img className="recommend-item__image" src="images/content/recommend_1.jpg" alt="Emroided Hooded"/>
            <h3 className="recommend-item__title">Emroided Hooded</h3>
            <h5 className="recommend-item__price">27 000 руб</h5>
          </a>
      </div>
      <div className="col-xs-6 col-sm-3 col-md-3">
        <a className="recommend-item" href="#">
            <img className="recommend-item__image" src="images/content/recommend_2.jpg" alt="Relaxed Fit Stretch Jeans"/>
            <h3 className="recommend-item__title">Relaxed Fit Stretch Jeans</h3>
            <h5 className="recommend-item__price">22 500 руб</h5>
          </a>
      </div>
      <div className="col-xs-6 col-sm-3 col-md-3">
        <a className="recommend-item" href="#">
            <img className="recommend-item__image" src="images/content/recommend_3.jpg" alt="Leather and House Check"/>
            <h3 className="recommend-item__title">Leather and House Check</h3>
            <h5 className="recommend-item__price">120 000 руб</h5>
          </a>
      </div>
      <div className="col-xs-6 col-sm-3 col-md-3">
        <a className="recommend-item" href="#">
            <img className="recommend-item__image" src="images/content/recommend_4.jpg" alt="Leather Wingtip Check"/>
            <h3 className="recommend-item__title">Leather Wingtip Check</h3>
            <h5 className="recommend-item__price">46 000 руб</h5>
          </a>
      </div>
    </div>
  </Recommend>
);
