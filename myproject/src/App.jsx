import { useState } from 'react'
import {Navbar, Booking, Equipments, Footer, Hero, Contact,NotFound, AboutUs, Rooms, ReservationForm, RoomCarousel, Banner, Adverts, Status, ParallaxEffect} from "./components/index"
import { SignedIn, SignedOut, SignInButton, useUser, UserButton } from '@clerk/clerk-react';
import { Button } from '@material-tailwind/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import { useEffect } from 'react';
import BgImg from './assets/bg1.jpg';
import { createUserOrUpdate } from './api';
import StarsCanvas from './components/canvas/Stars';
import ScrollToTop from './utilities/ScrollToTop'

function App() {
  const { user } = useUser();
  
  const bgStyle = {
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
  };
  useEffect(() => {
    if (user) {
        const userData = {
            clerkId: user.id,
            email: user.emailAddresses[0].emailAddress,
            name: user.fullName,
        };
        createUserOrUpdate(userData);
     }
  }, [user]);

  return (
    <div className='bg-[#dafbeece]'>
      <Router>
      <ScrollToTop />
        <div className='overflow-hidden'>
          <div>
          <div>
            <Navbar showSignIn={!user} showUserButton={!!user} />
          </div>
          <Routes>
            <Route path='/' element={
              <>
                <div style={bgStyle} className='py-14 relative sm:py-8 overflow-hidden'>
                  <Hero />
                </div>
                <div className='relative flex justify-center p-5 lg:p-0'>
                  <ReservationForm  />
                  </div>
                  <div className='mt-0 lg:mt-12'>
                  <Equipments/>
                  <SignedIn>
                    <div className='m-2'>
                      <p className='ml-4 container text-4xl font-bold'>Offers</p>
                      <Banner/>
                    </div>
                  </SignedIn>
                  <SignedOut>
                  <div className='m-2'>
                  <p className='ml-4 container text-4xl font-bold'>Our Recommendations</p>
                    <Adverts/>
                    </div>
                  </SignedOut>
                  <Status/>
                </div>
              </>
              }/>
            <Route path='/about-us' element={
              <div>
              <ParallaxEffect/>
              <AboutUs />
              </div>
              }/>
            <Route path='/contact' element={
              <div className=''>
              <Contact />
              <StarsCanvas/>
              </div>
              }/>
            <Route path='/rooms' element={
              <>
              <div  style={bgStyle} className='pt-28'>
              <RoomCarousel />
              </div>
              <Rooms/>
              </>
              
              }/>
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
          </div>
          {/* <SignedOut>
            <div className="flex items-center justify-center h-screen">
              <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Create Your Profile</h2>
                  <p className="mb-6">Sign in to set up your profile.</p>
                  <Button 
                      onClick={() => window.Clerk.openSignIn()}
                      className="px-6 py-4 bg-secondary text-md text-primary rounded-md"
                  >
                      Sign In
                  </Button>
              </div>
            </div>
          </SignedOut>
          <SignedIn>
              Hi whats up
              <UserButton afterSignOutUrl="/"/>
          </SignedIn> */}
        </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
