import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import { Link } from 'gatsby';
import Button from '../Button';
import { ThemeContext } from '../theme';

const Menu = ({ scrolled }) => {
  const theme = useContext(ThemeContext);

  return (
    <MenuWrapper scrolled={scrolled}>
      <MenuItem theme={theme}>
        <Link to='/'>Home</Link>
      </MenuItem>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  @media (min-width: 769px) {
    display: flex;
  }
  margin-left: auto;
  display: none;
  align-items: center;
  height: 100%;
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
    color: #ffffffcc;
    transition: all 0.18s ease-out;
  }
  border-radius: 15px;
  border-bottom-left-radius: 9px;
  border-top-right-radius: 9px;
  :hover {
    transition-duration: 0.25s;
    color: #ffffff;
    background: #ffffff50;
    transition: all 0.18s ease-out;
  }
`;

export default Menu;
