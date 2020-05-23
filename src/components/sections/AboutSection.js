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
          About Us
        </SmallTitle>
        <Title type='h2' className='center max-3'>
          Building the Modern Web, One Site at a Time
        </Title>
        <p className='center max-4'>
          I started building websites using the JAMstack over the last year or
          two, and was thourougly impressed with the performance, security and
          everything else they had to offer. Every site I've built with this
          stack has been incredibly fast, easy to work with, and modern.
        </p>
        <p className='center max-4'>
          However, I had some doubts about static sites. There's no way they can
          handle dynamic content very well, is there?
        </p>
        <p className='center max-4'>
          Well, there is. As I quickly found out, it's possible to build complex
          systems with static sites by taking advantage of serverless
          architechture. Building an API? Not a problem. How about
          authentication, or a full-blown application? Not a problem either!
        </p>
        <p className='center max-4'>
          So, I created Jelly Development to offer custom solutions for the
          JAMstack that can take your business beyond outdated website platforms
          like Wordpress, Joomla, or other CMSs.
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
