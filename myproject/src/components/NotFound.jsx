import React from "react";
import CustomCursor from "./Effects/CustomCursor"; 

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center bg-[#cdefe2] overflow-hidden cursor-none">
      <CustomCursor />

      {/* Background Decorative Element */}
      <div className="absolute font-black text-[20rem] text-black/5 select-none pointer-events-none">
        404
      </div>

      <div className="relative z-10 px-6">
        <h1 className="text-7xl md:text-9xl font-extrabold text-[#1b5e46] mb-4 tracking-tighter">
          Oops!
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
          Page not found
        </h2>
        
        <p className="max-w-md mx-auto text-lg text-gray-600 mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <a 
          href="/" 
          className="inline-block bg-[#2e9a71] text-white px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg hover:bg-[#237a59]"
        >
          Back to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;