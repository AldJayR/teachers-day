import React, { useEffect, useRef } from 'react'
import '../Sticky.css'
import { motion, useAnimation, useInView } from 'framer-motion';

const StickyNote = ({ content, delay, sender }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])




    return (
        <motion.li
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, ease: "easeOut", delay: delay }}
        >
            <a href="#" className="sticky-anchor">
            <p>{content}</p>
            <strong>- {sender}</strong>
            </a>
        </motion.li>
    )
}

export default StickyNote;