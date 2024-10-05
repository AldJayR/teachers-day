import React from 'react'
import Container from 'react-bootstrap/Container'
import Reveal from './Reveal';
import StickyNote from './StickyNote'
import { notes } from './messages'


export default function Notes() {
    
    return (
        <Container>
            <Reveal delay={0.4}>
                <h2 className="message-header mt-5 text-center">Our Messages to You</h2>
            </Reveal>
            <ul className="mt-5">
                {notes.map((item, index) => {
                    const delayTime = (0.2 * index) % notes.length;
                    return (
                            <StickyNote
                                content={item.message} sender={item.sender} delay={delayTime} />
                        
                    )
                })}
            </ul>
        </Container>
    )
}