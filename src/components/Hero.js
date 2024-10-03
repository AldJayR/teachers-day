import React from 'react';
import Joana from "../images/maam-joana.png"
import HeroBackground from '../images/8779512.jpg'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'


const Hero = () => {
    return (
        <Container fluid className="hero-section" style={{ backgroundImage: `url(${HeroBackground})` }}>
            <Container className="d-flex justify-content-center aligh-items-center vh-100">
            <div className="name">
                    <div className="teacher-name-front">
                        <h2>JOANA</h2>
                        <h2>MARIE</h2>
                        <h2>TOLENTINO</h2>
                    </div>
                    <div className="teacher-name-back">
                        <h2>JOANA</h2>
                        <h2>MARIE</h2>
                        <h2>TOLENTINO</h2>
                    </div>
                </div>
                
                    <Image src={Joana} alt="Joana Marie" className="hero-image" />
                
                
            </Container>
        </Container>
    )
}

export default Hero;