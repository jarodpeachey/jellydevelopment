import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../layout/Section';
import Row from '../grid/Row';
import { ThemeContext } from '../theme';
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
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Section background='#ffffff'>
        <SmallTitle className='center' small>
          Static Everything
        </SmallTitle>
        <Title type='h2' className='center max-3'>
          Advanced JAMstack Solutions
        </Title>
        <p className='center max-4'>
          Static websites used to be just that: static, boring, and not very
          dynamic.
        </p>
        <p className='center max-4'>
          But today, static sites are more than that. They're even more than a
          fast website with a CMS integrated.
        </p>
        <p className='center max-4'>
          With the JAMstack, creating advanced web applications, such as APIs,
          Software-as-a-Service, and user management systems is simpler than
          ever. By taking advantage of serverless architecture, your business
          can save money on development costs, hosting costs, management
          costs... well, you get the idea.
        </p>
        <p className='center max-4'>The possibilities are endless.</p>
      </Section>
      <Section background='#f7f7f7'>
        <SmallTitle className='center'>The JAMstack Advantage</SmallTitle>
        <Title type='h2' className='center'>
          Everything Better About Static
        </Title>
        <Spacer height={theme.spacing.six} />
        <Row spacing={[0, 24]} breakpoints={[769, 1000]}>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={maintenance} />
            </FeatureIcon>
            <FeatureTitle>Low Maintenance</FeatureTitle>
            <FeatureDescription>
              Using the JAMstack ecosystem, your user management system just got
              easier to manage. Your API, database, and development just did
              too.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={security} />
            </FeatureIcon>
            <FeatureTitle>High Security</FeatureTitle>
            <FeatureDescription>
              Static applications allow us to take security to the next level
              with minimal data flow and security on both the cloud database and
              your app.
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
              By taking advantage of the JAMstack ecosystem, you'll save money
              on servers, maintenance, development and hosting. Plus, using
              cloud databases, you'll only pay for what you need.
            </FeatureDescription>
          </Feature>
        </Row>
      </Section>
      <Section background='transparent'>
        <Title className='center light-1 max-2' type='h2'>
          Whatever You Need, We've Got You Covered
        </Title>
        <p className='center light-2'>
          Whether you need a custom integration, REST API, user/team management
          system or other work, you've come to the right place.
        </p>
        <Spacer height={theme.spacing.six} />
        <Row
          className='max-3 mx-auto'
          spacing={[0, 24]}
          breakpoints={[576, 769]}
        >
          <SmallFeature widths={[6, 4]}>
            <SmallFeatureIcon>
              <img className='icon' src={api} />
            </SmallFeatureIcon>
            <SmallFeatureTitle>Custom APIs</SmallFeatureTitle>
          </SmallFeature>
          <SmallFeature widths={[6, 4]}>
            <SmallFeatureIcon>
              <img className='icon' src={computer} />
            </SmallFeatureIcon>
            <SmallFeatureTitle>Management Systems</SmallFeatureTitle>
          </SmallFeature>
          <SmallFeature widths={[6, 4]}>
            <SmallFeatureIcon>
              <img className='icon' src={integrations} />
            </SmallFeatureIcon>
            <SmallFeatureTitle>Custom Integrations</SmallFeatureTitle>
          </SmallFeature>
        </Row>
        <Button className='center mt-6' white outlined>
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
