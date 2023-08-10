import React from "react";
import { useState } from "react";
import { Card, CardContent, CardMedia, Button } from "@mui/material";
import { Modal } from '@mui/material';

export default function ChildModal({photoData}) {

    const [openPhoto, setOpenPhoto] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedUrl, setSelectedUrl] = useState(null)
    
    function handleOpenPhoto(photoId, url) {
        setOpenPhoto(true);
        setSelectedImage(photoId);
        setSelectedUrl(url);
    }

    function handleClosePhoto() {
        setOpenPhoto(false);
        setSelectedImage(null);
        setSelectedUrl(null);
    }

    return(<>
        <div className="modalImage">
        {photoData.map(({photoId, url}) => {
        return(
            <div key={photoId}>
            <button onClick={() => handleOpenPhoto(photoId, url)} className="openChildModalBtn modalDescPhoto">
                <CardMedia
                component="img"
                image={url}
                height="70%"
                />
            </button>
            </div>)
        })}
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
                    key={selectedImage}
                    component="img"
                    image={selectedUrl}
                    className="childModalPhoto"
                    />
                </CardContent>
            </Card>
        </Modal>
    </>)
}