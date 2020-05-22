/* eslint-disable react/jsx-fragments */
import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import { css } from 'linaria';
import { Link } from 'gatsby';
import { ThemeContext } from './theme';

const Title = ({ children, className = '', type, weight, underline }) => {
  const theme = useContext(ThemeContext);
  if (type === 'h1')
    return (
      <>
        <H1
          theme={theme}
          weight={weight}
          underline={underline}
          className={className}
        >
          {children}
        </H1>
        {underline && <Underline theme={theme} className={className} />}
      </>
    );
  if (type === 'h2')
    return (
      <>
        <H2
          theme={theme}
          weight={weight}
          underline={underline}
          className={className}
        >
          {children}
        </H2>
        {underline && <Underline theme={theme} className={className} />}
      </>
    );
  if (type === 'h3')
    return (
      <>
        <H3
          theme={theme}
          weight={weight}
          underline={underline}
          className={className}
        >
          {children}
        </H3>
        {underline && <Underline theme={theme} className={className} />}
      </>
    );
  return (
    <>
      <H1
        theme={theme}
        weight={weight}
        underline={underline}
        className={className}
      >
        {children}
      </H1>
      {underline && <Underline theme={theme} className={className} />}
    </>
  );
};

const SmallTitle = ({ children, className = '' }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledTitleSmall theme={theme} className={className}>
      {children}
    </StyledTitleSmall>
  );
};

const H1 = styled.h1`
  font-weight: ${(props) => (props.weight ? props.weight : '700')} !important;
  margin-bottom: ${(props) => (props.underline ? 'none' : 'inherit')};
`;
const H2 = styled.h2`
  font-weight: ${(props) => (props.weight ? props.weight : '700')} !important;
  margin-bottom: ${(props) => (props.underline ? 'none' : 'inherit')};
`;
const H3 = styled.h3`
  font-weight: ${(props) => (props.weight ? props.weight : '700')} !important;
  margin-bottom: ${(props) => (props.underline ? 'none' : 'inherit')};
`;
const Underline = styled.div`
  height: 2px;
  margin-top: ${(props) => props.theme.spacing.four}px;
  margin-bottom: ${(props) => props.theme.spacing.five}px;
  width: 20%;
  min-width: 90px;
  background: ${(props) => props.theme.color.primary.main};
`;

const StyledTitleSmall = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 2px;
  position: relative;
  color: #000;
  background: #fff;
  mix-blend-mode: multiply;
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.color.primary.main},
      ${(props) => props.theme.color.primary.main}
    );
    pointer-events: none;
    mix-blend-mode: screen;
  }
`;

export { Title, SmallTitle };
