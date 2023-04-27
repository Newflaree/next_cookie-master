import type { AppProps } from 'next/app'
// Material UI
import { CssBaseline, ThemeProvider } from '@mui/material';
// Theme
import { darkTheme } from '@/themes';

import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  ); 
}
