/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-fragments */
// import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import { Link } from 'gatsby';
import Menu from './Menu';
import { isBrowser } from '../../utils/isBrowser';
import { AppContext } from '../../providers/AppProvider';
import { ThemeContext } from '../theme';
import logo from '../../images/white-outlined.svg';

const Header = ({ siteTitle }) => {
  const { scrolled, setScrolled } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    const inner = document.getElementById('blur')
      ? document.getElementById('blur').offsetWidth
      : 0;
    const outer = document.getElementById('mobile-menu')
      ? document.getElementById('mobile-menu').offsetWidth
      : 0;

    setWidth(outer - inner);

    return () => {
      setWidth();
      window.removeEventListener('scroll', onScroll);
    };
  });

  const toggleFunction = () => {
    if (open) {
      document.getElementById('blur').classList.remove('blur');
    } else {
      document.getElementById('blur').classList.add('blur');
    }

    setOpen(!open);
  };

  const accountToggleFunction = () => {
    setAccountOpen(!accountOpen);
  };

  console.log(scrollTop);

  const onScroll = () => {
    setScrollTop(isBrowser() && window.scrollY);
    if (
      window.scrollY > 60 &&
      isBrowser() &&
      !window.location.pathname.includes('dashboard')
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div>
      {typeof window !== 'undefined' &&
      !window.location.pathname.includes('/signup') &&
      !window.location.pathname.includes('/login') ? (
        <>
          <Wrapper
            id='header'
            open={open}
            dashboard={
              isBrowser() && window.location.pathname.includes('dashboard')
            }
            scrolled={scrolled}
            theme={theme}
            scrollTop={scrollTop}
            width={isBrowser() && window.innerWidth}
          >
            <div className='container'>
              <Flex theme={theme}>
                <SiteTitle
                  open={open}
                  theme={theme}
                  className='logo'
                  light={
                    isBrowser() &&
                    window.location.pathname.includes('dashboard')
                  }
                  scrolled={scrolled}
                >
                  {/* <img src={logo} /> */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlSpace='preserve'
                    width='2.60417in'
                    height='2.60417in'
                    version='1.1'
                    style={{
                      shapeRendering: 'geometricPrecision',
                      textRendering: 'geometricPrecision',
                      imageRendering: 'optimizeQuality',
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                    }}
                    viewBox='0 0 2604.17 2604.17'
                  >
                    <defs>
                      <style type='text/css'></style>
                      <linearGradient
                        id='id0'
                        gradientUnits='userSpaceOnUse'
                        x1='-759.37'
                        y1='1299.35'
                        x2='3136.46'
                        y2='1299.35'
                      >
                        <stop
                          offset='0'
                          style={{ stopOpacity: 0, stopColor: '#7eaef4' }}
                        />
                        <stop
                          offset='1'
                          style={{ stopOpacity: 0, stopColor: '#623C8D' }}
                        />
                      </linearGradient>
                    </defs>
                    <g id='Layer_x0020_1'>
                      <metadata id='CorelCorpID_0Corel-Layer' />
                      <path
                        className='fil0 str0'
                        d='M604.86 933.44c47.72,157.26 220.11,378.25 352.86,479 144.67,109.8 294.67,191.29 483.37,233.7 52.54,11.81 47.41,20.5 77.41,-10.7l109.29 -109.47c33.7,-32.79 27.94,-20.89 15.44,-76.88 -33.48,-150.02 -120.5,-347.4 -210.56,-455.5 -43.43,-52.13 -75.03,-97.09 -127.55,-147.2 -10.84,-10.34 -19.99,-14.63 -31.03,-25.06 -76.01,-71.81 -249.77,-190.66 -345.9,-212.54l-323.33 324.65zm693.9 1154.37l46.89 -342.93c-48.02,-12.07 -109.35,-34.31 -152.95,-53.57 -23.63,-10.43 -47.43,-19.88 -70.57,-31.28 -24.37,-12.01 -44.81,-26.89 -72.6,-34.54 0.79,58.33 2.38,116.74 2.52,175.04 0.13,51.13 -4.96,47.27 66.09,112.7 33.25,30.62 55.7,54.78 86.35,86.63 18.42,19.14 71.84,73.64 94.27,87.95zm446.06 -743.5l342.98 -46.22c-22.53,-34.53 -141.07,-143.74 -174.5,-180.03 -14.24,-15.46 -27,-23.7 -43.64,-42.87 -21.77,-25.08 -18.28,-22.92 -63.92,-23.21 -60.06,-0.38 -120.1,-1.72 -180.17,-2.54 9.95,35.59 84.83,151.96 119.25,294.86zm-1180.21 -540.81c21.68,-6.15 45.71,-38.5 62.05,-54.85l176.92 -184.12c-69.69,-27.37 -205.5,-43.11 -287.2,-48.16 4.65,79.58 21.72,219.33 48.23,287.13zm1110.07 955.15l161.49 158.74c19.46,-17 72.77,-64.7 82.61,-87.89 -33.65,-23.38 -125.35,-129.61 -159,-154.58l-85.09 83.73zm-124.13 127.71c9.25,17.15 101.11,109.17 117.77,117.31l81.63 -80.58c-8.25,-17.1 -100.62,-109.43 -117.23,-117.77l-82.17 81.04zm254.72 -254.4l117.15 116.42 85.92 -83.51c-39.07,-40.14 -78.57,-78.07 -116.78,-117.3l-86.29 84.4zm-747.83 -734.89c88.05,0 159.43,71.54 159.43,159.77 0,88.23 -71.38,159.77 -159.43,159.77 -88.05,0 -159.43,-71.54 -159.43,-159.77 0,-88.24 71.38,-159.77 159.43,-159.77z'
                      />
                    </g>
                  </svg>
                  Jelly
                </SiteTitle>
                {isBrowser() &&
                !window.location.pathname.includes('dashboard') ? (
                  <>
                    <Menu theme={theme} scrolled={scrolled} />
                    {/* <MobileMenu scrolled={scrolled} /> */}
                    <MobileMenuToggle
                      theme={theme}
                      scrolled={scrolled}
                      onClick={toggleFunction}
                      open={open}
                    >
                      <MobileMenuRotate theme={theme} open={open}>
                        <span />
                        <span />
                        <span />
                      </MobileMenuRotate>
                    </MobileMenuToggle>
                  </>
                ) : (
                  <AccountMenuToggle
                    theme={theme}
                    scrolled={scrolled}
                    onClick={accountToggleFunction}
                    open={accountOpen}
                  >
                    <FontAwesomeIcon icon='user' />
                    <AccountMenu
                      theme={theme}
                      open={accountOpen}
                      scolled={scrolled}
                    >
                      <MobileMenuItems theme={theme} open={accountOpen}>
                        <AccountMenuItem theme={theme} href='/'>
                          Home
                        </AccountMenuItem>
                        <AccountMenuItem theme={theme} href='/'>
                          Profile
                        </AccountMenuItem>
                      </MobileMenuItems>
                    </AccountMenu>
                  </AccountMenuToggle>
                )}
              </Flex>
            </div>
            {/* <MobileMenuOverlay open={open}> */}
            {/* </MobileMenuOverlay> */}
          </Wrapper>
          <MobileMenu
            theme={theme}
            width={width}
            id='mobile-menu'
            scrolled={scrolled}
            open={open}
          >
            <div className='container'>
              <MobileMenuItem scrolled={scrolled} theme={theme}>
                <Link to='/'>Home</Link>
              </MobileMenuItem>
              <MobileMenuItem scrolled={scrolled} theme={theme}>
                <Link to='/about'>About</Link>
              </MobileMenuItem>
              <MobileMenuItem
                scrolled={scrolled}
                onClick={() => {
                  setSubMenuOpen(!subMenuOpen);
                }}
                theme={theme}
              >
                <span>
                  Services
                  <FontAwesomeIcon
                    style={{
                      fontSize: 14,
                      position: 'relative',
                      top: 1,
                      left: 6,
                      transform: `${subMenuOpen ? 'rotate(180deg)' : 'none'}`,
                      transition: 'all .1s ease-in-out',
                    }}
                    icon='chevron-down'
                  />
                </span>
                <SubMenuWrapper theme={theme} open={subMenuOpen}>
                  <SubMenu theme={theme} open={subMenuOpen}>
                    <SubMenuItem theme={theme}>
                      <Link to='/'>Static Sites</Link>
                    </SubMenuItem>
                    <SubMenuItem theme={theme}>
                      <Link to='/'>Wordpress Transfers</Link>
                    </SubMenuItem>
                    <SubMenuItem theme={theme}>
                      <Link to='/'>Custom Solutions</Link>
                    </SubMenuItem>
                  </SubMenu>
                </SubMenuWrapper>
              </MobileMenuItem>
              <MobileMenuItem theme={theme} scrolled={scrolled}>
                <Link to='/'>Contact</Link>
              </MobileMenuItem>
            </div>
          </MobileMenu>
        </>
      ) : null}
    </div>
  );
};

const Wrapper = styled.header`
  .container {
    padding-top: 16px;
    padding-bottom: 16px;
    margin-top: ${(props) =>
      props.open ? 30 : props.scrolled ? 0 : 30 - props.scrollTop / 2}px;
    padding-left: ${(props) =>
      props.width > 769 ? '48px' : props.open ? '48px' : '24px'};
    padding-right: ${(props) =>
      props.width > 769 ? '48px' : props.open ? '48px' : '24px'};
    transition: all 0.2s ease-out;
  }
  z-index: 999999999999999;
  background: ${(props) =>
    props.open ? 'transparent' : props.scrolled ? '#ffffffef' : 'transparent'};
  transition: ${(props) =>
    props.scrolled ? 'background .3s ease-out' : 'none'};

  box-shadow: ${(props) =>
    props.scrolled && !props.open ? props.theme.shadow.one : 'none'};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SiteTitle = styled.h1`
  margin: 0;
  position: absolute;
  top: 3px;
  left: 0;
  color: ${(props) =>
    props.scrolled || props.open
      ? `${props.theme.color.primary.main}`
      : '#ffffff'};
  display: flex;
  align-items: center;
  margin-top: -12px !important;
  margin-bottom: -1px !important;
  transition: all 0.25s ease-out;
  text-transform: uppercase;
  svg {
    width: 65px !important;
    height: 65px !important;
    transform: scaleX(-1) !important;
    margin: 0 !important;
    margin-top: -4px !important;
    * {
      stroke: ${(props) => (props.scrolled ? '#b4267c' : 'white')} !important;
    }
  }
  // span {
  font-size: 26px;
  // }
  @media (min-width: 769px) {
    // span {
    font-size: 32px;
    // }
  }
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) =>
    props.scrolled || props.open ? props.theme.color.primary.main : 'white'};
