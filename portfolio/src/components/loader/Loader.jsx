import React from 'react';
import "./Loader.scss";
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: {
            duration: 1,
        }
    },
};

const Loader = () => {
  return (
    <motion.div className="loader" variants={variants} initial="initial" animate="animate" exit="exit">
      <motion.div className='wrapper' variants={variants} initial="initial" animate="animate">
        <motion.h2 variants={variants} initial="initial" animate="animate">AYUSH RAJ</motion.h2>
      </motion.div>
    </motion.div>
  )
}

export default Loader;
