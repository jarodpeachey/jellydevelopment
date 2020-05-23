/* eslint-disable react/jsx-fragments */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import Row from '../grid/Row';
import { ThemeContext } from '../theme';
import { Title } from '../Title';

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {typeof window !== 'undefined' &&
      !window.location.pathname.includes('/signup') &&
      !window.location.pathname.includes('/login') ? (
        <FooterWrapper theme={theme}>
          <FooterContainer className='container'>
            <Row spacing={[12, 0]} breakpoints={[1]}>
              <div widths={[6]}>
                <FooterTitle>
                  <Title className='light-1' type='h3'>
                    JELLY
                  </Title>
                </FooterTitle>
              </div>
            </Row>
          </FooterContainer>
        </FooterWrapper>
      ) : null}
    </>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.primary.backgroundDark};
  color: white;
  display: block;
  margin-top: auto;
`;

const FooterTitle = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  height: 50px;
  h2 {
    margin: 0;
    color: #ffffff !important;
  }
`;

const FooterContainer = styled.div`
  padding-top: 10px !important;
  padding-bottom: 10px !important;
`;

const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const FooterMenuLink = styled.a`
  padding: 12px !important;
  font-size: 26px !important;
  text-decoration: none;
  color: white !important;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    width: 30px !important;
    height: 30px !important;
  }
  :hover {
    background: #ffffff30;
  }
`;

export default Footer;
