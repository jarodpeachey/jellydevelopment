import React, { useContext, useState } from 'react';
import { styled } from 'linaria/react';
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
        <Title type='h2' className='mb-4'>
          Contact
        </Title>
        <Row spacing={[24]} breakpoints={[769]}>
          <div widths={[8]}>
            <ContactForm />
          </div>
          <div widths={[4]} style={{ marginTop: 30 }}>
            <Card className='bg-white'>
              <SmallTitle className='m-none p-none'>Questions</SmallTitle>
              <p className='m-none mb-4'>jarod@jellydevelopment.com</p>
              <SmallTitle className='m-none p-none'> Sales</SmallTitle>
              <p className='m-none'>sales@jellydevelopment.com</p>
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
