import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../layout/Section';
import Row from '../grid/Row';
import { ThemeContext } from '../theme';
import speed from '../../images/speed.png';
import security from '../../images/security.png';
import scalability from '../../images/scalability.png';
import cost from '../../images/cost.png';
import Spacer from '../Spacer';
import { Title, SmallTitle } from '../Title';
import Button from '../Button';

const GetStartedSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Section>
        {/* <SmallTitle className='center light-2' small>
          Get Started
        </SmallTitle> */}
        <Title type='h2' className='center light-1'>
          Ready to Go Static?
        </Title>
        <p className='center light-2 mb-none'>
          Contact us for a qoute and see just how fast your business can be on the web.
        </p>
        <Spacer height={theme.spacing.six} />
        <Button className='center' outlined white>
          Get Started
        </Button>
      </Section>
    </div>
  );
};

const Feature = styled.div`
  max-width: 80%;
  margin: 0 auto;
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
    filter: hue-rotate(60deg) invert(15%);
  }
`;
const FeatureTitle = styled.h3`
  text-align: center;
`;
const FeatureDescription = styled.p`
  text-align: center;
`;

export default GetStartedSection;
