// ******NOT CURRENTLY IN USE******
// ******NOT CURRENTLY IN USE******
// ******NOT CURRENTLY IN USE******
// ******NOT CURRENTLY IN USE******

import React from "react";

// Card Components
import { Card, CardActions, Button, CardContent, Typography, Backdrop } from '@mui/material'

export default function CardView({value}) {
    
    return (
        <>
        {value.map(({id, date, title, desc}) => {
            
            // Return Timeline View to User
            return (
                <div key={id}>
                    <Card elevation={4}>
                        <CardContent>
                            <Typography variant="h5">
                                {date}
                            </Typography>
                            <hr/>
                            <Typography variant='h4'>
                                {title}
                            </Typography>
                            <br/>
                            <Typography variant="body1">
                                {desc}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>More</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        })}
        </>
    )
  }