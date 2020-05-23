import React, { useContext } from 'react';
import { styled } from 'linaria/react';
import { css } from 'linaria';
import { Link } from 'gatsby';
import { ThemeContext } from './theme';

const Card = ({ children, title, subtitle, className = '' }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledCard className={className} theme={theme}>
      {title && <Title border={!subtitle}>{title}</Title>}
      {subtitle && <Subtitle className='weight-light'>{subtitle}</Subtitle>}
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: ${(props) => props.theme.spacing.four}px;
  // margin-bottom: 32px;
  background: white;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.gray.three};
  box-shadow: ${(props) => props.theme.shadow.four};
`;

const Title = styled.h2`
  margin: 0 !important;
  padding-bottom: ${(props) =>
    props.border ? props.theme.spacing.three : '0'};
  margin-bottom: ${(props) =>
    props.border ? props.theme.spacing.four : props.theme.spacing.three}px;
  border-bottom: ${(props) =>
    props.border ? `2px solid ${props.theme.color.gray.two}` : 'none'};
`;

const Subtitle = styled.p`
  margin: 0;
  padding-bottom: ${(props) => props.theme.spacing.three}px;
  margin-bottom: ${(props) => props.theme.spacing.four}px;
  // color: #00000090 !important;
  border-bottom: 2px solid ${(props) => props.theme.color.gray.two};
`;

export default Card;
