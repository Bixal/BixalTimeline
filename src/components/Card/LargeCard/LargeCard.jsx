import React from "react";
import './LargeCard.css'

// TIMELINE COMPONENT
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

// Card Components
import { Card, CardActions, Button, CardContent, Typography, CardMedia} from '@mui/material'
import { ThemeProvider } from "@emotion/react";

export default function LargeCard({id, newDate, title, desc, photo}) {
    let oldDate = new Date(newDate)
    let oldDateMonth = oldDate.toLocaleDateString("default", {month:'long'})
    let oldDateYear = oldDate.toLocaleDateString("default", {year:'numeric'})
    let reformattedDate = oldDateMonth + " " + oldDateYear

    return(<>
    <div className="v_line"/>
    <TimelineItem key={id}>
        <TimelineContent>                                
            <Card>
                <CardContent>
                    <div className="lcContent">
                        <Typography variant="h4">
                            {reformattedDate}
                        </Typography>
                        <br/>
                        <Typography variant='h3' className="title">
                            {title}
                        </Typography>
                        <br />
                        <Typography variant="h5">
                            {desc}
                        </Typography>
                        <CardActions>
                            <Button color="secondary" variant="outlined">More</Button>
                        </CardActions>
                    </div>
                    <div className="cardImage">
                        {photo.map(({url}) => {
                            return (
                                <CardMedia
                                key={id}
                                component="img"
                                image={url}
                                height="250px"
                                />)
                            })}
                    </div>
                </CardContent>
            </Card>
        </TimelineContent>
    </TimelineItem>
    </>)
}