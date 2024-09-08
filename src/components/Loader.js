import React from 'react';
import { motion, useCycle } from 'framer-motion';


const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0],
        transition: {
            x:{repeat: Infinity, duration: 0.5, ease: 'easeOut'},
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {repeat: Infinity, duration: 0.5, ease: "easeOut"}
        }
    }
}

const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

    return (
        <>
            <motion.div className='loader' variants={loaderVariants} animate={animation}>
                
            </motion.div>
            <button onClick={() => cycleAnimation()}>Cycle Loader</button>
        </>
    )
}

export default Loader;
