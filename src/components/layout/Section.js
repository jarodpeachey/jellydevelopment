import React, { useContext } from 'react';
import styled from 'styled-components';
import { css } from 'linaria';
import { ThemeContext } from '../theme';
import Card from '../Card';

const Section = ({
  fullHeight,
  children,
  background,
  title,
  subtitle,
  center,
  customStyles,
  dark,
  light,
  thin,
  id,
  card,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledSection
      theme={theme}
      id={id}
      center={center}
      dark={dark}
      light={light}
      color={
        card
          ? 'white'
          : dark
          ? theme.color.primary.backgroundDark
          : light
          ? theme.color.primary.backgroundLight
          : background || 'transparent'
      }
    >
      {card ? (
        <div className='container'>
          <Card background={background}>
            {title && (
              <Title theme={theme} dark={dark}>
                {title}
              </Title>
            )}
            {subtitle && (
              <SubTitle theme={theme} dark={dark}>
                {subtitle}
              </SubTitle>
            )}
            {children}
          </Card>
        </div>
      ) : (
        <div className='container'>
          {title && (
            <Title theme={theme} dark={dark}>
              {title}
            </Title>
          )}
          {subtitle && (
            <SubTitle theme={theme} dark={dark}>
              {subtitle}
            </SubTitle>
          )}
          {children}
        </div>
      )}
    </StyledSection>
  );
};

const Title = styled.h2`
  color: ${(props) =>
    props.dark ? 'white' : props.theme.color.text.heading} !important;
`;

const SubTitle = styled.p`
  color: ${(props) =>
    props.dark ? '#ffffff90' : props.theme.color.text.heading} !important;
  margin: 0 auto;
  max-width: 768px !important;
`;

const StyledSection = styled.section`
  text-align: ${(props) => (props.center ? 'center' : 'inherit')};
  z-index: 1;
  background: ${(props) => props.color};
`;

export default Section;
