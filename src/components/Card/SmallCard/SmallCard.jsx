import React from "react";
import './SmallCard.css'

//ACCORDIAN COMPONENT
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from "@mui/material";

export default function SmallCard({id, newDate, title, desc, photoData}) {
    let oldDate = new Date(newDate)
    let oldDateMonth = oldDate.toLocaleDateString("default", {month:'long'})
    let oldDateYear = oldDate.toLocaleDateString("default", {year:'numeric'})
    let reformattedDate = oldDateMonth + " " + oldDateYear
    
    return(<>
    <div className="v_line"/>
    <Accordion className="smallAccordion" elevation={1}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">
            <div id="scAccordion">
                <Typography variant="body1">{reformattedDate}</Typography>
                <Typography variant="h6">{title}</Typography>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant="body2" className="accordDesc">{desc}</Typography>
            {photoData.map(({photoId, url}) => {
                return (
                    <img key={photoId} src={url} className="small-card"/>)
                })}
        </AccordionDetails>
    </Accordion>
    </>)
}