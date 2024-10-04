import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';
import ImageFrame from './ImageFrame';
import Reveal from './Reveal';

const Gallery = ({ images }) => {
    const delays = [0.6, 0.8, 0.9, 1.0, 1.2]
    const imageElements = images.map((image, index) => {
        return (
            <Col s={4}>
                <Reveal delay={delays[index]}>
                    <ImageFrame 
                        key={index}
                        img={image}
                    />
                </Reveal>
            </Col>
           
        )
    });

    return (
        <Container fluid className="gallery-container">
            <h1 className="text-center">THANK YOU</h1>
            <Container className="overflow-hidden">
                <Row>
                    {imageElements}
                </Row>
                <Row className="pt-5 pb-3">
                    {imageElements}
                </Row>
            </Container>
        </Container>
    )
    
}

export default Gallery;