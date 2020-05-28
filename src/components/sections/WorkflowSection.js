import React, { useContext } from 'react';
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
import Button from '../Button';
import projectAgreement from '../../images/project-agreement.png';
import projectRequirements from '../../images/project-requirements.png';
import projectDevelopment from '../../images/project-development.png';
import projectRevision from '../../images/project-revision.png';
import projectCompletion from '../../images/project-completion.png';

import list from '../../images/list.png';
import handshake from '../../images/handshake.png';
import code from '../../images/code.png';
import edit from '../../images/edit.png';
import complete from '../../images/complete.png';

const WorkflowSection = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Section background={`#fff`}>
        <SmallTitle small>How I Do It</SmallTitle>
        <Title className='max-2' type='h2'>
          Your website, your decisions
        </Title>
        <p className='max-3'>
          I make sure everything I do recieves a seal of approval from you
          before I start, and my attention to detail ensures the highest quality
          for your site.
        </p>
        <Spacer height={theme.spacing.seven * 1.3} />
        <Row spacing={[24, 0]} breakpoints={[769]}>
          <Item className='mb-7' widths={[6]}>
            <ItemNumber theme={theme}>1</ItemNumber>
            <ItemImage className='mb-5 icon' src={list} />
            <Title className='center' type='h3'>
              Project Requirements
            </Title>
            <p className='center max-4'>
              Before beginning work on your project, you'll provide me with the
              project requirements. Then, we'll discuss a timeframe for the
              completion of the project, and I'll give a qoute.
            </p>
          </Item>

          <Item className='mb-7' widths={[6]}>
            <ItemNumberRight theme={theme}>2</ItemNumberRight>
            <ItemImage className='mb-5 icon' src={handshake} />
            <Title className='center' type='h3'>
              Project Agreement
            </Title>
            <p className='center max-4'>
              After the project requirements and timeframe are laid out, we'll
              put these things into writing with an agreement that both parties
              will sign.
            </p>
          </Item>

          <Item className='mb-7' widths={[6]}>
            <ItemNumber theme={theme}>3</ItemNumber>
            <ItemImage className='mb-5 icon' src={code} />
            <Title className='center' type='h3'>
              Project Development
            </Title>
            <p className='center max-4'>
              The meat in the project sandwhich. I'll develop you website or
              application for you within the specified time frame. I'll contact
              you every week with updates, or if I come across something that
              you should be alerted of. You'll have a fully-functioning
              application before moving on to the revision stage
            </p>
          </Item>

          <Item className='mb-7' widths={[6]}>
            <ItemNumberRight theme={theme}>4</ItemNumberRight>
            <ItemImage className='mb-5 icon' src={edit} />
            <Title className='center' type='h3'>
              Project Revision
            </Title>
            <p className='center max-4'>
              If you find something that I may have missed, or have another
              request, I'll apply small changes to your application or site
              until I've met all your requirements.
            </p>
          </Item>

          <Item className='mb-7' widths={[6]}>
            <ItemNumber theme={theme}>5</ItemNumber>
            <ItemImage className='mb-5 icon' src={complete} />
            <Title className='center' type='h3'>
              Project Completion
            </Title>
            <p className='center max-4'>I give you your website!</p>
            <p className='center max-4'>
              After I've made any final adjustements and payment is collected,
              I'll send your entire website or application, along with full
              rights to the code and all the resources used.
            </p>
          </Item>
        </Row>
        <Button className='center' primary>
          Get A Quote
        </Button>
      </Section>
    </div>
  );
};

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  position: relative;
  p,
  h3 {
    max-width: 450px !important;
    z-index: 1;
  }
`;

const ItemNumber = styled.h1`
  font-size: 250px;
  position: absolute;
  top: -20%;
  left: 0;
  z-index: 0;
  margin: 0;
  font-weight: 900 !important;
  color: ${(props) => props.theme.color.gray.two};
`;

const ItemNumberRight = styled.h1`
  font-size: 250px;
  position: absolute;
  top: -20%;
  z-index: 0;
  margin: 0;
  font-weight: 900 !important;
  color: ${(props) => props.theme.color.gray.two};
  @media (max-width: 768px) {
    right: 0;
  }
  @media (min-width: 769px) {
    left: 0;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  margin: 0 auto;
`;

export default WorkflowSection;
