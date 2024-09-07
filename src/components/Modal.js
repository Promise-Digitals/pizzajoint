import { AnimatePresence, motion } from 'framer-motion';
import { delay } from 'framer-motion/dom';
import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ showModal, setShowModal })=>{
    const backDropVariants = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

    const modalVariants = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "300px",
            opacity: 1,
            transition: {
                delay: 0.5
            }
        }
    }


    return(
        <AnimatePresence mode='wait'>
            {showModal && (
                <motion.div className='backdrop' variants={backDropVariants} initial='hidden' animate='visible' exit='hidden'>
                    <motion.div className='modal' variants={modalVariants}>
                        <p>Want to make another pizza?</p>
                        <Link to="/">
                            <button onClick={()=> setShowModal(false)}>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;