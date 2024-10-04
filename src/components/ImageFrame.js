import React from 'react';
import Image from 'react-bootstrap/Image'

const ImageFrame = ({ img }) => {
    return (
        <>
            <div className="class-image">
                <Image rounded src={img} alt="Group" className="img" />
            </div>
            
        </>
    )
}

export default ImageFrame;