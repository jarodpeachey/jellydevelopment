/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import '../components/layout.css';
import { styled } from 'linaria/react';
import { css } from 'linaria';
import { CustomThemeProvider } from '../components/theme';
import { isBrowser } from '../utils/isBrowser';

const theme = {
  shadow: {
    one: '0 1px 4px 0 rgba(76, 82, 103, 0.1)',
    two: '0 3px 10px 0 rgba(76, 82, 103, 0.15)',
  },
  radius: {
    one: '4px',
    two: '6.5px',
    three: '10.5px',
    four: '17px',
    five: '27.5px',
    six: '45px',
    seven: '73px',
  },
  spacing: {
    one: 4,
    two: 6.5,
    three: 10.5,
    four: 17,
    five: 27.5,
    six: 45,
    seven: 73,
  },
  color: {
    success: '#00ab66',
    error: '#ff6347',
    text: {
      paragraph: '#4c5267',
      heading: '#2c2f3b',
      dark: '#0e1e24',
    },
    primary: {
      // light: '#fab86c',
      main: '#b4267c',
      // dark: '#f76b2b',
    },
    secondary: {
      // light: '#fab86c',
      main: '#632695',
      // dark: '#f76b2b',
    },
    gray: {
      one: '#F7F7F7',
      two: '#F1F1F1',
      three: '#EBEBEB',
      four: '#DADBDB',
      five: '#C8CACB',
      six: '#ABAEB0',
      seven: '#929699',
      eight: '#787D81',
      nine: '#464C52',
      ten: '#131B23',
    },
  },
};

export const globals = css`
  :global {
    body {
      background: linear-gradient(
        to right,
        ${theme.color.primary.main},
        ${theme.color.secondary.main}
      );
    }
    p,
    small,
    code {
      color: ${theme.color.text.paragraph};
    }
    strong {
      color: ${theme.color.text.dark};
    }
    p,
    small,
    span,
    div,
    select,
    input,
    td,
    th,
    button {
      font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
      font-size: 16px;
      font-weight: 400;
    }
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    }
    .subtitle {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    }
    p {
      line-height: 27px;
      font-size: 18px;
    }
    small {
      font-size: 14px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.color.text.heading};
    }
    h1,
    h2 {
      margin-bottom: ${theme.spacing.five}px;
    }
    h3,
    h4 {
      margin-bottom: ${theme.spacing.four}px;
    }
    h5,
    h6 {
      margin-bottom: ${theme.spacing.three}px;
    }
    a {
      transition: none !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export const StylesProvider = (props) => {
  let scrollbarWidth = 10;

  if (isBrowser()) {
    const outer = isBrowser() && document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    isBrowser() && document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = isBrowser() && document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
  } else {
    scrollbarWidth = 10;
  }

  return (
    <CustomThemeProvider>
      <CustomThemeProvider theme={theme}>
        <StyleWrapper
          theme={theme}
          textColor={theme.color.text.heading}
          width={scrollbarWidth}
        >
          {props.children}
        </StyleWrapper>
      </CustomThemeProvider>
    </CustomThemeProvider>
  );
};

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-height: 99999999999999999px !important;
  width: 100%;
  height: 100%;
  // padding-right: ${(props) => props.width}px;
`;
