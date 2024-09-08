import React from 'react';
import { easeInOut, motion } from 'framer-motion';


const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x:{repeat: Infinity, duration: 1, ease: 'easeOut'},
            y:{repeat: Infinity, duration: 0.5, ease: "easeOut"}
        }
    }
}

const Loader = () => {
    return (
        <>
            <motion.div className='loader' variants={loaderVariants} animate="animationOne">

            </motion.div>
        </>
    )
}

export default Loader;
