import React from "react";
import { pageVariants, pageTransition, pageStyle } from "./animate";
import { motion } from "framer-motion";

import Slider from "../components/Main/Slider";
function Main() {

  const slider_content = [
    {
      title:'Красивый дизайн',
      subtitle:'Откройте книгу',
      img:'1'
    },
    {
      title:'Это хорошая идея!',
      subtitle:'Открыть книгу ',
      img:'2'
    },
  ]

  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={pageStyle}
    >
      <section className="hero-area hero-slider-3">
      <Slider />
      </section>
    </motion.main>
  );
}
export default Main;
