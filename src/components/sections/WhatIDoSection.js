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
import Button from '../Button';

const WhatIDoSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <span id='get-started'></span>
      <Section background='#fff'>
        <SmallTitle className='center' small>
          About Me
        </SmallTitle>
        <Title type='h2' className='center'>
          Building The Modern Web
        </Title>
        <p className='center max-4'>
          Hey! My name is Jarod Peachey. I'm a web developer building modern
          websites for people so they can improve their online presence and
          their business, using a modern method called the JAMstack.
        </p>
        <p className='center max-4'>
          When I started developing websites using the JAMstack, I was
          thoroughly impressed with the performance, security, and scalability
          these sites had. Every site I've built with this stack has been
          incredibly fast, easy to work with, and overall amazing.
        </p>
        <p className='center max-4'>
          I decided to start developing these websites for other people as well
          so that they could take advantage of the modern web. By doing so, they
          save money on development costs, maintenance costs, and hosting costs.
          Whether it's a custom API, website, management system, or full-blown
          app, the benefits are clear.
        </p>
        <p className='center max-4'>
          Each website I build is optimized for speed, accessibility, and SEO,
          so you can reach more people through your online presence.
        </p>
        <p className='center max-4'>
          So what are you waiting for? Your new website is waiting for you!{' '}
        </p>
        <Spacer height={theme.spacing.four} />
        <Button className='center' primary>
          Contact Me
        </Button>
      </Section>
      <Section background='#f7f7f7'>
        <SmallTitle className='center'>What I Do</SmallTitle>
        <Title type='h2' className='center'>
          My Quality Pledge
        </Title>
        <p className='center max-4'>
          When I develop websites and applications for people, I don't cut
          corners. I make sure their site is up to not only their standards but
          mine as well. If your site doesn't satisfy me, I'll keep updating it
          until it does.
        </p>
        <p className='center max-4'>
          These are my standards for every website I build.
        </p>
        <Spacer height={theme.spacing.six} />
        <Row spacing={[24]} breakpoints={[769, 1200]}>
          <Feature widths={[6, 3]}>
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
          <Feature widths={[6, 3]}>
            <FeatureIcon>
              <img className='icon' src={content} />
            </FeatureIcon>
            <FeatureTitle>Painless Content Management</FeatureTitle>
            <FeatureDescription>
              Simple and intuitive content management systems integrated
              directly into your site. I hook up every site I build to a content
              management system that makes it easy for you to update the content
              of your website.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 3]}>
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
          <Feature widths={[6, 3]}>
            <FeatureIcon>
              <img className='icon' src={accessibility} />
            </FeatureIcon>
            <FeatureTitle>Accessibility</FeatureTitle>
            <FeatureDescription>
              Web accessibility ensures that users with disabilities will be
              able to navigate your website. I make sure my sites are up to web
              accessibility standards, so your business can keep up with what's
              expected.
            </FeatureDescription>
          </Feature>
        </Row>
      </Section>
    </div>
  );
};

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

export default WhatIDoSection;
