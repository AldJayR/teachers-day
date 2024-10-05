import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageFrame from './ImageFrame';
import Reveal from './Reveal';

const Gallery = ({ images }) => {
    const delays = [0.6, 0.8, 0.9, 1.0, 1.2]
    const imageElements = images.map((image, index) => {
        return (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <Reveal delay={delays[index % delays.length]}>
                    <ImageFrame 
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
                <Row className="gy-5">
                    {imageElements}
                </Row>
            </Container>
        </Container>
    )
    
}

export default Gallery;