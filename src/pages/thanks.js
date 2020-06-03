import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { ThemeContext } from '../components/theme';
import Card from '../components/Card';
import { Title } from '../components/Title';
import Button from '../components/Button';

const ThankYouPage = () => {
  const theme = useContext(ThemeContext);

  return (
    <span>
      <SEO title='Thanks! - Jelly Development' />
      <MainWrapper theme={theme}>
        <BackgroundImage>
          <div></div>
        </BackgroundImage>
        <div className='container' style={{ zIndex: 999 }}>
          <Card className='p-6 max-4 mx-auto'>
            <Title type='h2' className='center mb-4' theme={theme}>
              Thanks for getting in touch!
            </Title>
            <p className='center dark-2 max-3 mb-6' theme={theme}>
              I'll try to respond within 24 hours and let you know what I can do
              for you.
            </p>
            <Button center link='/' primary outlined>
              Sounds good!
            </Button>
          </Card>
        </div>
      </MainWrapper>
    </span>
  );
};

const MainWrapper = styled.div`
  position: relative;
  height: 100vh;
  padding-top: 92px;
  margin-top: -92px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  div {
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    mask-repeat: no-repeat;
    mask-size: 100%;
    mask-position: 400% 0;
    -webkit-mask-image: radial-gradient(
      ellipse at 200% 60%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.6) 51%,
      rgba(0, 0, 0, 0) 100%
    );
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='496' height='496' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23ffffff30' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23ffffff90'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  }

  z-index: 0;
`;

const PageHeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 420px !important;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
`;

const ChildContainer = styled.div`
  margin-top: 0;
  padding-bottom: 0px !important;
  z-index: 1;
`;

const SubTitle = styled.div`
  color: #ffffff90;
  font-size: 22px !important;
  font-weight: 400 !important;
  margin-bottom: ${(props) => props.theme.spacing.five}px;
`;

const ButtonFlex = styled.div`
  margin: 0 -8px;
  @media (min-width: 520px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  padding-bottom: 12px;
`;

const ButtonWrapper = styled.div`
  padding: 8px !important;
  button {
    margin: 0 !important;
  }
`;

export default ThankYouPage;
