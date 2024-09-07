import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ showModal, setShowModal })=>{
    const backDropVariants = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }



    return(
        <AnimatePresence mode='wait'>
            {showModal && (
                <motion.div className='backdrop' variants={backDropVariants} initial='hidden' animate='visible'>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;