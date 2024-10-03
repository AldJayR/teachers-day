import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';
import ImageFrame from './ImageFrame';
import groupImgOne from '../images/gimg1.jpg';
import groupImgTwo from '../images/gimg2.jpg';
import groupImgThree from '../images/gimg3.jpg';
import groupImgFour from '../images/gimg4.jpg';

const Gallery = () =>{
    const images = [groupImgOne, groupImgTwo, groupImgThree, groupImgFour];

    const imageElements = images.map((image, index) => {
        return (
            <ImageFrame 
                key={index}
                img={image}
            />
        )
    });

    return (
        <Container fluid className="gallery-container">
            <Container>
                <Row>
                    <Col>
                        {imageElements}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
    
}

export default Gallery;