import React from 'react';
import styled from 'styled-components';

const Tab = ({ children, active, onClick, name, fullWidth }) => {
  return (
    <Wrapper
      onClick={() => onClick(name)}
      active={active}
      fullWidth={fullWidth}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  text-align: center;
  cursor: pointer;
  color: ${(props) =>
    props.active ? 'white' : props.theme.color.text.heading};
  background: ${(props) =>
    props.active ? props.theme.color.primary.main : 'transparent'};
  transition: 0.15s;
  border-bottom: 2px solid transparent;
  border-radius: 3px;
  width: ${(props) =>
    props.fullWidth || props.vertical ? '100%' : 'fit-content'};
  :hover {
    background: ${(props) =>
      props.active
        ? props.theme.color.primary.main
        : `${props.theme.color.gray.one}90`};
  }
`;

export default Tab;
