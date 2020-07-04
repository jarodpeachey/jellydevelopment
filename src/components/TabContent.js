import React from 'react';
import styled, { css } from 'styled-components';
import Card from './Card';

const TabContent = ({
  children,
  className,
  id,
  active,
  customStyles,
  value,
  name,
}) => {
  return (
    <Wrapper
      className={className}
      id={id}
      active={value === name}
      customStyles={customStyles}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  padding: 0px !important;
  border: none !important;
  display: none !important;
  ${(props) =>
    props.active &&
    css`
      display: block !important;
      padding: ${props.theme.spacing.four}px !important;
      background: ${props.background};
      border-radius: 5px;
      border: 1px solid ${props.theme.color.gray.three} !important;
    `};
`;

export default TabContent;