`;

const MobileMenuToggle = styled.div`
  display: none;
  z-index: 9999;
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    display: block;
  }
  transform: rotate(0deg);
    transition: all .25s ease-out;
  cursor: pointer;
  margin-left: auto;
  position: ${(props) => (props.open ? 'relative' : 'static')};
  // right: ${(props) => (props.open ? '12px' : 'none')};
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${(props) =>
      props.scrolled || props.open ? props.theme.color.text.heading : 'white'};
    border-radius: 10px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${(props) =>
      props.open ? 'all 0.25s ease-in' : 'all 0.25s ease-out'};
  }

  span:nth-child(1) {
    top: ${(props) => (props.open ? 'calc(50% - 2px)' : '10%')};
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: ${(props) => (props.open ? 0 : 'calc(50% - 2px)')};
    left: ${(props) => (props.open ? 'calc(50% - 2px)' : '4px')};
    width: ${(props) => (props.open ? '4px' : '100%')};
    height: ${(props) => (props.open ? '100%' : '4px')};
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: calc(90% - 4px);
    transform-origin: left center;
    width: ${(props) => (props.open ? 0 : '100%')};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
`;

const MobileMenuRotate = styled.div`
  height: 100%;
  width: 100%;
  transition: ${(props) =>
    props.open ? 'all 0.25s ease-in-out' : 'all 0.25s ease-in-out'};
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
`;

const MobileMenu = styled.div`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
    transition: transform 0.1s .05s ease-out,
    opacity 0.1s .05s ease-out
      ${(props) => (props.open ? ', visibility 0s 0s' : ', visibility 0s .2s')};
  transform: ${(props) => (props.open ? 'scale(1)' : 'scale(.98)')};
  z-index: 99999;
  .container {
    padding: 0px 48px !important;
  }
  @media (max-width: 769px) {
    display: block;
  }
  box-shadow: ${(props) => props.theme.shadow.two};
  line-height: 1;
  // display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  overflow: hidden;
  padding: 24px 0;
  top: 0;
  padding-top: 64px;
  margin-top: 24px;
  background: white;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  border-radius: ${(props) => props.theme.radius.two};
  width: calc(90%);
  right: 24px;
  width: calc(100% - 48px);
  height: fit-content
  .container {
    padding: 12px 10vw;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MobileMenuItem = styled.div`
  height: 100%;
  transition-duration: 0.25s;
  a,
  span {
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    display: block;
    padding: ${(props) => (props.button ? '0' : '16px 0')};
    font-weight: 500;
    color: ${(props) => `${props.theme.color.text.heading}`};
    font-size: 18px;
  }

  :hover > a,
  :hover > span {
    // transition-duration: 0.25s;
    // background: #ffffff50;
    transition: all 0.18s ease-out;
    color: ${(props) => props.theme.color.primary.main};
  }
  position: relative;
`;

const SubMenuWrapper = styled.div`
  transition: ${(props) => (props.open ? 'max-height .2s' : 'max-height .2s')};
  overflow: hidden;
  max-height: ${(props) => (props.open ? '150px' : '0')};
`;

const SubMenu = styled.div`
  // display: ${(props) => (props.open ? 'block' : 'none')};
  border-radius: ${(props) => props.theme.radius.two};
  background: #ffffff;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadow.two};
`;

const SubMenuItem = styled.div`
  height: 100%;
  transition-duration: 0.25s;
  a {
    height: 100%;
    text-decoration: none;
    display: block;
    padding: ${(props) => (props.button ? '0' : '8px 24px')};
    font-weight: 500;
    transition-duration: 0.25s;
    transition: all 0.18s ease-out;
    font-size: 16px;
    color: ${(props) => props.theme.color.text.heading};
  }
  :hover {
    // transition-duration: 0.25s;
    // background: #ffffff50;
    transition: all 0.18s ease-out;
    a {
      color: ${(props) => props.theme.color.primary.main};
    }
  }
`;

export default Header;
