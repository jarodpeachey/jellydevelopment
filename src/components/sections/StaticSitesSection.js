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
import hosting from '../../images/hosting.png';
import color from '../../images/color.png';
import website from '../../images/website.png';

import party from '../../images/party.png';
import cost from '../../images/cost.png';
import support from '../../images/support.png';
import custom from '../../images/custom.png';
import easy from '../../images/easy.png';
import responsive from '../../images/responsive.png';
import Card from '../Card';
import Button from '../Button';

const StaticSitesSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Section background='#ffffff'>
        <SmallTitle className='center' small>
          What You Get
        </SmallTitle>
        <Title type='h2' className='center max-3'>
          Fully Optimized Websites for your Business
        </Title>
        <p className='center max-4'>
          Managing your online presence isn't easy. Choosing a hosting provider,
          updating the content, and general maintenance takes a lot of time and
          consideration.
        </p>
        <p className='center max-4'>
          That's why I take care of all of that for you. With plenty of
          experience in the industry, I'll provide you with the tools you need
          to manage your site, without large overhead costs.
        </p>
        <Spacer height={theme.spacing.six} />
        <Row spacing={[24, 24]} breakpoints={[769, 1200]}>
          <Feature widths={[6, 3]}>
            <FeatureIcon>
              <img className='icon' src={color} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Web Design</FeatureTitle>
            <FeatureDescription>
              Clean and modern websites that work on all screen sizes. I'll
              create a custom design system that's unique to your brand,
              allowing your business to stand out on the web and create a great
              user experience.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 3]}>
            <FeatureIcon>
              <img className='icon' src={website} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Web Development</FeatureTitle>
            <FeatureDescription>
              Security and performance are always top priority when I'm
              developing your website. You'll get a website that's easy to
              manage and update, even on your own.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 3]}>
            <FeatureIcon>
              <img className='icon' src={hosting} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Hosting</FeatureTitle>
            <FeatureDescription>
              Save money with a hosting provider built for simplicity and
              performance. Your site will be simple to manage, and won't cost
              you anything until your online business scales.
            </FeatureDescription>
          </Feature>
          <Feature widths={[6, 3]}>
            <FeatureIcon>
              <img className='icon' src={seo} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>
              Search Engine Optimization
            </FeatureTitle>
            <FeatureDescription>
              After your website is online, getting people to it is the next
              step. I make sure that I develop your website with SEO in mind, so
              your audience can find you easier.
            </FeatureDescription>
          </Feature>
        </Row>
      </Section>
      <Section background='#f7f7f7'>
        <SmallTitle className='center'>What To Expect</SmallTitle>
        <Title type='h2' className='max-2 center'>
          Everything You Need For Your Website
        </Title>
        <p className='center max-4'>
          When I develop your static site for you, I don't cut corners. I make
          sure your site goes above and beyond your expectations, without any
          hassle for you.
        </p>
        <p className='center max-4'>
          Here's what you can expect from your new site.
        </p>
        <Spacer height={theme.spacing.six} />
        <Row spacing={[12, 12]} breakpoints={[769, 1000]}>
          <Card widths={[6, 4]}>
            <FeatureIcon>
              <img className='green my-3' src={custom} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Custom Configuration</FeatureTitle>
            <FeatureDescription>
              Usually, content management systems are set up to work for a wide
              range of websites. Because of this, they might not work for
              everything you want to do.
            </FeatureDescription>
            <FeatureDescription>
              Using the CMS of your choice, I configure it to meet the needs of
              your site, giving you a smooth editing experience.
            </FeatureDescription>
          </Card>
          <Card widths={[6, 4]}>
            <FeatureIcon>
              <img className='green my-3' src={easy} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Simplicity</FeatureTitle>
            <FeatureDescription>
              I know from first-hand experience that maintaing a website isn't
              usually easy.
            </FeatureDescription>
            <FeatureDescription>
              That's why I make sure you're comfortable using the tools that I
              choose to use in your website. If you're not, I'll use something
              else that you are comfortable with.
            </FeatureDescription>
          </Card>
          <Card widths={[6, 4]}>
            <FeatureIcon>
              <img className='green my-3' src={support} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Support</FeatureTitle>
            <FeatureDescription>
              Even with the simplest website in existence, things can go wrong.
              But they don't have to harm your business!
            </FeatureDescription>
            <FeatureDescription>
              If anything with your website ever goes wrong or something
              happens, you can contact me and I'll help you resolve the issue at
              no extra charge.
            </FeatureDescription>
          </Card>
          <Card widths={[6, 4]}>
            <FeatureIcon>
              <img className='green my-3' src={responsive} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Mobile Optimized</FeatureTitle>
            <FeatureDescription>
              Over 60% of all website visits are now on mobile. That means that
              now more than ever, your website needs to function on all screen
              size, or you'll miss out on customers.
            </FeatureDescription>
            <FeatureDescription>
              When I create your site, I make sure it looks just as good on
              mobile as it does on desktop.
            </FeatureDescription>
          </Card>
          <Card widths={[6, 4]}>
            <FeatureIcon>
              <img className='green my-3' src={cost} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Low Cost</FeatureTitle>
            <FeatureDescription>
              Having a website doesn't have to be expensive.
            </FeatureDescription>
            <FeatureDescription>
              When choosing the tools for your website, I choose ones that won't
              cost you any money until your website grows.
            </FeatureDescription>
          </Card>
          <Card widths={[6, 4]}>
            <FeatureIcon>
              <img className='green my-3' src={party} />
            </FeatureIcon>
            <FeatureTitle className='mt-4'>Maintenance Free</FeatureTitle>
            <FeatureDescription>
              Most websites are hard to maintain, and need updating frequently
              with hosting or CMS updates. This can be a pain. That's why I
              create my websites using modern tools that don't require any
              moderation at all!
            </FeatureDescription>
            <FeatureDescription>
              However, you're still able to edit your site whenever you want,
              giving you more flexibility for your online presence.
            </FeatureDescription>
          </Card>
        </Row>
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
