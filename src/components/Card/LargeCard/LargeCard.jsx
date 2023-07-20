import React from "react";
import './LargeCard.css'
import { useState } from "react";

// TIMELINE COMPONENT
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';

// CARD COMPONENTS
import { Card, CardActions, Button, CardContent, Typography, CardMedia} from '@mui/material'

// MODALE COMPONENTS
import { Modal } from '@mui/material';


export default function LargeCard({id, newDate, title, summary, desc, photo}) {
    // Reformat date
    let oldDate = new Date(newDate)
    let oldDateMonth = oldDate.toLocaleDateString("default", {month:'long'})
    let oldDateYear = oldDate.toLocaleDateString("default", {year:'numeric'})
    let reformattedDate = oldDateMonth + " " + oldDateYear

    // Open and close modal
    const [open, setOpen] = useState(false)
    function handleOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }

    return(<>
    <div className="v_line"/>

    <TimelineItem key={id}>
        <TimelineContent>                                
            <Card elevation={4}>
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
                            {summary}
                        </Typography>
                        <CardActions>
                            <Button onClick={handleOpen} color="secondary" variant="outlined">More</Button>
                            <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                            <Card className="modalContent">
                                <CardContent className="modalText"> 
                                    <div className="modalTitle">
                                    <Typography variant="h4">{reformattedDate}</Typography>
                                    <Typography variant="h2">{title}</Typography>
                                    </div>
                                    <div className="modalDesc">
                                    <Typography variant="h5" className="scrollDesc">{desc}</Typography>
                                    {photo.map(({url}) => {
                                        return (
                                            <CardMedia
                                            key={id}
                                            component="img"
                                            image={url}
                                            height="65%"
                                            className="modalImage"
                                            />)
                                        })}
                                    </div>                               
                                </CardContent>
                            </Card>
                            </Modal>
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