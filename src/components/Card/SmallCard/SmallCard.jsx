import React from "react";
import './SmallCard.css'

// TIMELINE COMPONENT
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { TimelineOppositeContent } from "@mui/lab";

export default function SmallCard({id, newDate, title, desc, photo}) {
    let oldDate = new Date(newDate)
    let oldDateMonth = oldDate.toLocaleDateString("default", {month:'long'})
    let oldDateYear = oldDate.toLocaleDateString("default", {year:'numeric'})
    let reformattedDate = oldDateMonth + " " + oldDateYear
    
    return(<>
    <div className="v_line"/>
    <TimelineItem key={id} className="scContent">
        <TimelineOppositeContent display={"flex"} alignItems={"center"}>
            <div>
                <p>{reformattedDate}</p>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </TimelineOppositeContent>
        <TimelineContent>                                
        {photo.map(({url}) => {
            return (
                <img key={id} src={url} className="small-card"/>)
            })}
        </TimelineContent>
    </TimelineItem>
    </>)
}