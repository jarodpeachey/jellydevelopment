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
          <Row spacing={[18, 26]} breakpoints={[769, 1100]}>
            <div widths={[6, 4]}>
              <Title className='light-1 mb-4' type='h2'>
                JELLY
              </Title>
              <div className='light-2 mb-6'>
                Modern web solutions for you and your business.
              </div>
              <SmallTitle className='light-1 mb-none'>Email</SmallTitle>
              <p className='light-2 mt-none'>jarod@jellydevelopment.com</p>
              <SmallTitle className='light-1 mb-none'>Phone</SmallTitle>
              <p className='light-2 mt-none'>717-682-2910</p>
              <SmallTitle className='light-1 mb-none'>Address</SmallTitle>
              <p className='light-2 mt-none'>
                Jelly Development LLC
                <br />
                411 Walnut St #14431
                <br />
                Green Cove Springs, FL 32043
              </p>
            </div>
            <div widths={[3, 2]}>
              <SmallTitle className='light-1 mt-none mb-4'>
                Navigation
              </SmallTitle>
              <Link
                style={{ display: 'block' }}
                to='/'
                className='light-2 my-2'
              >
                Home
              </Link>
              <Link
                style={{ display: 'block' }}
                to='/about'
                className='light-2 my-2'
              >
                About
              </Link>
              <Link
                style={{ display: 'block' }}
                to='/contact'
                className='light-2 my-2'
              >
                Contact
              </Link>
            </div>
            <div widths={[3, 2]}>
              <SmallTitle className='light-1 mt-none mb-4'>Services</SmallTitle>
              <Link
                style={{ display: 'block' }}
                to='/static-sites'
                className='light-2 my-2'
              >
                Static Websites
              </Link>
              <Link
                style={{ display: 'block' }}
                to='/custom-solutions'
                className='light-2 my-2'
              >
                Custom Solutions
              </Link>
            </div>
            <div widths={[12, 4]} className='full-width'>
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
  background: #191a29;
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
