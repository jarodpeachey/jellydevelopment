import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../layout/Section';
import Row from '../grid/Row';
import { ThemeContext } from '../theme';
import speed from '../../images/speed.png';
import security from '../../images/security.png';
import computer from '../../images/computer.png';
import design from '../../images/design.png';
import content from '../../images/content.png';
import accessibility from '../../images/accessibility.png';
import Spacer from '../Spacer';
import { Title, SmallTitle } from '../Title';

const WhatIDoSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <span id='get-started'></span>
      <Section background='white'>
        <SmallTitle className='center' small>
          What I Do
        </SmallTitle>
        <Title type='h2' className='center'>
          Building The Modern Web
        </Title>
        <p className='center'>
          Managing a website is difficult. I make that easier by offering
          everything your website needs, from start to finish. Every website I
          build, I build with these 4 end goals in mind.
        </p>
        <Spacer height={theme.spacing.six} />
        <Row spacing={[24]} breakpoints={[769, 1000]}>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={design} />
            </FeatureIcon>
            <FeatureTitle>Modern Design</FeatureTitle>
            <FeatureDescription>
              With every website I build, I focus on a clean, modern design. I
              help you create your online brand by crafting a custom design
              system, unique to your business.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={content} />
            </FeatureIcon>
            <FeatureTitle>Painless Content Management</FeatureTitle>
            <FeatureDescription>
              Simple and intuitive content management systems, integrated
              directly into your site. I hook up every site I build to a content
              management system that makes it easy for you to update your
              websites content.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={speed} />
            </FeatureIcon>
            <FeatureTitle>Performance</FeatureTitle>
            <FeatureDescription>
              Performance is at the core of what I do. Faster websites bring
              more people to your website, which is why I optimize every aspect
              of your website for performance.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={accessibility} />
            </FeatureIcon>
            <FeatureTitle>Accesibility</FeatureTitle>
            <FeatureDescription>
              Web accessibility ensures that users with disabilities will be
              able to navigate your website. I make sure my sites are up to web
              accesibility standards, so your business can keep up with what's
              expected.
            </FeatureDescription>
          </Feature>
        </Row>
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
  }
`;
const FeatureTitle = styled.h3`
  text-align: center;
`;
const FeatureDescription = styled.p`
  text-align: center;
`;

export default WhatIDoSection;
