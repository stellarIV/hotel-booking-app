import React from 'react';
import { motion } from 'framer-motion';
import {SlideUp, SlideLeft,SlideRight} from '../utilities/animation'

const AboutUs = () => {
  return (
    <div className="container mx-auto pt-32 px-6 md:px-12 lg:px-24 bg-green-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-10 md:p-20">
        <motion.h1
        variants={SlideLeft(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        className="text-4xl md:text-5xl font-bold text-green-700 mb-6">About Us</motion.h1>
        <motion.p
        variants={SlideLeft(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}        
        className="text-lg text-green-900 mb-6">
          Welcome to Mikas Hotel, where luxury meets sustainability. Our mission is to provide an
          unforgettable stay while minimizing our ecological footprint. With eco-friendly designs, organic
          materials, and energy-saving amenities, we invite you to relax in harmony with nature.
        </motion.p>
        
        <div className="mt-10">
          <motion.h2
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="text-2xl font-semibold text-green-600 mb-4">Our Commitment</motion.h2>
          <motion.p 
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="text-md text-green-800 mb-6">
            From solar energy to recycled water systems, Mikas Hotel is built on principles of sustainability. 
            We believe in creating a positive impact on our environment and our community.
          </motion.p>
        </div>

        <div className="mt-10">
          <motion.h2
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="text-2xl font-semibold text-green-600 mb-4">Our Story</motion.h2>
          <motion.p
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="text-md text-green-800 mb-6">
            Founded in 2002, Mikas Hotel began as a vision to redefine luxury hospitality. Today, 
            we are proud to be one of the few hotels in the world designed entirely with sustainability 
            in mind.
          </motion.p>
        </div>

        <div className="mt-10">
          <motion.h2
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="text-2xl font-semibold text-green-600 mb-4">Our Values</motion.h2>
          <motion.ul
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="list-disc pl-6 text-green-800">
            <li>Eco-Friendly Practices</li>
            <li>Community Involvement</li>
            <li>Customer Satisfaction</li>
            <li>Continuous Innovation</li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
