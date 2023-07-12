import React from 'react';
import { useState } from 'react';
// import DateConverter from '../DateConvertion/DateConvertion';

// Timeline Components
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

// Card Components
import { Card, CardActions, Button, CardContent, Typography, CardMedia, Modal, Box} from '@mui/material'
import OrderDate from '../Date/OrderDate';


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
      {newData.map(({id, newDate, title, desc, photo}) => {
        
        // Reformat Date to Month, Day, Year
        let oldDate = new Date(newDate)
        let oldDateMonth = oldDate.toLocaleDateString("default", {month:'long'})
        let oldDateYear = oldDate.toLocaleDateString("default", {year:'numeric'})
        let reformattedDate = oldDateMonth + " " + oldDateYear

        return (<TimelineItem key={id}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>                                
            <Card elevation={4}>
              {photo.map(({url}) => {
                return (
                  <CardMedia
                    key={id}
                    component="img"
                    height="140"
                    image={url}
                  />)
              })}
              <CardContent>
                <Typography variant="h5">
                  {reformattedDate}
                </Typography>
                <hr />
                <Typography variant='h4'>
                  {title}
                </Typography>
                <br />
                <Typography variant="body1">
                  {desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button>More</Button>
              </CardActions>
          </Card>
          </TimelineContent>
        </TimelineItem>)
      })}
    </Timeline>
  </>)
}