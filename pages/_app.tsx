import '../styles.css';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider,createTheme} from "@mui/material/styles";
// This default export is required in a new `pages/_app.js` file.
import Home from  "./index.tsx";
export default function MyApp({ Component, pageProps }) {

  const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Home/>
    </ThemeProvider>
  );
}
