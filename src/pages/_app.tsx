import type { AppContext, AppProps } from 'next/app'
// Material UI
import { CssBaseline, ThemeProvider } from '@mui/material';
// Theme
import { darkTheme } from '@/themes';

import '@/styles/globals.css'


export default function App({ Component, pageProps, ...rest }: AppProps) {

  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  ); 
}

App.getInitialProps = async ( appContext: AppContext ) => {
  const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any ).cookies : { theme: 'light' }
  const validThemes = [ 'light', 'dark', 'custom' ];

  return {
    theme: validThemes.includes( theme ) ? theme : 'light'
  }
}
