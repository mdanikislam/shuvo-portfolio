import React from 'react';
import HeroArea from './HeroArea';
import About from './About';
import Blog from './Blog';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import MarqueAd from './MarqueAd';
import Benefits from './Benefits';
import Faq from './Faq';
import Testimonial from './Testimonial';
import Footer from './Footer';

const fadeIn = {
  initial: {
    opacity: 0,
    y: 100
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
    <div >
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className='md:w-8/12 w-10/12 mx-auto pt-20 space-y-20'
      >
        <HeroArea />
      </motion.div>

     

      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className=' mx-auto pt-20'
      >
        <MarqueAd />
      </motion.div>

{/* Benefits  */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
         className='md:w-8/12 w-10/12 mx-auto pt-20 space-y-20'
      >
        <Benefits />
      </motion.div>

 {/* faq  */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
         className='md:w-8/12 w-10/12 mx-auto pt-20 space-y-20'
      >
        <Faq />
      </motion.div> 



      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className='md:w-8/12 w-10/12 mx-auto pt-20 space-y-20'
      >
        <Testimonial />
      </motion.div>


      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className='mx-auto pt-20 space-y-20'
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
