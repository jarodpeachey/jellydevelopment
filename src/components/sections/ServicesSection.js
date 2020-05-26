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
import staticSites from '../../images/static-websites-two.png';
import customIntegrations from '../../images/custom-integrations-two.png';

const ServicesSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Section background={`#f7f7f7`}>
        <SmallTitle className='center' small>
          Our Services
        </SmallTitle>
        <Title type='h2' className='center'>
          Bring the power of static to anything you want
        </Title>
        <p className='center'>
          No matter what your business needs, we've got you covered with
          everything from one-page sites to full custom solutions.
        </p>
        <Spacer height={theme.spacing.seven * 1.3} />
        <Row
          flexDirections={['column-reverse', 'row']}
          spacing={[24, 0]}
          breakpoints={[0, 769]}
        >
          <div widths={[12, 7]}>
            <Title className='tablet-mr-10' weight={600} underline>
              Static Websites
            </Title>
            <p className='tablet-mr-10'>
              Blazing fast websites with an integrated CMS to give you
              everything you need for your online presence. Whether you need a
              site for your business, a hobby or something else, static is the
              way to go.
            </p>
            <Button outlined link='/static-sites'>Learn More</Button>
          </div>
          <div widths={[12, 5]}>
            <img
              src={staticSites}
              style={{ width: '100%' }}
            />
          </div>
        </Row>
        <Spacer height={theme.spacing.seven * 1.3} />

        <Row spacing={[24, 0]} breakpoints={[769]}>
          <div widths={[5]}>
            <img
              src={customIntegrations}
              style={{ width: '100%' }}
            />
          </div>
          <div widths={[7]}>
            <Title className='tablet-ml-10' weight={600} underline>
              High-Quality Integrations
            </Title>
            <p className='tablet-ml-10'>
              Have a specific tool in mind that you want to use? Let us know, and we'll be sure to integrate it with your new site.
            </p>
            <p className='tablet-ml-10'>
              We create custom integrations to allow you to get more out of the
              tools you love, without sacrificing performance or security.
            </p>
            <Button link='/custom-solutions' outlined className='tablet-ml-10'>
              Learn More
            </Button>
          </div>
        </Row>
        <Spacer height={theme.spacing.seven * 1.3} />
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
              If you need more than a static site, you've come to the right
              place.
            </p>
            <p className='tablet-mr-10'>
              Go completely static with custom APIs, user management systems, or
              anything else you can think of. If you can dream it, we can
              JAMstack-ify it.
            </p>
            <Button outlined link='/custom-solutions'>Learn More</Button>
          </div>
          <div widths={[12, 5]}>
            <img
              src='https://cdn.sanity.io/images/6m6ry3oq/production/0e36ac6466d7ba2c50569e6acabb461b8f7b1d35-736x633.png'
              style={{ width: '100%' }}
            />
          </div>
        </Row>
      </Section>
    </div>
  );
};

export default ServicesSection;
