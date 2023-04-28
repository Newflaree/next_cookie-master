import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

Link
export const Navbar = () => {
  const router = useRouter();

  return (
    <AppBar
      position='sticky'
      elevation={ 0 }
    >
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
        >
          <MenuOutlined />
        </IconButton>

        <NextLink
          href='/'
          style={{
            textDecoration: 'none'
          }}
        >
          <Typography
            variant='h6'
            color='white'
          >
            CoockieMaster
          </Typography>
        </NextLink>

        <div style={{ flex: 1 }} />

        <NextLink
          href='/theme-changer'
          style={{
            textDecoration: 'none'
          }}
        >
          <Typography
            variant='h6'
            color='white'
          >
            Canbiar Tema
          </Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
}
