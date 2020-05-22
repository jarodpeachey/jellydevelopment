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
              everything you need for your online presence.
            </p>
            <Button outlined>Learn More</Button>
          </div>
          <div widths={[12, 5]}>
            <img
              src='https://cdn.sanity.io/images/6m6ry3oq/production/c5529b494f031c0747e38365e9361ecf01b3845a-510x620.png'
              style={{ width: '100%' }}
            />
          </div>
        </Row>
        <Spacer height={theme.spacing.seven * 1.3} />

        <Row spacing={[24, 0]} breakpoints={[769]}>
          <div widths={[5]}>
            <img
              src='https://cdn.sanity.io/images/6m6ry3oq/production/26338d2ff2efa22ec781ee940299a44eed18785d-562x468.png'
              style={{ width: '100%' }}
            />
          </div>
          <div widths={[7]}>
            <Title className='tablet-ml-10' weight={600} underline>
              Custom Integrations
            </Title>
            <p className='tablet-ml-10'>
              Have a favorite tool that you don't want to give up? We can make
              sure you get to keep using it.
            </p>
            <p className='tablet-ml-10'>
              We create custom integrations to allow you to get more out of the
              tools you love, without sacrificing performance or security.
            </p>
            <Button outlined className='tablet-ml-10'>
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
            <Button outlined>Learn More</Button>
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
