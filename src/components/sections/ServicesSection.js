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
import { StaticSitesImage, CustomIntegrationsImage } from '../Image';

const ServicesSection = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Section background={`#f7f7f7`}>
        <SmallTitle className='center' small>
          My Services
        </SmallTitle>
        <Title type='h2' className='center'>
          Web Solutions for Whatever You Need
        </Title>
        <p className='center max-4'>
          From blogs, landing pages, portfolios, and full-blown applications,
          I've got you covered with modern solutions for the modern web.
        </p>
        <Spacer height={theme.spacing.seven * 1.3} />
        <Row
          flexDirections={['column-reverse', 'row']}
          spacing={[24, 0]}
          breakpoints={[0, 769]}
        >
          <div widths={[12, 7]}>
            <Title type='h2' className='tablet-mr-10' weight={600} underline>
              Modern Websites
            </Title>
            <p className='tablet-mr-10'>
              Blazing fast websites with an integrated content management system
              to give you everything you need for your online presence. Websites
              for your business, hobby, or personal project.
            </p>
            <Button outlined link='/static-sites'>
              Learn More
            </Button>
          </div>
          <div widths={[12, 5]}>
            <StaticSitesImage />
          </div>
        </Row>
        <Spacer height={theme.spacing.seven * 1.3} />

        <Row spacing={[24, 16]} breakpoints={[769]}>
          <div widths={[5]}>
            <CustomIntegrationsImage />
          </div>
          <div widths={[7]}>
            <Title type='h2' className='tablet-ml-10' weight={600} underline>
              Custom Solutions
            </Title>
            <p className='tablet-ml-10'>
              If you're looking to modernize your workflow, you've come to the
              right place.
            </p>
            <p className='tablet-ml-10'>
              I can develop custom APIs, user management systems, database
              tools, and more, all taking advantage of the serverless ecosystem.
              Less cost, higher performance, better business.
            </p>
            <Button className='tablet-ml-10' outlined link='/custom-solutions'>
              Learn More
            </Button>
          </div>
        </Row>
        {/* <Spacer height={theme.spacing.seven * 1.3} />
        <Row
          flexDirections={['column-reverse', 'row']}
          spacing={[24, 0]}
          breakpoints={[0, 769]}
        >
          <div widths={[12, 7]}>
            <Title className='tablet-mr-10' weight={600} underline>
              Custom Development
            </Title>
            <p className='tablet-mr-10'>
              If you need more than just a static site, you've come to the right
              place.
            </p>
            <p className='tablet-mr-10'>
              Go completely static with custom APIs, user management systems, or
              anything else you can think of. If you can dream it, I can
              JAMstack-ify it.
            </p>
            <Button outlined link='/custom-solutions'>
              Learn More
            </Button>
          </div>
          <div widths={[12, 5]}>
            <img src={customDevelopment} style={{ width: '100%', maxWidth: '400px' }} />
          </div>
        </Row> */}
      </Section>
    </div>
  );
};

export default ServicesSection;
