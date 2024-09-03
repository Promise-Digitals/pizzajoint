import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 animate={{}}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          animate={{}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;