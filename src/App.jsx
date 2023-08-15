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
  })

  if (!responseData) return null;

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: 55,
        fontFamily: 'Georgia'
      },
      h2: {
        fontSize: 35,
        fontFamily: 'Helvetica'
      },
      h3: {
        fontSize: 20,
        fontFamily: 'Georgia'
      },
      h4: {
        fontSize: 30,
        fontFamily: 'Georgia'
      },
      h5: {
        // fontSize: 20,
        // fontFamily: 'Georgia'
      },
      body1: {
        fontWeight: 500,
        fontFamily: 'Helvetica'
      },
      
    },
  });

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
