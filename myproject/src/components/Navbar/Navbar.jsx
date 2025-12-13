import React from 'react';
import { Link } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa6';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';


export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/"
  },
  {
    id: 2,
    title: "Rooms",
    link: "/rooms"
  },
  {
    id: 3,
    title: "About",
    link: "/about-us"
  },
  {
    id: 4,
    title: "Booking",
    link: "/booking"
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact"
  },
  
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <div className='flex justify-center'>
      <div className='items-center w-[95%] sm:w-[90%] bg-[#ffffff93] backdrop-blur-md px-4 flex justify-between sm:px-6 md:px-8 lg:w-[80%] top-4 border border-gray-400 rounded-3xl fixed z-50'>
        
        {/* Mobile Nav */}
        {open===false?
          <div className='md:hidden h-full flex items-center' onClick={() => setOpen(!open)}>
          <MdMenu className='text-4xl cursor-pointer' />
        </div>:
        <div className='md:hidden h-full flex items-center' onClick={() => setOpen(!open)}>
          <HiX className='text-4xl cursor-pointer' />
        </div>}
        {/* Logo Section */}
        <div className='text-lg md:text-2xl flex items-center gap-2 font-bold py-8'>
          <FaHotel className='text-[#327b5f]' />
          <p className='text-[#37d297] uppercase'>Mikas</p>
        </div>
        
        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex gap-2 lg:gap-4 text-[#327b5f]">
            {NavbarMenu.map((Nav) => {
              return (
                <li key={Nav.id} className='flex'>
                  <Link
                    to={Nav.link}
                    className='cursor-pointer py-1 px-3 hover:text-[#58f2b7] font-semibold duration-500 flex items-center'
                  >
                    {Nav.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='flex items-center'>
        <SignedOut>
          <SignInButton mode="modal" className="text-nowrap sm:flex border-tertiary border-2 hover:bg-quaternary hover:border-none rounded-full text-lg font-semibold hover:text-white text-gray-700 px-4 py-2 transition-colors duration-700"/>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" className="text-lg font-semibold text-gray-700 hover:text-primary px-4 py-2 rounded-lg transition-colors duration-200"/>
        </SignedIn>
        </div>
      </div>
        {open && (
              <motion.div
              initial={{x: -500, opacity: 0}}
              animate={{x:0, opacity:1}}
              transtion={{duration:0.7}}
              className='fixed  md:hidden h-full w-96 top-0 left-0 z-20 dark:bg-[#147755] duration-700 bg-[#1bb96c] text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
                {NavbarMenu.map(navLink =>{

                  return <ResponsiveMenu key={navLink.id} {...navLink} setOpen={setOpen}/>
                })}
                
              </motion.div>
        )}
    </div>
  );
}

export default Navbar;
