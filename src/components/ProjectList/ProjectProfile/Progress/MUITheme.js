import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: 'rgb(93, 100, 101)',
    },
    secondary: {
      main: '#F0ECEC',
    }
  }
});


export default theme;