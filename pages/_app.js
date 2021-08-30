import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import { useState, useEffect } from 'react';
import { usePosition } from 'use-position';

import theme from '../config/theme';
import { PositionProvider } from '../utils/PositionContext';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #efefef;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error: geoError,
  } = usePosition();

  // Current position variable to hold data from usePosition and a fallback coordinate pair to pass to context
  // in the event that the user is blocking the use of their location
  const position = {
    currentPos: usePosition(),
    defaultPos: {
      latitude: 42.3445,
      longitude: -71.0302,
    },
  };

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 60000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PositionProvider value={position}>
          <Component {...pageProps} />
        </PositionProvider>
      </ThemeProvider>
    </SWRConfig>
  );
}
