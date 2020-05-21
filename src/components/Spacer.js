import React from 'react';
import { styled } from 'linaria/react';
import { css } from 'linaria';

const Spacer = ({ height }) => {
  return <StyledSpacer height={height || 16} />;
};

const StyledSpacer = styled.div`
  height: ${(props) => props.height}px;
  width: 100%;
`;

export default Spacer;
