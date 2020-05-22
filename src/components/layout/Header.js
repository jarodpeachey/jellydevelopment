/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-fragments */
// import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import Menu from './Menu';
import { isBrowser } from '../../utils/isBrowser';
import { AppContext } from '../../providers/AppProvider';
import { ThemeContext } from '../theme';

const Header = ({ siteTitle }) => {
  const { scrolled, setScrolled } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

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
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <defs>
          <filter id='blur'>
            <feGaussianBlur stdDeviation='5' />
          </filter>
        </defs>
      </svg>
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
          >
            <div className='container'>
              <Flex theme={theme}>
                <SiteTitle
                  theme={theme}
                  className='logo'
                  light={
                    isBrowser() &&
                    window.location.pathname.includes('dashboard')
                  }
                  scrolled={scrolled}
                >
                  {/* <svg
                    style={{
                      width: scrolled ? 60 : 70,
                      top: 4,
                      position: 'relative',
                      marginRight: 8,
                      transition: 'all .25s ease-out',
                    }}
                    viewBox='0 0 200 200'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill={
                        scrolled ? `${theme.color.secondary.main}` : `#ffffff`
                      }
                      d='M49.6,-75.6C63.8,-68,74.5,-53.5,81.3,-37.5C88.1,-21.5,91,-4,85.9,10.5C80.9,24.9,68,36.3,55.5,44.6C42.9,53,30.8,58.2,18.6,60.4C6.4,62.6,-5.7,61.9,-19,60C-32.2,58.2,-46.4,55.4,-59.4,47.5C-72.3,39.6,-84,26.7,-86.1,12.4C-88.1,-1.9,-80.5,-17.6,-71.6,-30.9C-62.8,-44.2,-52.6,-55.2,-40.5,-63.7C-28.3,-72.3,-14.2,-78.5,1.8,-81.3C17.7,-84,35.3,-83.2,49.6,-75.6Z'
                      transform='translate(100 100)'
                    />
                  </svg>
                  <svg
                    style={{
                      position: 'absolute',
                      left: 3,
                      top: 1,
                      width: scrolled ? 50 : 60,
                      transition: 'all .25s ease-out',
                    }}
                    viewBox='0 0 200 200'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill={
                        scrolled
                          ? `${theme.color.primary.main}`
                          : `${theme.color.secondary.main}cc`
                      }
                      d='M36.8,-57.9C47,-50.7,54.1,-39.3,59.9,-27.2C65.7,-15,70.3,-2.1,71.4,12.4C72.6,26.9,70.5,43,61.3,52.4C52.1,61.7,35.8,64.3,20,69.5C4.2,74.7,-11.2,82.6,-24.7,80.4C-38.3,78.2,-50,65.8,-56.6,52.3C-63.2,38.8,-64.7,24.2,-67.8,9.2C-70.9,-5.8,-75.5,-21.2,-71.1,-33.2C-66.8,-45.1,-53.4,-53.6,-40,-59.4C-26.6,-65.2,-13.3,-68.2,0,-68.2C13.3,-68.2,26.6,-65.1,36.8,-57.9Z'
                      transform='translate(100 100)'
                    />
                  </svg> */}
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
              <MobileMenuItems theme={theme} open={open}>
                <MobileMenuItem theme={theme} href='/'>
                  Home
                </MobileMenuItem>
                <MobileMenuItem
                  theme={theme}
                  href='https://github.com/jarodpeachey/triangle-comments'
                >
                  Docs
                </MobileMenuItem>
              </MobileMenuItems>
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
    margin-top: ${(props) => (props.scrolled ? 0 : 30 - props.scrollTop / 2)}px;
  }
  z-index: 999999999999999;
  background: ${(props) => (props.scrolled ? '#ffffffef' : 'transparent')};
  span,
  h1,
  h2,
  a,
  div {
    color: ${(props) =>
      props.scrolled ? props.theme.color.primary.main : 'white'} !important;
  }

  transition: ${(props) =>
    props.scrolled ? 'background .3s ease-out' : 'none'};

  box-shadow: ${(props) => (props.scrolled ? props.theme.shadow.one : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const SiteTitle = styled.h1`
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: -1px !important;
  transition: all 0.25s ease-out;
  text-transform: uppercase;
  // span {
  font-size: 26px;
  color: white;
  // }
  color: white;
  @media (min-width: 769px) {
    // span {
    font-size: 32px;
    // }
  }
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) =>
    props.scrolled ? props.theme.color.primary.main : 'white'};
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
      props.scrolled ? props.theme.color.text.heading : 'white'};
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
  display: none;
  z-index: 9999999;
  @media (max-width: 769px) {
    display: block;
  }
  box-shadow: ${(props) => props.theme.shadow.one};
  line-height: 1;
  // display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  overflow: hidden;
  padding: 24px 0;
  top: 0;
  margin-top: ${(props) => (props.scrolled ? '64px' : '112px')};
  background: white;
  width: 100%;
  transition: all 0.15s ease-out;
  transform: scale(${(props) => (props.open ? '1' : '0')});
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

const MobileMenuItems = styled.div`
  display: block;
`;

const MobileMenuItem = styled.a`
  text-decoration: none;
  transition-duration: 0.2s;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  ::after {
    display: block;
    position: absolute;
    left: 16px;
    bottom: 6px;
    content: "";
    width: 20%;
    height: 2px;
    // background: ${(props) => props.color};
  }
  font-size: 18px;
  display: block;
  padding: 12px 16px;
  width: 100%;
  margin: 0;
  border-radius: ${(props) => props.theme.radius.one};
  transition-duration: 0.2s;
  svg {
    margin-right: 12px;
    font-size: 18px;
  }
  :hover {
    background: ${(props) => props.theme.color.gray.two};
    transition-duration: 0.2s;
  }
`;

export default Header;
