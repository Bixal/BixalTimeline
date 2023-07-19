import React from "react";
import './SmallCard.css'

//ACCORDIAN COMPONENT
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SmallCard({id, newDate, title, desc, photo}) {
    let oldDate = new Date(newDate)
    let oldDateMonth = oldDate.toLocaleDateString("default", {month:'long'})
    let oldDateYear = oldDate.toLocaleDateString("default", {year:'numeric'})
    let reformattedDate = oldDateMonth + " " + oldDateYear
    
    return(<>
    <div className="v_line"/>
    <Accordion className="smallAccordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <div>
                <p>{reformattedDate}</p>
                <h2>{title}</h2>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <p className="accordDesc">{desc}</p>
            {photo.map(({url}) => {
                return (
                    <img key={id} src={url} className="small-card"/>)
                })}
        </AccordionDetails>
    </Accordion>
    </>)
}