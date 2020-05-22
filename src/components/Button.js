/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import { css } from 'linaria';
import { Link } from 'gatsby';
import { ThemeContext } from './theme';

const Button = ({
  children,
  primary,
  className = '',
  small,
  margin,
  white,
  gray,
  outlined,
  solid,
  onClick,
  right,
  left,
  center,
  medium,
  link,
  disabled,
  lightText,
  darkText,
  error,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <span>
      {link ? (
        <Link
          className={
            left
              ? 'no-styling left'
              : center
              ? 'no-styling center'
              : right
              ? 'no-styling right'
              : 'no-styling'
          }
          to={link}
        >
          <StyledButton
            theme={theme}
            disabled={disabled}
            error={error}
            small={small}
            medium={medium}
            className={className}
            right={right}
            left={left}
            center={center}
            margin={margin}
            white={white}
            gray={gray}
            outlined={outlined}
            onClick={onClick || null}
            lightText={lightText}
            darkText={darkText}
            link
          >
            {children}
          </StyledButton>
        </Link>
      ) : (
        <StyledButton
          theme={theme}
          disabled={disabled}
          error={error}
          small={small}
          medium={medium}
          className={className}
          right={right}
          left={left}
          center={center}
          margin={margin}
          white={white}
          gray={gray}
          outlined={outlined}
          onClick={onClick || null}
          lightText={lightText}
          darkText={darkText}
        >
          {children}
        </StyledButton>
      )}
    </span>
  );
};

const StyledButton = styled.button`
  padding: ${(props) =>
    props.small
      ? `${props.theme.spacing.two}px ${props.theme.spacing.three}px`
      : `${props.theme.spacing.three}px ${props.theme.spacing.four}px`};
  border: none !important;
  border-radius: 5px;
  text-transform: ${(props) =>
    !props.gray && !props.error && 'uppercase'} !important;
  cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')} !important;
  transition: all 0.18s 0s ease-out !important;
  transition-delay: 0s !important;
  letter-spacing: 1.1px !important;
  font-size: ${(props) => (props.small ? '13px' : '16px')} !important;
  font-weight: 600 !important;
  display: block;
  overflow: hidden !important;
  position: relative !important;
  outline: none !important;
  margin: ${(props) => (props.margin ? '0 8px' : 0)};
  background: ${(props) =>
    props.outlined
      ? 'transparent'
      : props.white
      ? '#ffffff'
      : props.error
      ? props.theme.color.error
      : props.theme.color.primary.main} !important;
  color: ${(props) =>
    props.outlined
      ? props.white
        ? '#ffffff'
        : props.error
        ? props.theme.color.error
        : props.theme.color.primary.main
      : props.white
      ? props.theme.color.primary.main
      : '#ffffff'};

  border: ${(props) =>
    props.outlined
      ? props.white
        ? '2px solid white'
        : props.error
        ? `2px solid ${props.theme.color.error}`
        : `2px solid ${props.theme.color.primary.main}`
      : props.white
      ? '2px solid white'
      : 'none'} !important;

  :hover {
    border-radius: 23px;
    box-shadow: 2px 4px 22px -10px ${(props) => (props.disabled ? 'none' : props.gray || props.error ? 'transparent' : props.secondary ? `${props.theme.color.secondary.main}90` : `${props.theme.color.primary.main}90`)};
    transition: all 0.18s 0s ease-out !important;
    transform: scale(1.01);
    background: ${(props) =>
      props.outlined
        ? props.white
          ? '#ffffff20'
          : props.theme.color.primary.main
        : props.white
        ? 'white'
        : props.theme.color.primary.main} !important;
    color: ${(props) =>
      props.outlined
        ? props.white
          ? 'white'
          : 'white'
        : props.white
        ? props.theme.color.primary.main
        : 'white'} !important;
  }
  // :active ::before {
  //   right: 0 !important;
  // }
  a {
    text-decoration: none !important;
    padding: 0 !important;
    margin: 0 !important;
    color: ${(props) =>
      props.lightText
        ? 'white'
        : props.darkText
        ? props.theme.color.text.dark
        : props.outlined || props.gray
        ? props.theme.color.text.heading
        : props.secondary
        ? 'white'
        : 'white'} !important;
  }
  display: block;
`;

export default Button;
