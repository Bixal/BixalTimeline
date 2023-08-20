import React from 'react'
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import BixalTimeline from './components/Timeline/BixalTimeline'
import Header from './components/Header/Header'


// Font from Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material'


function App() {
  const [responseData, setResponseData] = useState('')

  // Database Request
  React.useEffect(() => {
    axios.get('https://api.baserow.io/api/database/rows/table/177139/?user_field_names=true', {
      headers : "Authorization: Token GfWL6G20UZaVyAo0tOCocEcMlC4iKZwG"
    })
      .then((response) => {
        setResponseData(response.data.results)
        // console.log(response)
      })
  }, [])

  if (!responseData) return null;

  console.log(responseData)

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 750,
        laptop: 1100,
        desktop: 1200,
      },
    },
  })
// Large Card Title; Modal Title
  theme.typography.h1 = {
    paddingTop: '20px',
    fontFamily: 'Georgia',
    fontWeight: 500,
    [theme.breakpoints.only('mobile')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.only('tablet')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.only('laptop')]: {
      fontSize: '2.5em',
    },
    [theme.breakpoints.only('desktop')]: {
      fontSize: '2.5em',
    },
};
// Large Card Subtitle 
  theme.typography.h2 = {
    fontFamily: 'Helvetica',
    fontWeight: 300,
    [theme.breakpoints.only('mobile')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.only('tablet')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.only('laptop')]: {
      fontSize: '1.75em',
    },
    [theme.breakpoints.only('desktop')]: {
      fontSize: '1.5em',
    },
  };
// Small Card Date
  theme.typography.h3 = {
    fontFamily: 'Georgia',
    fontWeight: 300,
    [theme.breakpoints.only('mobile')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.only('tablet')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.only('laptop')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.only('desktop')]: {
      fontSize: '1em',
    },
  };
// Small Card Title
  theme.typography.h4 = {
    fontFamily: 'Georgia',
    fontWeight: 300,
    [theme.breakpoints.only('mobile')]: {
      fontSize: '1em',
      fontWeight: 600,
    },
    [theme.breakpoints.only('tablet')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.only('laptop')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.only('desktop')]: {
      fontSize: '2em',
    },
  };
// Large Card Date; Modal Date
  theme.typography.h5 = {
    fontFamily: 'Georgia',
    fontWeight: 300,
    [theme.breakpoints.only('mobile')]: {
      fontSize: '1em',
      textAlign: 'center',
    },
    [theme.breakpoints.only('tablet')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.only('laptop')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.only('desktop')]: {
      fontSize: '1.5em',
    },
  };
  // Modal Description
  theme.typography.body1 = {
    fontFamily: 'Georgia',
    fontWeight: 300,
    [theme.breakpoints.only('mobile')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.only('tablet')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.only('laptop')]: {
      fontSize: '1.5em',
    },
    [theme.breakpoints.only('desktop')]: {
      fontSize: '1.3em',
    },
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Header/>
      <BixalTimeline value={responseData}/>
    </ThemeProvider>
    </>
  )
}

export default App
