import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../layout/Section';
import Row from '../grid/Row';
import { ThemeContext } from '../theme';
import Spacer from '../Spacer';
import { Title, SmallTitle } from '../Title';
import control from '../../images/control.png';
import seo from '../../images/seo.png';
import maintenance from '../../images/maintenance.png';
import Card from '../Card';
import Button from '../Button';

const StaticSitesSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Section background='#ffffff'>
        <SmallTitle className='center' small>
          The JAMstack
        </SmallTitle>
        <Title type='h2' className='center max-3'>
          Why Go Static?
        </Title>
        <p className='center max-4'>
          Static sites offer more than just performance. Higher security, ease
          of use, cost effectiveness and SEO advantages are just a few more of
          the benefits to statically-generated websites.
        </p>
        <Spacer height={theme.spacing.six} />
        <Row spacing={[0, 24]} breakpoints={[769, 1000]}>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={maintenance} />
            </FeatureIcon>
            <FeatureTitle>Low Maintenance</FeatureTitle>
            <FeatureDescription>
              JAMstack sites are built like a solid brick wall. With no
              interaction database or server on your end, you don't have to
              worry about outages or problems.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={control} />
            </FeatureIcon>
            <FeatureTitle>Control Your Brand</FeatureTitle>
            <FeatureDescription>
              Static sites are built for using a headless CMS, which gives you
              more control over your identity on the web. Just let us know what
              customiability you need, and we'll make sure your site works for
              you.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 4]}>
            <FeatureIcon>
              <img className='icon' src={seo} />
            </FeatureIcon>
            <FeatureTitle>Connect With New Customers</FeatureTitle>
            <FeatureDescription>
              Static websites are built for speed. With a performance-optimized
              static site, your business will be able to reach new customers by
              ranking higher in search engines.
            </FeatureDescription>
          </Feature>
        </Row>
      </Section>
      <Section background='#fff'>
        <Card className='px-6 py-6 bg-light border-none'>
          <Title type='h2' className='max-2'>
            Everything You Need From a Website
          </Title>
          <p>
            When we develop your static site for you, we don't cut corners. We
            make sure your site goes above and beyond your expectations, without
            any hassle for you.
          </p>
          <p>Here's what you get:</p>
          {/* <Row spacing={[6, 12]} breakpoints={[576, 769, 1000]}>
            <Feature widths={[6, 4, 3]}>
              <FeatureIcon>
                <img src={control} />
              </FeatureIcon>
              <FeatureTitle>Custom Design</FeatureTitle>
            </Feature>
            <Feature widths={[6, 4, 3]}>
              <FeatureIcon>
                <img src={source} />
              </FeatureIcon>
              <FeatureTitle>Full Site Source</FeatureTitle>
            </Feature>
            <Feature widths={[6, 4, 3]}>
              <FeatureIcon>
                <img src={content} />
              </FeatureIcon>
              <FeatureTitle>Content Management System</FeatureTitle>
            </Feature>
            <Feature widths={[6, 4, 3]}>
              <FeatureIcon>
                <img src={search} />
              </FeatureIcon>
              <FeatureTitle>Built-in SEO Optimizations</FeatureTitle>
            </Feature>
            <Feature widths={[6, 4, 3]}>
              <FeatureIcon>
                <img src={accessibility} />
              </FeatureIcon>
              <FeatureTitle>Site Accesibility</FeatureTitle>
            </Feature>
            <Feature widths={[6, 4, 3]}>
              <FeatureIcon>
                <img src={deploy} />
              </FeatureIcon>
              <FeatureTitle>Hosting Provider of Choice</FeatureTitle>
            </Feature>
          </Row> */}
          <ul>
            <li>Custom site design</li>
            <li>Site source code</li>
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

export default StaticSitesSection;
