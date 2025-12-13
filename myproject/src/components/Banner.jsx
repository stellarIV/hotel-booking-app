import React from 'react'
import { motion } from 'framer-motion'
import { SlideUp } from '../utilities/animation'
import { Button } from '@material-tailwind/react'

const BannerData = [
    {
        id: 1,
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/71/6c/ba/getlstd-property-photo.jpg?w=300&h=300&s=1',
        title: "Luxury Rooms at Unbeatable Prices!",
        desc: "Discover the ultimate comfort and style in our deluxe suites. Book now to enjoy an exclusive discount on your stay. Limited time offer for early bookings!",
    },
    {
        id: 2,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b2/30/89/benmas-hotel.jpg?w=300&h=300&s=1",
        title: "Thank You for Choosing Us!",
        desc: "We’re thrilled to welcome our growing community of guests. As a token of appreciation, enjoy complimentary breakfast for all new members who book this week!",
    },
]

const Banner = () => {
  return (
    <div>
     {BannerData.map((item) => { 
        return (
        <div key={item.id} className='grid grid-cols-1 lg:grid-cols-2 my-8 py-8 items-center bg-[#addbb7] gap-8 container overflow-hidden'>
          <div className='object-cover overflow-hidden flex justify-center'>
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once:true}}
              src={item.img}
              alt="Hotel Promotion"
              className='max-w-[400px] lg:max-w-full'
            />
          </div>
          <div className='text-center'>
            <motion.h1
              variants={SlideUp(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              className='text-3xl font-bold md:text-4xl mb-6'>{item.title}</motion.h1>
            <motion.div
              variants={SlideUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              className='text-gray-600 font-light mb-6'>
              {item.desc} <br />
              <Button color='green' className='mt-6 p-4 rounded-md'>Book Now</Button>
            </motion.div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Banner
