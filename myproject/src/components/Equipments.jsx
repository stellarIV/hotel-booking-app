import React from 'react'
import {MdEvent, MdFoodBank} from "react-icons/md";
import { motion } from 'framer-motion'
import { SlideLeft } from '../utilities/animation'
import { BiBed } from 'react-icons/bi';
const EquipmentData = [
    {
        id:1,
        title: "Accommodations",
        desc:"Discover a variety of room options, from luxury suites to comfortable family rooms, tailored to your needs.",
        link: "/",
        icon: <BiBed/>,
        delay: 0.3,
    },
    {
        id:2,
        title: "Dining & Entertainment",
        desc:"Enjoy a diverse selection of dining experiences and entertainment, including gourmet restaurants, casual lounges, and live events.",
        link: "/",
        icon: <MdFoodBank/>,
        delay: 0.6,
    },
    {
        id:3,
        title: "Event Spaces & Meetings",
        desc:"Host unforgettable events and meetings in our state-of-the-art facilities, designed for gatherings of all sizes.",
        link: "/",
        icon: <MdEvent/>,
        delay: 0.9,
    },
   
]
const Equipments = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-Parisienne">
            <div className='space-y-4 p-6'>
                <h1 className='text-3xl md:text-4xl font-bold'>What we offer for you</h1>
                <p className='text-gray-500'>Experience exceptional service and a range of amenities tailored to enhance your stay.</p>
            </div>
            {
                EquipmentData.map((items)=>{
                    return (
                        <motion.div
                        variants={SlideLeft(items.delay)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true}}
                        whileHover={{y:-20}}
                        key={items.id}
                        className='space-y-4 p-6 bg-[#fbfbfb] hover:bg-white shadow-md hover:shadow-[#bcbcbcaf] duration-300 rounded-md'>
                            <div className='text-4xl'>{items.icon}</div>
                            <p className='text-2xl font-semibold'>{items.title}</p>
                            <p className='text-gray-500'>{items.desc}</p>
                        </motion.div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Equipments
