import React from 'react';
import styled from 'styled-components';

const DetailCard = styled.div`
  margin-bottom: 3rem;

  @media only screen and (min-width: 48rem) {
    margin-bottom: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default () =>
(
  <DetailCard>
    <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>
    <div className="row">
      <div className="col-xs-12 col-md-7">
        <div className="product-slider">
          <picture className="product-slider__item">
            <source srcset="images/content/slide_1@2x.jpg" media="(min-width: 768px)"/>
            <img className="product-slider__image" src="images/content/slide_1.jpg" alt="Slide 1"/>
          </picture>
          <picture className="product-slider__item">
            <source srcset="images/content/slide_2@2x.jpg" media="(min-width: 768px)"/>
            <img className="product-slider__image" src="images/content/slide_2.jpg" alt="Slide 2"/>
          </picture>
          <picture className="product-slider__item">
            <source srcset="images/content/slide_3@2x.jpg" media="(min-width: 768px)"/>
            <img className="product-slider__image" src="images/content/slide_3.jpg" alt="Slide 3"/>
          </picture>
          <picture className="product-slider__item">
            <source srcset="images/content/slide_4@2x.jpg" media="(min-width: 768px)"/>
            <img className="product-slider__image" src="images/content/slide_4.jpg" alt="Slide 4"/>
          </picture>
        </div>
      </div>
      <div className="col-xs-12 col-md-5">
        <div className="product-props">
          <div className="product-price-block">
            <h2 className="product-price">110 000 руб.</h2>
            <p className="product-code">Item 39428531</p>
          </div>
          <div className="product-colours">
            <p className="product-colours__title">Colour: Honey</p>
            <div className="product-colours__list">
              <button className="product-colours__button" type="button" style={{backgroundColor: '#232122'}} title="Colour: Black">Colour: Black</button>
              <button className="product-colours__button is-active" type="button" style={{backgroundColor: '#cfa880'}} title="Colour: Honey">Colour: Honey</button>
            </div>
          </div>
          <button className="button button--primary" type="button">SELECT A SIZE</button>
          <button className="button button--secondary" type="button">FIND IN STORE</button>
          <button className="sizetable-button" type="button">NEED SIZE HELP?</button>
        </div>
      </div>
    </div>
    <div className="product-accordions">
      <div className="accordion">
        <h2 className="accordion__toggle is-active">DESCRIPTION</h2>
        <div className="accordion__content is-active">
          <div className="product-info">
            <p>A refined car coat crafted in protective cotton gabardine.</p>
            <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
            <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
            <p>The piece is finished with a distinctive check undercollar.</p>
            <ul>
              <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</li>
              <li>Outer: 100% cotton</li>
              <li>Check lining: 100% cotton</li>
              <li>Sleeve lining: 100% viscose</li>
              <li>Buttons: buffalo horn</li>
              <li>Specialist dry clean</li>
              <li>Made in Europe</li>
              <li>Item 39428531</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion">
        <h2 className="accordion__toggle accordion__toggle--tablet_hidden">SHIPPING & RETURNS</h2>
        <div className="accordion__content">
          <div className="delivery-info">
            <div className="row">
              <div className="col-xs-12 col-md-7">
                <img className="delivery-info__image" src="images/content/delivery_img.jpg" alt="Delivery"/>
              </div>
              <div className="col-xs-12 col-md-5">
                <h2 className="delivery-info__title">DELIVERY</h2>
                <h4 className="delivery-info__subtitle">Free Next Day Delivery</h4>
                <p className="delivery-info__text">Order before 7pm Monday to Thursday for delivery the next day</p>
                <h4 className="delivery-info__subtitle">Collect-in-Store</h4>
                <p className="delivery-info__text">Order online today and pick up your items in store as early as tomorrow</p>
                <h4 className="delivery-info__subtitle">Free Returns</h4>
                <p className="delivery-info__text">Enjoy free returns on your order</p>
                <h4 className="delivery-info__subtitle">Free Gift Packaging</h4>
                <p className="delivery-info__text">Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DetailCard>
);
