import React from 'react'
import Container from 'react-bootstrap/Container'
import Reveal from './Reveal'


export const Footer = () => {
    return (
        <footer className="container-fluid text-center mt-3">
            <Container>
                <Reveal>
                    <h3>
                        From BSIT - 2L
                    </h3>
                </Reveal>
            </Container>
            
        </footer>
    )
}