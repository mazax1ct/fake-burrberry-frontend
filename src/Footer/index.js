import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 1.5rem 0.5rem 2rem;

  background-color: #f3f3f3;

  @media only screen and (min-width: 48rem) {
    padding-top: 2em;
    padding-right: 0;
    padding-bottom: 1.5rem;
    padding-left: 0;
  }
`;

export default () =>
(
  <Footer>
    <div className="container">
      <div className="footer-menu">
        <div className="row">
          <div className="col-md-3">
            <h4 className="footer-menu__title">CUSTOMER SERVICE</h4>
            <a className="footer-menu__link" href="#">Contact Us</a>
            <a className="footer-menu__link" href="#">Payment</a>
            <a className="footer-menu__link" href="#">Shipping</a>
            <a className="footer-menu__link" href="#">Returns</a>
            <a className="footer-menu__link" href="#">Faqs</a>
            <a className="footer-menu__link" href="#">Live Chat</a>
            <a className="footer-menu__link" href="#">The Burberry App</a>
            <a className="footer-menu__link" href="#">Store Locator</a>
          </div>
          <div className="col-md-3">
            <h4 className="footer-menu__title">OUR COMPANY</h4>
            <a className="footer-menu__link" href="#">Our History</a>
            <a className="footer-menu__link" href="#">Burberry Group Plc</a>
            <a className="footer-menu__link" href="#">Careers</a>
            <a className="footer-menu__link" href="#">Corporate Responsibility</a>
            <a className="footer-menu__link" href="#">Site Map</a>
          </div>
          <div className="col-md-3">
            <h4 className="footer-menu__title">LEGAL & COOKIES</h4>
            <a className="footer-menu__link" href="#">Terms & Conditions</a>
            <a className="footer-menu__link" href="#">Privacy Policy</a>
            <a className="footer-menu__link" href="#">Cookie Policy</a>
            <a className="footer-menu__link" href="#">Accessibility Statement</a>
            <a className="footer-menu__link" href="#">Japan Only - SCTL indications</a>
          </div>
        </div>
      </div>
      <div className="footer__buttons">
        <button className="footer__button" type="button">Shipping country: Russian Federation</button>
        <button className="footer__button" type="button">Language: English</button>
      </div>
      <h3 className="footer__title">Need help?</h3>
      <a className="footer__contact-link" href="#">Find out more and contact us</a>
    </div>
  </Footer>
);
