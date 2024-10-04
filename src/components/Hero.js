import React from 'react';
import Joana from "../images/maam-joana.png"
import HeroBackground from '../images/8779512.jpg'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Reveal from './Reveal'


const Hero = () => {
    return (
        <Container fluid className="hero-section" style={{ backgroundImage: `url(${HeroBackground})` }}>
            <Container >
            <Reveal delay={0.5}>
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
                    <Reveal delay={1}>
                        <Image src={Joana} alt="Joana Marie" className="hero-image" />
                    </Reveal>
            </Reveal>
           
            </Container>
        </Container>
    )
}

export default Hero;