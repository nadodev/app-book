import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Loading from './src/components/Loading';
import { Home } from './src/screens/Home';
import theme from './src/theme';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return (
    <>
      <ThemeProvider theme={theme}>
          <StatusBar 
            barStyle="light-content" 
            backgroundColor="transparent"
            translucent />
          {fontsLoaded ? <Home /> : <Loading/>}
      </ThemeProvider>
    </>
  );
}


