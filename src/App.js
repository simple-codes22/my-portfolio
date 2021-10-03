import Home from './Components/Home/Home';
import MainProvider from './Components/Contexts/MainContext';
import {ThemeProvider, createTheme} from '@material-ui/core';

const MainTheme = createTheme({
  palette: {
    primary: {
      main: '#6f7dfa'
    },
    secondary: {
      main: '#f3f3f3'
    }
  },
  typography: {
    fontFamily: 'Noto Sans JP, sans-serif',
  }
})

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <MainProvider>
        <Home />
      </MainProvider>
    </ThemeProvider>
  );
}

export default App;
