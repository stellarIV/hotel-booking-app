import React from 'react';
import ReservationForm from './ReservationForm';
import { motion } from 'framer-motion';

const Booking = () => {
  return (
    <div id='booking' className='relative bg-white pb-5'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='bg-cover bg-center -mt-32 min-h-[300px] text-center text-white'
        style={{
          backgroundImage: 'url(".././assets/bg1.jpg")'
        }}
      >
        <h1 className='text-4xl font-bold mb-2'>Welcome to Mikas Hotel</h1>
        <p className='text-lg'>
          Experience luxury and comfort in the heart of the city. Book your stay with us today!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className='py-10 px-5 text-center'
      >
        <h2 className='text-3xl font-semibold mb-6'>Explore Our Rooms</h2>
        <p className='text-lg mb-8'>
          Whether you are looking for a cozy room for a weekend getaway or a luxurious suite for a longer stay,
          Mikas Hotel has something for everyone.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 justify-center'>
          <div className='min-w-[250px] mt-5 p-4 bg-gray-100 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold mb-2'>Standard Room</h3>
            <p>A comfortable room with all essential amenities for a pleasant stay.</p>
            <span className='block mt-4 font-semibold'>$120/night</span>
          </div>
          <div className='min-w-[250px] mt-5 p-4 bg-gray-100 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold mb-2'>Deluxe Room</h3>
            <p>Enjoy more space and premium services in our deluxe rooms.</p>
            <span className='block mt-4 font-semibold'>$180/night</span>
          </div>
          <div className='min-w-[250px] mt-5 p-4 bg-gray-100 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold mb-2'>Executive Suite</h3>
            <p>Our top-tier suite offers luxury, space, and unparalleled views.</p>
            <span className='block mt-4 font-semibold'>$250/night</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className='p-10 max-h-[600px] relative'
      >
      </motion.div>
      <div className='relative flex justify-center p-5 lg:p-0 lg:mb-32'>
                  <ReservationForm  />
                  </div>
    </div>
  );
};

export default Booking;
