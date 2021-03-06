import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../Button';
import { ThemeContext } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = ({ scrolled }) => {
  const theme = useContext(ThemeContext);
  const [servicesSubMenuOpen, setServicesSubMenuOpen] = useState(false);
  const [aboutSubMenuOpen, setAboutSubMenuOpen] = useState(false);

  return (
    <MenuWrapper scrolled={scrolled}>
      <MenuItem scrolled={scrolled} theme={theme}>
        <Link to='/'>Home</Link>
      </MenuItem>
      <MenuItem
        scrolled={scrolled}
        onMouseEnter={() => {
          setAboutSubMenuOpen(true);
        }}
        onMouseLeave={() => {
          setAboutSubMenuOpen(false);
        }}
        theme={theme}
      >
        <Link to='/about'>
          About
          <FontAwesomeIcon
            style={{
              fontSize: 14,
              position: 'relative',
              top: 1,
              left: 6,
              transform: `${aboutSubMenuOpen ? 'rotate(180deg)' : 'none'}`,
              transition: 'all .1s ease-in-out',
            }}
            icon='chevron-down'
          />
        </Link>
        <SubMenuWrapper theme={theme} open={aboutSubMenuOpen}>
          <SubMenu theme={theme} open={aboutSubMenuOpen}>
            <SubMenuItem theme={theme}>
              <Link to='#why-jelly'>Why Jelly?</Link>
            </SubMenuItem>
            <SubMenuItem theme={theme}>
              <Link to='#what-i-do'>What I Do</Link>
            </SubMenuItem>
            {/* <SubMenuItem theme={theme}>
              <Link to='/'>Wordpress Transfers</Link>
            </SubMenuItem> */}
            <SubMenuItem theme={theme}>
              <Link to='#how-i-do-it'>My Process</Link>
            </SubMenuItem>
          </SubMenu>
        </SubMenuWrapper>
      </MenuItem>
      <MenuItem
        scrolled={scrolled}
        onMouseEnter={() => {
          setServicesSubMenuOpen(true);
        }}
        onMouseLeave={() => {
          setServicesSubMenuOpen(false);
        }}
        theme={theme}
      >
        <a>
          Services
          <FontAwesomeIcon
            style={{
              fontSize: 14,
              position: 'relative',
              top: 1,
              left: 6,
              transform: `${servicesSubMenuOpen ? 'rotate(180deg)' : 'none'}`,
              transition: 'all .1s ease-in-out',
            }}
            icon='chevron-down'
          />
        </a>
        <SubMenuWrapper theme={theme} open={servicesSubMenuOpen}>
          <SubMenu theme={theme} open={servicesSubMenuOpen}>
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
      </MenuItem>
      <MenuItem theme={theme} scrolled={scrolled}>
        <Link to='/contact'>Contact</Link>
      </MenuItem>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  @media (min-width: 769px) {
    display: flex;
  }
  // margin-left: auto;
  display: none;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  transition-duration: 0.25s;
`;

const MenuItem = styled.div`
  height: 100%;
  transition-duration: 0.25s;
  a {
    height: 100%;
    text-decoration: none;
    display: block;
    padding: ${(props) => (props.button ? '0' : '8px 24px')};
    font-weight: 500;
    transition-duration: 0.25s;
    color: ${(props) =>
      props.scrolled ? `${props.theme.color.text.heading}` : '#ffffffcc'};
    transition: all 0.18s ease-out;
    font-size: 18px;
  }
  :hover {
    // transition-duration: 0.25s;
    color: #ffffff;
    // background: #ffffff50;
    transition: all 0.18s ease-out;
  }
  position: relative;
`;

const SubMenuWrapper = styled.div`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: transform 0.1s ease-out,
    opacity 0.1s ease-out
      ${(props) => (props.open ? ', visibility 0s 0s' : ', visibility 0s .1s')};
  transform: ${(props) => (props.open ? 'scale(1)' : 'scale(.95)')};
  position: absolute;
  min-width: 200px;
  top: calc(100%);
  left: 20px;
  padding-top: 20px;
`;

const SubMenu = styled.div`
  // display: ${(props) => (props.open ? 'block' : 'none')};
  border-radius: ${(props) => props.theme.radius.two};
  background: #ffffff;
  padding: 16px 0;
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
    font-size: 18px;
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

export default Menu;
