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
import GetStartedSection from './GetStartedSection';

const AboutSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Section background='#ffffff'>
        <SmallTitle className='center' small>
          About Me
        </SmallTitle>
        <Title type='h2' className='center max-3'>
          Building the Modern Web, One Site at a Time
        </Title>
        <p className='center max-4'>
          When I started developing websites using the JAMstack, I was
          thourougly impressed with the performance, security and scalability
          these sites had. Every site I've built with this stack has been
          incredibly fast, easy to work with, and overall amazing.
        </p>
        <p className='center max-4'>
          I decided to start developing these websites for other people as well,
          so that they could take advantage of the modern web. By doing so, they
          save money on development costs, maintenance costs and hosting costs.
          Whether it's a custom API, website, management system or full-blown
          app, the benefits are clear.
        </p>
        <p className='center max-4'>
          Each website I build is optimized for speed, accesibility and SEO, so
          you can reach more people through your online presence.
        </p>
        <p className='center max-4'>
          So, what are you waiting for? Contact me for a quote and I'll start
          developing your new website right away.
        </p>
        <Spacer height={theme.spacing.six} />
        <GetStartedSection className='bg-primary p-6 max-4 center' card />
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

export default AboutSection;
