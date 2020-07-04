import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../layout/Section';
import Row from '../grid/Row';
import { theme } from '../theme';
import speed from '../../images/speed.png';
import security from '../../images/security.png';
import computer from '../../images/computer.png';
import design from '../../images/design.png';
import content from '../../images/content.png';
import accessibility from '../../images/accessibility.png';
import Spacer from '../Spacer';
import { Title, SmallTitle } from '../Title';
import Button from '../Button';
import { DaleMcGrewImage } from '../Image';

const WhatPeopleSaySection = ({ data }) => {
  return (
    <div>
      <span id='get-started'></span>
      <Section background='transparent'>
        <ImageWrapper>
          <DaleMcGrewImage />
        </ImageWrapper>
        <p className='center light-1 mobile-font-4 font-5' small>
          Jarod is a talented, reliable, motivated, and dedicated engineer. His
          solutions are technically deep. I would definitely welcome the
          opportunity to work with him again in the future, and I recommend him
          wholeheartedly.
        </p>
        <SmallTitle className='light-2 center mobile-font-2 font-3'>
          - Dale McGrew
        </SmallTitle>
        <Spacer height={theme.spacing.four} />
      </Section>
    </div>
  );
};

const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 94px;
  height: 94px;
  border-radius: 100px;
  border: 2px solid white;
  padding: 0px;
  img {
    height: 94px;
    width: 94px;
    border-radius: 100px;
  }
`;

const Feature = styled.div`
  // max-width: 80%;
  margin: 0 auto;
  @media (max-width: 1999px) {
    max-width: 80%;
  }
`;
const FeatureIcon = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-bottom: -10px;
  img {
    width: 95px;
    height: 95px;
    margin: 0 auto;
  }
`;
const FeatureTitle = styled.h3`
  text-align: center;
`;
const FeatureDescription = styled.p`
  text-align: center;
`;

export default WhatPeopleSaySection;
