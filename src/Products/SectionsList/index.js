import React from 'react';
import styled from 'styled-components';

const SectionsList = styled.div`
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
(
  <SectionsList>
    <h2 className="sections-list__title">MORE FOR YOU</h2>
    <a className="sections-list__item" href="#">Men’s Black Trench Coats</a>
    <a className="sections-list__item" href="#">Men’s Short Trench Coats</a>
    <a className="sections-list__item" href="#">Men’s Long Trench Coats</a>
  </SectionsList>
);
