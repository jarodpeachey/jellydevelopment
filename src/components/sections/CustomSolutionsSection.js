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
        <p className='center'>
          Static websites used to be just that: static, boring, and not very
          dynamic.
        </p>
        <p className='center'>
          But today, static sites are more than that. They're even more than a
          fast website with a CMS integrated.
        </p>
        <p className='center'>
          With the JAMstack, creating advanced web applications, such as APIs,
          Software-as-a-Service, and user management systems is simpler than
          ever. By taking advantage of serverless architecture, your business
          can save money on development costs, hosting costs, management
          costs... well, you get the idea.
        </p>
        <p className='center'>The possibilities are endless.</p>
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
      <Section background='#fff'>
        <Card className='px-6 py-6 bg-light border-none'>
          <Title type='h2' className='max-2'>
            Whatever You Need, We've Got You Covered
          </Title>
          <p>
            Whether you need a custom integration, REST API, user/team management system or other work, we've got you covered.
          </p>
          <p>Here's what you get:</p>
          <ul>
            <li>Full source code</li>
            <li>Content management of your choice</li>
            <li>Custom CMS configuration</li>
            <li>Built-in SEO optimizations</li>
            <li>Site accesibility</li>
            <li>Hosting provider of choice</li>
          </ul>
          <p>
            Basically, we're a one-stop shop for your new website. Clean design,
            high-quality development, custom setup and more all leading to a
            blazing fast website 🔥
          </p>
        </Card>
      </Section>
      <Section background='transparent'>
        <Title type='h2' className='center light-1 mb-6'>
          Ready For Your New Site?
        </Title>
        <Button className='center' white outlined>
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

export default CustomSolutionsSection;
