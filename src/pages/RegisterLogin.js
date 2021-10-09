import React from "react";
import Register from "../components/Register-Login/Register";
import { motion } from "framer-motion";
import Login from "../components/Register-Login/Login";
import {pageVariants,pageTransition,pageStyle} from './animate'

function RegisterLogin(){
    return(
        <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={pageStyle}
      className="page-section inner-page-sec-padding-bottom">
        <div className="container">
            <div className="row">
                <Register />
                <Login />
            </div>
        </div>
    </motion.main>
    )
}

export default RegisterLogin