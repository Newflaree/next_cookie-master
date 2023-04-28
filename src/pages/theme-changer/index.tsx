// React
import {
  ChangeEvent,
  FC,
  useEffect,
  useState
} from 'react';
// Next.js
import { GetServerSideProps } from 'next';
import Cookies from 'js-cookie';
// Axios
// Material UI
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';
// JS-Cookie
import axios from 'axios';
// Layouts
import { MainLayout } from '@/components/layouts';

interface Props {
  theme: string;
}


const ThemeChangerPage: FC<Props> = ({ theme }) => {
  const [ currentTheme, setCurrentTheme ] = useState( 'light' );

  const onThemeChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    const selectedTheme = event.target.value;
    setCurrentTheme( selectedTheme );

    Cookies.set( 'theme', selectedTheme );
    Cookies.set( 'name', 'Camilo' );
  }

  const onClick = async () => {
    const { data } = await axios.get( '/api/hello' );
    console.log({ data });
  }

  useEffect( () => {
    //console.log( localStorage.getItem( 'theme' ) );
    console.log( Cookies.get( 'theme' ) );
  }, [] );

  return (
    <MainLayout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>
              Tema
            </FormLabel>

            <RadioGroup
              value={ currentTheme }
              onChange={ onThemeChange }
            >
              <FormControlLabel 
                value='light'
                control={ <Radio /> }
                label='Light'
              />
              <FormControlLabel 
                value='dark'
                control={ <Radio /> }
                label='Dark'
              />
              <FormControlLabel 
                value='custom'
                control={ <Radio /> }
                label='Custom'
              />
            </RadioGroup>
          </FormControl>

          <Button onClick={ onClick }>
            Solicitud
          </Button>
        </CardContent>
      </Card>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'light', name = 'No name' } = req.cookies;

  const validThemes = [ 'light', 'dark', 'custom' ];

  return {
    props: {
      theme: validThemes.includes( theme ) ? theme : 'light',
      name
    }
  }
}

export default ThemeChangerPage;
