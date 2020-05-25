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

const ContactSection = ({ data }) => {
  const theme = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    if (!message || !email || !name) {
      setError(true);
    } else {
      setError(false);

      const body = `
        ${message}
      `;

      const subject = `Message from ${name}`;

      window.location.href = `mailto:jarod@jellydevelopment.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div>
      <Section background='#ffffff'>
        <Title type='h2' className='mb-4'>
          Contact
        </Title>
        <Row spacing={[24]} breakpoints={[769]}>
          <div widths={[8]}>
            <Label>Name</Label>
            <Card className='p-none mb-4'>
              <input
                style={{
                  border: 'none',
                  padding: '16px 22px',
                  width: '100%',
                  background: 'transparent',
                }}
                value={name}
                onChange={onNameChange}
                placeholder='Elvis Presley'
              />
            </Card>
            <Label>Email</Label>
            <Card className='p-none mb-4'>
              <input
                style={{
                  border: 'none',
                  padding: '16px 22px',
                  width: '100%',
                  background: 'transparent',
                }}
                value={email}
                onChange={onEmailChange}
                placeholder='elvis@rocknroll.com'
              />
            </Card>
            <Label>Message</Label>
            <Card className='p-none mb-4'>
              <textarea
                style={{
                  border: 'none',
                  padding: '16px 22px',
                  width: '100%',
                  background: 'transparent',
                  minHeight: 140,
                }}
                value={message}
                onChange={onMessageChange}
                placeholder='This rocks!'
              />
            </Card>
            <Button onClick={onSubmit} left>
              Submit
            </Button>
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

const Feature = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;
const FeatureIcon = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-bottom: -10px;
  img {
    width: 95px;
    height: 95px;
    margin: 0 auto;
    filter: hue-rotate(60deg) invert(15%);
  }
`;
const FeatureTitle = styled.h3`
  text-align: center;
`;
const FeatureDescription = styled.p`
  text-align: center;
`;

export default ContactSection;
