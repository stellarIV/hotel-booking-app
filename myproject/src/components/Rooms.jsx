import React from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const roomsData = [
  {
    title: "Single Room",
    description: "Perfect for solo travelers. Enjoy a cozy, comfortable stay with modern amenities.",
    image: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073731114.jpg",
  },
  {
    title: "Family Deluxe",
    description: "Spacious and luxurious, ideal for families looking to make memories together.",
    image: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073730910.jpg",
  },
  {
    title: "Duplex Suite",
    description: "Experience elegance in our two-floor duplex, designed for ultimate comfort and style.",
    image: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073731528.jpg",
  },
  {
    title: "Double Deluxe Room",
    description: "Perfect for couple travelers. Enjoy a cozy, comfortable stay with modern amenities.",
    image: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073731114.jpg",
  },
  {
    title: "Queen Castle ",
    description: "Spacious and luxurious, ideal for families looking to make memories together.",
    image: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073730910.jpg",
  },
  {
    title: "Duplex Duet",
    description: "Experience elegance in our two-floor duplex, designed for ultimate comfort and style.",
    image: "https://static21.com-hotel.com/uploads/hotel/55200/photo/benmas-hotel_153073731528.jpg",
  },
];

const Rooms = () => {
  return (
    <div id='rooms' className="min-h-screen bg-gray-100 py-10">
      <Typography variant="h2" color="blue-gray" className="text-center text-4xl font-bold mb-10">
        Explore Our Rooms
      </Typography>
      <div className="container mx-auto grid gap-10 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {roomsData.map((room, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img src={room.image} alt={room.title} className="h-64 w-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
              <Typography variant="h5" className="text-2xl font-semibold">
                {room.title}
              </Typography>
              <Typography variant="paragraph" className="text-sm mt-2 mb-4 text-primary">
                {room.description}
              </Typography>
              <Link to='/booking'>
                <Button size="md" variant="filled" className="w-full bg-[#8befbf2b] hover:scale-95 duration-500 hover:shadow-none">
                  Book Now
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
