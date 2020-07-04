import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../layout/Section';
import Row from '../grid/Row';
import { theme } from '../theme';
import Spacer from '../Spacer';
import { Title, SmallTitle } from '../Title';
import maintenance from '../../images/maintenance.png';
import cost from '../../images/cost.png';
import security from '../../images/security.png';
import scalability from '../../images/scalability.png';
import api from '../../images/api.png';
import integrations from '../../images/integrations.png';
import computer from '../../images/computer.png';
import gear from '../../images/gear.png';
import Card from '../Card';
import Button from '../Button';

const CustomSolutionsSection = ({ data }) => {
  return (
    <div>
      <Section background='#ffffff'>
        <SmallTitle className='center' small>
          Custom Solutions
        </SmallTitle>
        <Title type='h2' className='center'>
          Modern Applications for Modern Businesses
        </Title>
        <p className='center max-4'>
          By taking advantage of serverless technology, your business can save
          money, time and effort on advanced web applications such as APIs,
          management systems and integrations.
        </p>
        <p className='center max-4'>
          With JAMstack industry knowledge, I can upgrade your business to the
          modern web, making it faster, more secure and easy to maintain.
        </p>
        <Spacer height={theme.spacing.six} />

        <Row spacing={[0, 24]} breakpoints={[769, 1000]}>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={security} />
            </FeatureIcon>
            <FeatureTitle>High Security</FeatureTitle>
            <FeatureDescription>
              Static applications allow us to take security to the next level
              with minimal data flow and security on both the cloud database and
              your app. You data won't be going anywhere.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={scalability} />
            </FeatureIcon>
            <FeatureTitle>Scalability</FeatureTitle>
            <FeatureDescription>
              With modern database solutions, your application can scale
              infinitely, without the risk of overload.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={cost} />
            </FeatureIcon>
            <FeatureTitle>Cost Effectiveness</FeatureTitle>
            <FeatureDescription>
              By using pay-as-you-go services and modern cloud technologies, I
              can save your business money on every aspect of your application.
            </FeatureDescription>
          </Feature>
        </Row>
      </Section>
      <Section background='#f7f7f7'>
        <SmallTitle className='center'>Services</SmallTitle>
        <Title className='center dark-1 max-3' type='h2'>
          Whatever You Need, I've Got You Covered
        </Title>
        <p className='center dark-2 max-4'>
          Whether you need a custom integration, REST API, user/team management
          system or other work, you've come to the right place.
        </p>
        <Spacer height={theme.spacing.six} />
        <Row spacing={[12, 12]} breakpoints={[769, 1000]}>
          <Card widths={[6, 4]}>
            <FeatureIcon>
              <img className='green my-3' src={api} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Custom API</FeatureTitle>
            <FeatureDescription>
              A custom API will save you money on external services, and give
              you more control over the user experience of your application.
            </FeatureDescription>
            <FeatureDescription>
              I can develop and deploy your API on virtually any hosting
              platform, such as Google Cloud Platform, Netlify, or Heroku.
            </FeatureDescription>
          </Card>
          <Card widths={[6, 4]}>
            <FeatureIcon>
              <img className='green my-3' src={computer} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>
              Data Management Systems
            </FeatureTitle>
            <FeatureDescription>
              Custom database solutions built to fit your business.
            </FeatureDescription>
            <FeatureDescription>
              I'll set up a completely custom data management system for your
              business, giving you the best possible solution to manage your
              customers, team members or business relationships.
            </FeatureDescription>
          </Card>
          <Card widths={[6, 4]}>
            <FeatureIcon>
              <img className='green my-3' src={integrations} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Custom Integrations</FeatureTitle>
            <FeatureDescription>
              Integrations to help your business communicate with your audience
              better.
            </FeatureDescription>
            <FeatureDescription>
              Whatever tools you use or like, I'll integrate them into your
              application. Whether it's email lists, push notifications, or
              other services, I can integrate them with almost anything on your
              website.
            </FeatureDescription>
          </Card>
        </Row>
        <Button link='/contact' className='center mt-6' outlined>
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
const SmallFeature = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;
const SmallFeatureIcon = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-bottom: -25px;
  position: relative;
  width: 65px;
  height: 65px;
  img {
    width: 65px;
    height: 65px;
    margin: 0 auto;
    filter: hue-rotate(0deg) invert(50%) brightness(300%) saturate(0);
  }
`;
const SmallFeatureTitle = styled.h4`
  text-align: center;
  color: white;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export default CustomSolutionsSection;
