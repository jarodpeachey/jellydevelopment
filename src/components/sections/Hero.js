/* eslint-disable react/jsx-fragments */
import React, { useState, useEffect, useContext } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { styled } from 'linaria/react';
import Button from '../Button';
import { ThemeContext } from '../theme';

const Hero = ({ children }) => {
  const theme = useContext(ThemeContext);
  const [scrollValue, setScrollValue] = useState(0);
  console.log(theme);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     setScrollValue(window.scrollY);
  //   });
  // });

  return (
    <span>
      {/* // <StaticQuery */}
      {/* query={graphql`
        query {
          desktop: file(relativePath: { eq: "hero_image.jpeg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={(data) => {
    Extract imageData.
    const imageData = data.desktop.childImageSharp.fluid; */}
      {/* return ( */}
      {/* <div
        style={{
          backgroundImage: `url(${heroImage})`,
          position: 'absolute',
          top: 0,
          zIndex: -5,
          height: '100vh',
          width: '100%',
          opacity: 1,
          backgroundRepeat: 'repeat',
        }}
      /> */}
      <MainWrapper theme={theme}>
        <BackgroundImage />
        <HeroContainer>
          <ChildContainer className='container'>
            <Title theme={theme}>
              High-performant and secure custom solutions for the JAMstack
            </Title>
            <SubTitle theme={theme}>
              The future is static. We'll help you get there with custom static
              websites and solutions for your entire team.
            </SubTitle>
            <ButtonFlex>
              <ButtonWrapper>
                <Button white link='/'>
                  Get Started
                </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button white outlined link='/'>
                  Learn More
                </Button>
              </ButtonWrapper>
            </ButtonFlex>
          </ChildContainer>
        </HeroContainer>
        {/* </BackgroundImage> */}
      </MainWrapper>
      {/* // ); */}
      {/* // }} */}
      {/* // /> */}
    </span>
  );
};

const MainWrapper = styled.div`
  // padding-top: 64px;
  // height: 100vh;
  // display: flex;
  position: relative;
  padding-bottom: 60px;
  padding-top: 103px;
  max-height: 999999px !important;
  @media (min-width: 769px) {
    padding-bottom: 100px;
  }
  p {
    line-height: 30px;
    font-size: 24px !important;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  right: 5vw;
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
  @media (min-width: 1400px) {
    right: 10vw;
  }
  top: 60px;
  width: 100%;
  height: 100%;
  background: url(https://www.universalstreamsolution.com/wp-content/uploads/2020/03/front-end-banner.png);
  background-position: right;
  background-size: fill;
  background-repeat: no-repeat;
`;

const HeroContainer = styled.div`
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

const Title = styled.h1`
  font-size: 38px;
  @media (min-width: 769px) {
    font-size: 44px;
  }
  // font-family: 'overpass', sans-serif !important;
  margin: 0;
  margin-bottom: ${(props) => props.theme.spacing.five}px;
  max-width: 550px;
  color: white;
`;

const SubTitle = styled.div`
  color: #ffffff90;
  font-size: 22px !important;
  max-width: 550px;
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

export default Hero;
