// React
import {
  ChangeEvent,
  useEffect,
  useState
} from 'react';
// Material UI
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';
// JS-Cookie
import Cookies from 'js-cookie';
// Layouts
import { MainLayout } from '@/components/layouts';


const ThemeChangerPage = () => {
  const [ currentTheme, setCurrentTheme ] = useState( 'light' );

  const onThemeChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    const selectedTheme = event.target.value;
    setCurrentTheme( selectedTheme );

    localStorage.setItem( 'theme', selectedTheme );
    Cookies.set( 'theme', selectedTheme );
  }

  useEffect( () => {
    console.log( localStorage.getItem( 'theme' ) );
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
        </CardContent>
      </Card>
    </MainLayout>
  );
}

export default ThemeChangerPage;
