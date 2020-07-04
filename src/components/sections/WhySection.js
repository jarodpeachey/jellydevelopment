import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../layout/Section';
import Row from '../grid/Row';
import { theme } from '../theme';
import speed from '../../images/speed.png';
import security from '../../images/security.png';
import scalability from '../../images/scalability.png';
import cost from '../../images/cost.png';
import content from '../../images/content.png';
import integrations from '../../images/integrations.png';
import Spacer from '../Spacer';
import { Title, SmallTitle } from '../Title';

const WhySection = ({ data }) => {
  return (
    <div>
      <span id='get-started'></span>
      <Section background='white'>
        <SmallTitle className='center' small>
          The JAMstack Advantage(s)
        </SmallTitle>
        <Title type='h2' className='center'>
          The Future of Web Development
        </Title>
        <p className='center max-4'>
          The JAMstack is a modern tech stack used to build websites with better
          security, performance and scalability than ever before. At Jelly
          Development, I take advantage of serverless architecture to bring
          these benefits directly to you or your business.
        </p>
        <Spacer height={theme.spacing.six} />
        <Row spacing={[24]} breakpoints={[769, 1000]}>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={speed} />
            </FeatureIcon>
            <FeatureTitle>High Performance</FeatureTitle>
            <FeatureDescription>
              JAMstack sites load 10X faster than site built on Wordpress.
              Static sites take advantage of serverless architecture, so the
              page doesn't get slowed down by large data transfers.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={security} />
            </FeatureIcon>
            <FeatureTitle>Next-Level Security</FeatureTitle>
            <FeatureDescription>
              Static websites are more secure than any other type of site,
              because all data is hosted seperate from the site. No database, no
              security breaches.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={scalability} />
            </FeatureIcon>
            <FeatureTitle> Infinite Scalability</FeatureTitle>
            <FeatureDescription>
              Large website? Not a problem. Static websites scale automatically
              to fit your usage, making scaling your site a breeze.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={cost} />
            </FeatureIcon>
            <FeatureTitle>Cost Effecient</FeatureTitle>
            <FeatureDescription>
              Since static websites require no database development, and are
              infinitely scalable, you save money on development, maintenance
              and hosting costs.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={content} />
            </FeatureIcon>
            <FeatureTitle>Advanced Content Management</FeatureTitle>
            <FeatureDescription>
              JAMstack content management systems can give you full control over
              your website. I set your website up with the CMS of your choice,
              so you can control your online presence.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={integrations} />
            </FeatureIcon>
            <FeatureTitle>Seamless Integrations</FeatureTitle>
            <FeatureDescription>
              JAMstack sites are fully-customizable, built from the ground up.
              Using serverless functions, I can integrate with everything from
              Stripe to Wordpress.
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

export default WhySection;
