import React from 'react';
import Joana from "../images/maam-joana.png"
import HeroBackground from '../images/8779512.jpg'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'


const Hero = () => {
    return (
        /*
        <section className="hero-section container-fluid" style={{ backgroundImage: `url(${HeroBackground})` }}>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <img src={Joana} alt="Ma'am Joana" />
            </div>
        </section>
        */

        <Container fluid className="hero-section" style={{ backgroundImage: `url(${HeroBackground})` }}>
            <Container className="d-flex justify-content-center aligh-items-center vh-100">
                <Image src={Joana} alt="Joana Marie" />
            </Container>
        </Container>
    )
}

export default Hero;