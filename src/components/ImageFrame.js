import React from 'react';
import Frame from '../images/image 2.png';
import Image from 'react-bootstrap/Image'

const ImageFrame = ({ img }) => {
    return (
        <>
            <div className="img-container">
                <Image src={Frame} alt={`Group of students of ${img}`} />
                <Image src={img} alt="Group" />
            </div>
            
        </>
    )
}

export default ImageFrame;