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
                      <Link to='/static-sites'>Static Websites</Link>
                    </SubMenuItem>
                    {/* <SubMenuItem theme={theme}>
                      <Link to='/'>Wordpress Transfers</Link>
                    </SubMenuItem> */}
                    <SubMenuItem theme={theme}>
                      <Link to='/custom-solutions'>Custom Solutions</Link>
                    </SubMenuItem>
                  </SubMenu>
                </SubMenuWrapper>
              </MobileMenuItem>
              <MobileMenuItem theme={theme} scrolled={scrolled}>
                <Link to='/contact'>Contact</Link>
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
    transition: all 0.25s ease-out;
  }
  z-index: 999999999999999;
  background: ${(props) =>
    props.open ? 'transparent' : props.scrolled ? '#ffffffef' : 'transparent'};
  transition: ${(props) =>
    props.scrolled ? 'background .25s ease-out' : 'none'};

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
  left: ${(props) => (props.open ? '0' : '0px')};
  transition: all 0.25s ease-out;
  text-transform: uppercase;
  font-size: 26px;
  svg {
    width: 65px !important;
    height: 65px !important;
    opacity: ${(props) => (props.open ? 0 : 1)};

    transform: scaleX(-1) !important;
    margin: 0 !important;
    margin-top: -4px !important;
    * {
      transition: all 0.25s ease-out;

      stroke: ${(props) =>
        props.scrolled || props.open ? '#b4267c' : 'white'} !important;
    }
  }
  // span {
  transition: all 0.25s ease-out;
  color: ${(props) =>
    props.scrolled || props.open
      ? `${props.theme.color.primary.main}`
      : '#ffffff'};
  // }
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
