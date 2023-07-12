import React from 'react'
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import BixalTimeline from './components/Timeline/BixalTimeline'


// Font from Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import OrderDate from './components/Date/OrderDate'




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

  return (
    <>
      {/* <OrderDate value={responseData} /> */}
      <BixalTimeline value={responseData}/>
    </>
  )
}

export default App
