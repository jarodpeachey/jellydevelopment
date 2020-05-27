/* eslint-disable react/jsx-fragments */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import Row from '../grid/Row';
import { ThemeContext } from '../theme';
import { Title, SmallTitle } from '../Title';
import { Link } from 'gatsby';
import ContactForm from '../ContactForm';

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <FooterWrapper theme={theme}>
        <FooterContainer className='container'>
          <Row spacing={[18, 18]} breakpoints={[576, 960]}>
            <div widths={[4, 3]}>
              <Title className='light-1 mb-4' type='h3'>
                JELLY
              </Title>
              <div className='light-2'>
                Modern web solutions for you and your business.
              </div>
            </div>
            <div widths={[4, 2]}>
              <SmallTitle className='light-1 mt-none mb-4'>
                Navigation
              </SmallTitle>
              <Link style={{ display: 'block' }} to='/' className='light-2'>
                Home
              </Link>
              <Link
                style={{ display: 'block' }}
                to='/about'
                className='light-2'
              >
                About
              </Link>
              <Link
                style={{ display: 'block' }}
                to='/contact'
                className='light-2'
              >
                Contact
              </Link>
            </div>
            <div widths={[4, 3]}>
              <SmallTitle className='light-1 mt-none mb-4'>Services</SmallTitle>
              <Link
                style={{ display: 'block' }}
                to='/static-sites'
                className='light-2'
              >
                Static Websites
              </Link>
              <Link
                style={{ display: 'block' }}
                to='/custom-solutions'
                className='light-2'
              >
                Custom Solutions
              </Link>
            </div>
            <div widths={['auto', 4]}>
              <SmallTitle className='light-1 mt-none mb-4'>Contact</SmallTitle>
              <ContactForm footer />
            </div>
          </Row>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.text.dark.one};
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

const FooterLink = styled.a`
  display: block;
`;

const FooterContainer = styled.div``;

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
