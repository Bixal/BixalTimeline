import React from "react";
import { useState } from "react";
import { Card, CardContent, CardMedia, Button } from "@mui/material";
import { Modal } from '@mui/material';

export default function ChildModal({photoData}) {
    const [openPhoto, setOpenPhoto] = useState(false)
    function handleOpenPhoto() {
        setOpenPhoto(true);

    }
    function handleClosePhoto() {
        setOpenPhoto(false);
    }

    return(<>
        {photoData.map(({photoId, url}) => {
        return(<>
            <div className="modalImage">
            <button onClick={handleOpenPhoto} className="openChildModalBtn modalDescPhoto">
                <CardMedia
                key={photoId}
                component="img"
                image={url}
                height="70%"
                />
            </button>
            </div>
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
    </>)
}