import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../layout/Section';
import Row from '../grid/Row';
import { ThemeContext } from '../theme';
import speed from '../../images/speed.png';
import security from '../../images/security.png';
import scalability from '../../images/scalability.png';
import cost from '../../images/cost.png';
import Spacer from '../Spacer';
import { Title, SmallTitle } from '../Title';
import GetStartedSection from './GetStartedSection';
import Card from '../Card';
import Button from '../Button';
import ContactForm from '../ContactForm';

const ContactSection = ({ data }) => {
  return (
    <div>
      <Section background='#ffffff'>
        <SmallTitle>Contact</SmallTitle>
        <Title type='h2' className='mb-4'>
          Ready for Your Website?
        </Title>
        <p className='max-3 mb-6'>
          Let me know what you're looking for, and I'll respond withing 24 hours
          with answers to any questions you may have about getting your website.
        </p>
        <Row spacing={[24]} breakpoints={[769]}>
          <div widths={[8]}>
            <ContactForm />
          </div>
          <div widths={[4]} style={{ marginTop: 30 }}>
            <Card className='bg-white'>
              <SmallTitle className='m-none p-none'>Email</SmallTitle>
              <p className='m-none mb-4'>jarod@jellydevelopment.com</p>
              <SmallTitle className='m-none p-none'>Phone</SmallTitle>
              <p className='m-none mb-4'>717-682-2910</p>
              <SmallTitle className='m-none p-none'>Address</SmallTitle>
              <p className='m-none'>
                Jelly Development LLC
                <br />
                411 Walnut St #14431
                <br />
                Green Cove Springs, FL 32043
              </p>
            </Card>
          </div>
        </Row>
      </Section>
    </div>
  );
};

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export default ContactSection;
