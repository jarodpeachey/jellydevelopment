import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import Flex from './Flex';
import Card from './Card';
// import TabContent from './TabContent';

const TabList = ({
  children,
  onClick,
  customStyles = null,
  selectedTab,
  fullWidth,
  indicatorColor,
}) => {
  return (
    <Card customStyles={customStyles}>
      <Flex hAlign='start'>
        {children.map((child) => {
          console.log(child.type.name);
          let newProps = {
            ...child.props,
            onClick: onClick,
            fullWidth: fullWidth,
            indicatorColor: indicatorColor,
          };
          newProps.active = selectedTab === child.props.name;

          return (
            <>
              <Tab {...newProps}>{child.props.children}</Tab>
            </>
          );
        })}
      </Flex>
    </Card>
  );
};

const Wrapper = styled.div`
  ${(props) => props.customStyles}
`;

export default TabList;
