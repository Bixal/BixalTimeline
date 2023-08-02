import React from 'react';
import LargeCard from '../Card/LargeCard/LargeCard.jsx';
import SmallCard from '../Card/SmallCard/SmallCard.jsx';

// Timeline Components
import Timeline from '@mui/lab/Timeline';


export default function BixalTimeline({ value }) {

  // ORDER DATES IN CHRONOLOGICAL ORDER
  let newData = []
  value.map(({id, date, title, summary, desc, photo, video, contentType}) => {

      let photoId = 0
      let photoData = []
      if (photo.length > 1) {
        photo.map(({url}) => {
          let photoX = {photoId, url}
          photoData.push(photoX)
          photoId++
        })
      } else {
        photo.map(({url}) => {
          let photoX = {photoId, url}
          photoData.push(photoX)
          photoId++
        })
      }
      let newDate = new Date(date)
      let newDateData = {id, newDate, title, summary, desc, photoData, video, contentType}
      newData.push(newDateData)

      newData.sort(function(a, b){
        return a.newDate - b.newDate
      })
  })

  console.log(newData)

  // RETURN AS TIMELINE COMPONENT
  return (<>
    <Timeline position="alternate">
      {newData.map(({id, newDate, title, summary, desc, photoData, video, contentType}) => {
        let milestoneType = contentType.value
        if (milestoneType === "large"){
          return (
          <LargeCard
            key = {id}
            id = {id} 
            newDate = {newDate} 
            title = {title}
            summary = {summary} 
            desc = {desc}
            photoData = {photoData}
            video = {video} 
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
            photoData = {photoData}
            video = {video} 
            contentType = {contentType}/>)
        }
      })}
    </Timeline>
  </>)
}