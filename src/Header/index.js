import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg'

const Header = styled.header`
  display: flex;

  padding-top: 1em;
  padding-bottom: 1em;

  border-bottom: 1px solid #c6c6c6;

  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 48rem) {
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }
`;

const Logo = styled.a`
  font-weight: 700;
  line-height: 0.625rem;

  text-align: center;
  text-decoration: none;

  color: #171717;
`;

const LogoImage = styled.img`
  width: 138px;
  height: 10px;

  vertical-align: top;
`;

export default () =>
(
  <Header>
    <Logo href="/">
      <LogoImage src={logo} alt="BURBERRY" />
    </Logo>
  </Header>
);
