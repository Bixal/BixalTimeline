import React from "react";
import './LargeCard.css'
import { useState } from "react";
import ReactPlayer from "react-player";

// TIMELINE COMPONENT
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';

// CARD COMPONENTS
import { Card, CardActions, Button, CardContent, Typography, CardMedia} from '@mui/material'
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';

// MODALE COMPONENTS
import { Modal } from '@mui/material';

export default function LargeCard({id, newDate, title, summary, desc, photoData, video}) {
    // Reformat date
    let oldDate = new Date(newDate)
    let oldDateMonth = oldDate.toLocaleDateString("default", {month:'long'})
    let oldDateYear = oldDate.toLocaleDateString("default", {year:'numeric'})
    let reformattedDate = oldDateMonth + " " + oldDateYear

    // Open and close modal (timeline content)
    const [open, setOpen] = useState(false)
    function handleOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }

    // Open and close child modal (image)
    const [openPhoto, setOpenPhoto] = useState(false)
    function handleOpenPhoto() {
        setOpenPhoto(true);
    }
    function handleClosePhoto() {
        setOpenPhoto(false);
    }

    return(<>
    <div className="v_line"/>

    <TimelineItem key={id}>
        <TimelineContent>                                
            <Card elevation={0}>
                <CardContent>
                    <div className="lcContent">
                        <Typography variant="h4">
                            {reformattedDate}
                        </Typography>
                        <br/>
                        <Typography variant='h3' className="title">
                            {title}
                        </Typography>
                        <Typography variant="h5">
                            {summary}
                        </Typography>
                        <CardActions>
                            <div className="moreBtn">
                            <ArticleSharpIcon/>
                            <Button onClick={handleOpen} className="moreText">More</Button>
                            </div>
                            <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                            <Card className="modalContent">
                                <CardContent className="modalText"> 
                                    <Button id="closeBtn" onClick={handleClose}>X</Button>   
                                    <div className="modalTitle">
                                    <Typography variant="h4">{reformattedDate}</Typography>
                                    <Typography variant="h2">{title}</Typography>
                                    </div>
                                    <hr className="splitLineOrange"/>
                                    <div className="modalDesc">
                                    <Typography variant="h5" className="scrollDesc">{desc}</Typography>
                                        {photoData.map(({photoId, url}) => {
                                            return(<>
                                                <button onClick={handleOpenPhoto} className="openChildModalBtn">
                                                    <CardMedia
                                                    key={photoId}
                                                    component="img"
                                                    image={url}
                                                    height="70%"
                                                    className="modalImage"
                                                    />
                                                </button>
                                                <Modal
                                                    open={openPhoto}
                                                    onClose={handleClosePhoto}
                                                    aria-labelledby="child-modal-title"
                                                    aria-describedby="child-modal-description"
                                                    className="childModal"
                                                >
                                                    <Card onClick={handleClosePhoto} className="childModalCard">
                                                        <CardContent className="childModalContent">
                                                            <Button id="closeBtn" onClick={handleClosePhoto}>X</Button>
                                                            <CardMedia
                                                            key={photoId}
                                                            component="img"
                                                            image={url}
                                                            className="childModalPhoto"
                                                            />
                                                        </CardContent>
                                                    </Card>
                                                </Modal>
                                            </>)
                                        })}
                                    </div>
                                    <div className="videoPlayer">
                                        <hr className="splitLine"/>
                                        <ReactPlayer url={video} className="video"/>
                                    </div>
                                </CardContent>
                            </Card>
                            </Modal>
                        </CardActions>
                    </div>
                    <div className="cardImage">
                    {photoData.map(({photoId, url}) => {
                        return(
                            photoId === 0 &&
                            <CardMedia
                            key={photoId}
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