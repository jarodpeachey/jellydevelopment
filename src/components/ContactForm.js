import Card from './Card';
import Button from './Button';
import React, { useState, useContext } from 'react';
import { styled } from 'linaria/react';
import { ThemeContext } from './theme';
import Row from './grid/Row';

const ContactForm = ({ footer }) => {
  const theme = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [customSolutions, setCustomSolutions] = useState(false);

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
    <form action='https://formspree.io/mwkrlzjn' method='POST'>
      <Row spacing={[18, 12]} breakpoints={footer ? [769, 1100] : [769]}>
        <div widths={footer ? [6, 12] : [6]}>
          <Label className={footer ? 'light-1 bold' : 'font-3 bold'}>
            Name
          </Label>
          <Card className='p-none'>
            <input
              required='required'
              aria-required='true'
              style={{
                border: 'none',
                padding: footer ? '12px 16px' : '16px 22px',
                width: '100%',
                background: 'transparent',
              }}
              value={name}
              onChange={onNameChange}
              placeholder='Elvis Presley'
            />
          </Card>
        </div>
        <div widths={footer ? [6, 12] : [6]}>
          <Label className={footer ? 'light-1 bold' : 'font-3 bold'}>
            Email
          </Label>
          <Card className='p-none'>
            <input
              required='required'
              aria-required='true'
              style={{
                border: 'none',
                padding: footer ? '12px 16px' : '16px 22px',
                width: '100%',
                background: 'transparent',
              }}
              value={email}
              onChange={onEmailChange}
              placeholder='elvis@rocknroll.com'
            />
          </Card>
        </div>
        <div widths={[12]}>
          <Label className={footer ? 'light-1 bold' : 'font-3 bold'}>
            Message
          </Label>
          <Card className='p-none'>
            <textarea
              required='required'
              aria-required='true'
              style={{
                border: 'none',
                padding: footer ? '12px 16px' : '16px 22px',
                width: '100%',
                background: 'transparent',
                minHeight: 140,
              }}
              value={message}
              onChange={onMessageChange}
              placeholder='I need a website. Make it a cool one.'
            />
          </Card>
        </div>
        {!footer && (
          <div widths={[12]}>
            <Label className={footer ? 'light-1 bold' : 'font-3 bold'}>
              What are you looking for?
            </Label>
            <label className='mb-1 display-block cursor-pointer width-auto'>
              <input
                className='mr-4'
                type='checkbox'
                name='services'
                value='web-design'
              />
              Web Design
            </label>
            <label className='mb-1 display-block cursor-pointer width-auto'>
              <input
                className='mr-4'
                type='checkbox'
                name='services'
                value='web-development'
              />
              Web Development
            </label>
            <label className='mb-1 display-block cursor-pointer width-auto'>
              <input
                className='mr-4'
                type='checkbox'
                name='updates'
                value='updates'
              />
              Website Fixes + Updates
            </label>
            {/* <label className='mb-1 display-bloc4 cursor-pointer'>
              <input className="mr-3" type='checkbox' name='services' value='hosting' />
              Hosting
            </label> */}
            <label className='mb-1 display-block cursor-pointer width-auto'>
              <input
                className='mr-4'
                onChange={() => setCustomSolutions(!customSolutions)}
                type='checkbox'
                name='custom-solutions'
                value='custom-solutions'
              />
              Custom Solutions
            </label>
            {customSolutions && (
              <label className='mb-1 display-block' style={{ marginLeft: 34 }}>
                <Card className='p-none width-auto mt-3'>
                  <input
                    className='font-2'
                    required='required'
                    aria-required='true'
                    style={{
                      border: 'none',
                      padding: '8px 12px',
                      background: 'transparent',
                    }}
                    placeholder='Specify...'
                  />
                </Card>
              </label>
            )}
          </div>
        )}

        <div widths={[12]}>
          <Button
            small={footer}
            white={footer}
            outlined={footer}
            type='submit'
            left
          >
            Get Started
          </Button>
        </div>
      </Row>
    </form>
  );
};

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export default ContactForm;
