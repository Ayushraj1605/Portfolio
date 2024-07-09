import React from 'react';
import "./Navbar.scss"
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ayush Raj
        </motion.span>
        
        <div className="social">
          <a href="https://github.com/Ayushraj1605"><img src="/github.png" alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/ayush-raj-15a282255/"><img src="/linkdin.webp" alt="LinkedIn" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
