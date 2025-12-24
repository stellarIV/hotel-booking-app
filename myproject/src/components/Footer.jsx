import { motion } from 'framer-motion'
import React from 'react'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTelegram,
} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#038f2f] overflow-hidden pt-10 align-text-bottom'>
      <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white px-5'>
        <div className=''>
          <div className='font-semibold mb-6'>
            Get Started
          </div>
          <p className='text-sm'>
          Welcome to Mikas Hotel! Start exploring our tools and resources to enhance your experience. Sign up today to get access to personalized support and features! If you need any assistance, don't hesitate to reach out to our support team.
          </p>
        </div>
        <div>
          <div className='font-semibold mb-6'>
            Platform
          </div>
          <div className='flex flex-col gap-4'>
          <Link to={'/privacypolicy'} className='text-sm hover:underline'>Privacy Policy</Link>
          <Link to={'/aboutus'} className='text-sm hover:underline'>About Us</Link>
          <Link to={'/termsandconditions'} className='text-sm hover:underline'>Terms & Conditions</Link>
          </div>
          </div>
          <div>
            <div className='font-semibold mb-6'> 
              Contact Us
            </div>
            
            <div className='text-sm mb-4'>
              Email: support@Mikas.com
            </div>
            <div className='flex gap-4 mt-4'>
              <a href="" className='hover:scale-125 text-xl duration-700'><BsFacebook/></a>
              <a href="" className='hover:scale-125 text-xl duration-700'><BsInstagram/></a>
              <a href="" className='hover:scale-125 text-xl duration-700'><BsTelegram/></a>
              <a href="" className='hover:scale-125 text-xl duration-700'><BsTwitter/></a>
            </div>
        </div>
        <div>
          <div className='font-semibold mb-6'>
            Website Developer Agency
          </div>
          <div className='text-sm mb-4 flex-wrap'>
              Name: Ruphael<sup className='text-[0.6rem]'>TM</sup> Agency
            </div>
          <div className='text-sm mb-4 flex-wrap'>
              Email: Ruphael@gmail.com
            </div>
        </div>
      </div>
      <div className='w-full text-center text-xs text-gray-200 pt-6 pb-2'>
      © 2024 Mikas Hotel. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer