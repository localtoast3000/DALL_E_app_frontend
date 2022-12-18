import '../styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { lightPalette } from '../theme/palette/light';
import { darkPalette } from '../theme/palette/dark';
import { purple, green } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface ThemeOptions {}
}

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({ palette: Object(lightPalette) });

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
