import React from 'react'
import { motion } from 'framer-motion'
import { SlideUp } from '../utilities/animation'
import { Button } from '@material-tailwind/react'

const AdData = [
    {
        id: 1,
        img: "https://www.bing.com/th?id=OADD2.7421765055757_1HFHO34A3B80PET4XM&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=472&h=247&rs=2&qlt=100",
        title: "Exodus: Journey Beyond Limits",
        desc: "Experience the thrill of adventure with our newest Exodus series! Gear up for limitless exploration with top-quality equipment and limited-time discounts. Don't miss out!",
    },
    {
        id: 2,
        img: "https://www.bing.com/th?id=OADD2.7421765055757_1HFHO34A3B80PET4XM&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=472&h=247&rs=2&qlt=100",
        title: "X Makeup: Unleash Your Radiance",
        desc: "Transform your look with X Makeup’s latest collection. Discover exclusive shades and formulations designed to enhance your natural beauty. Special pricing available this month only!",
    },
]

const Adverts = () => {
  return (
    <div>
     {AdData.map((item) => { 
        return (
        <div key={item.id} className='grid grid-cols-1 lg:grid-cols-2 my-4 py-4 lg:w-[80%] items-center bg-[#fafafa] gap-8 container overflow-hidden'>
          <div className='object-cover overflow-hidden flex justify-center'>
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once:true}}
              src={item.img}
              alt="Advertisement"
              className='max-w-[300px] lg:max-w-[400px]'
            />
          </div>
          <div className='text-center'>
            <motion.h1
              variants={SlideUp(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true}}
              className='text-xl font-bold md:text-2xl mb-6'>{item.title}</motion.h1>
            <motion.div
              variants={SlideUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true}}
              className='text-gray-600 font-light mb-6'>
              {item.desc} <br />
              <Button color='black' className='mt-6 p-4 rounded-md px-5'>See More</Button>
            </motion.div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Adverts
