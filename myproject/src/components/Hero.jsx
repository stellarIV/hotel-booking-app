import React from 'react'
import { FaHotel, FaShopify, FaShoppingBasket } from 'react-icons/fa'
import HeroImg from '../assets/H2.png'
import { motion } from 'framer-motion'
import { SlideRight } from '../utilities/animation'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { MdHotel } from 'react-icons/md'


const Hero = () => {
  return (
    <div>
      <section>
        <div id='home' className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] max-h-[700px]  relative py-8">
            <div className='flex flex-col justify-center py-14 md:py-0 font-Parisienne'>
                <div className='text-center md:text-left space-y-6'>

                <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>
                    Mikas For a Better Stay And <span className='text-primary'>Quality Service</span>{" "}
                </motion.h1>
                <motion.p 
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className='text-gray-600 xl:max-w-[500px] '>Explore a wide variety of activities and services, curated by a dedicated and trustworthy service and reception.</motion.p>
                <div className='flex justify-center gap-8 md:justify-start !mt-4'>
                    <SignedOut>
                        <motion.div
                        variants={SlideRight(1.5)}
                        initial="hidden"
                        animate="visible"
                        className='primary-btn flex items-center gap-2 '>
                            <Button 
                            onClick={() => window.Clerk.openSignIn()}
                            className="px-6 py-4 bg-secondary text-md text-primary rounded-md">
                                Get Started
                            </Button>
                        </motion.div>
                    </SignedOut>
                    <SignedIn>
                        <Link to='/about-us'>
                            <motion.div
                            variants={SlideRight(1.5)}
                            initial="hidden"
                            animate="visible"
                            className='primary-btn flex items-center gap-2 '>
                                <Button 
                                className="px-6 py-4 bg-secondary text-md text-primary rounded-md">
                                    Know More
                                </Button>
                            </motion.div>
                        </Link>
                    </SignedIn>
                    <Link to='/booking'><motion.div
                    variants={SlideRight(1.7)}
                    initial="hidden"
                    animate="visible"
                    className=''>
                      <Button className='flex justify-center text-md items-center py-4 gap-2 bg-transparent border rounded-md'><MdHotel className='text-lg text-green-800'/> Book Now</Button></motion.div></Link>
                </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <motion.img
                initial={{ opacity: 0, rotate:75, x: 200}}
                whileInView={{ x: 0, rotate:0, opacity:1 }}
                viewport={{once:true}}
                transition={{duration:1.2}}
                src={HeroImg} alt="" className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow' />
            </div>
            
        </div>

      </section>
    </div>
  )
}

export default Hero
