import Card from './Card';
import Button from './Button';
import React, { useState, useContext } from 'react';
import { styled } from 'linaria/react';
import { ThemeContext } from './theme';

const ContactForm = ({ footer }) => {
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
      <Label className={footer ? 'light-1' : ''}>Name</Label>
      <Card className='p-none mb-4'>
        <input
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
      <Label className={footer ? 'light-1' : ''}>Email</Label>
      <Card className='p-none mb-4'>
        <input
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
      <Label className={footer ? 'light-1' : ''}>Message</Label>
      <Card className='p-none mb-4'>
        <textarea
          style={{
            border: 'none',
            padding: footer ? '12px 16px' : '16px 22px',
            width: '100%',
            background: 'transparent',
            minHeight: 140,
          }}
          value={message}
          onChange={onMessageChange}
          placeholder='This rocks!'
        />
      </Card>
      <Button small={footer} white={footer} outlined={footer} onClick={onSubmit} left>
        Submit
      </Button>
    </div>
  );
};

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export default ContactForm;
