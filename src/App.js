import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Menubar from './Components/Menubar';
import HeroCard from './Components/Card';
import Circle from './Components/Circle';
import Boxes from './Components/Boxes';
import Priceboxes from './Components/Priceboxes';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif' },
    h2: { fontFamily: '"Playfair Display", serif' },
    h3: { fontFamily: '"Playfair Display", serif' },
    h4: { fontFamily: '"Playfair Display", serif' },
  },
  palette: {
    primary: {
      main: '#1a202c',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-white font-sans antialiased">
        <Menubar />
        <main>
          <HeroCard />
          <Circle />
          <Boxes />
          <Priceboxes />
        </main>
      </div>
    </ThemeProvider>
  );
}