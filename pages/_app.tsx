import '../styles.css';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider,createTheme} from "@mui/material/styles";
// This default export is required in a new `pages/_app.js` file.
import Home from  "./index.tsx";
import React from "react";
export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
    	<CssBaseline />
    	<Home/>
    </React.Fragment>
  );
}
