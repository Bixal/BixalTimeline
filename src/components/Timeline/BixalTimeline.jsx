import React from 'react';
import LargeCard from '../Card/LargeCard/LargeCard.jsx';
import SmallCard from '../Card/SmallCard/SmallCard.jsx';

// Timeline Components
import Timeline from '@mui/lab/Timeline';
import { withStyles } from '@mui/material';
import { TimelineConnector, TimelineContent, TimelineSeparator } from '@mui/lab';

export default function BixalTimeline({ value }) {

  // ORDER DATES IN CHRONOLOGICAL ORDER
  let newData = []
  value.map(({id, date, title, desc, photo, contentType}) => {

      let newDate = new Date(date)
      let newDateData = {id, newDate, title, desc, photo, contentType}
      newData.push(newDateData)
      newData.sort(function(a, b){
          return a.newDate - b.newDate
      })
      
  })

  // RETURN AS TIMELINE COMPONENT
  return (<>
    <Timeline position="alternate">
      {newData.map(({id, newDate, title, desc, photo, contentType}) => {
        let milestoneType = contentType.value
        if (milestoneType === "large"){
          return (
          <LargeCard
            key = {id}
            id = {id} 
            newDate = {newDate} 
            title = {title} 
            desc = {desc} 
            photo = {photo} 
            contentType = {contentType}
            />)
        } else if (milestoneType === "small") {
          return (
          <SmallCard
            key = {id}
            id = {id} 
            newDate = {newDate} 
            title = {title} 
            desc = {desc} 
            photo = {photo} 
            contentType = {contentType}/>)
        }
      })}
    </Timeline>
  </>)
}