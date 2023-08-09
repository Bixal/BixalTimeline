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
    let reformattedDate = oldDateMonth + " " + oldDateYear

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
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">
            <div id="scAccordion">
                <Typography variant="body1">{reformattedDate}</Typography>
                <Typography variant="h6">{title}</Typography>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant="body2" className="accordDesc">{desc}</Typography>
            <ChildModal photoData={photoData}/>
            {/* <Box sx={{ maxWidth: 400, flexGrow: 1}}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            />
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index = {activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {photoData.map((step, index) => (
                    <div key={step.photoId}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx = {{
                                    height: 225,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.url}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position='static'
                activeStep={activeStep}
                nextButton={
                    <Button
                        size='small'
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next 
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
            </Box> */}
        </AccordionDetails>
    </Accordion>
    </>)
}