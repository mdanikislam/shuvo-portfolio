import React from 'react';
import HeroArea from './HeroArea';
import About from './About';
import Blog from './Blog';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Home = () => {
  return (
    <div className='w-8/12 mx-auto pt-20 space-y-20'>
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HeroArea />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <About />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Blog />
      </motion.div>
    </div>
  );
};

export default Home;
