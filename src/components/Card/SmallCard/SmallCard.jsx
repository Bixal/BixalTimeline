import React from "react";
import './SmallCard.css';
import ChildModal from "../../Modal/ChildModal";

//ACCORDIAN COMPONENT
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from "@mui/material";

// CAROUSELL COMPONENT
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function SmallCard({id, newDate, title, desc, photoData, video}) {
    let oldDate = new Date(newDate)
    let oldDateMonth = oldDate.toLocaleDateString("default", {month:'long'})
    let oldDateYear = oldDate.toLocaleDateString("default", {year:'numeric'})
    let reformattedDate = "|" + oldDateMonth + " " + oldDateYear + "|"

    // Carousell Functions
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = photoData.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleStepChange = (step) => {
        setActiveStep(step);
      };
    
    return(<>
    <div className="v_line"/>
    <Accordion className="smallAccordion" elevation={0}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <div id="scAccordion">
                <Typography variant="h3">{reformattedDate}</Typography>
                <Typography variant="h4">{title}</Typography>
                <Button className="moreText">Learn More</Button>
            </div>
        </AccordionSummary>
        {photoData.length > 1 ?
        <AccordionDetails className="columnAccordion"> 
            <Typography variant="body1" className="accordDesc">{desc}</Typography>
            <ChildModal photoData={photoData}/>
        </AccordionDetails> : 
        <AccordionDetails className="rowAccordion">
            <Typography variant="body1" className="accordDesc">{desc}</Typography>
            <ChildModal photoData={photoData}/>
        </AccordionDetails> 
        }

    </Accordion>
    </>)
}