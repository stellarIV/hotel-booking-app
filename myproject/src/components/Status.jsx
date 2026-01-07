import React from 'react';
import CountUp from 'react-countup';

const statsData = [
  { id: 1, end: 75, suffix: '%', description: 'Occupancy Rate This Season' },
  { id: 2, end: 50, suffix: '+', description: 'Luxurious Rooms Available' },
  { id: 3, end: 30000, suffix: '+', description: 'Guests Served Since Opening' },
];

const Status = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-[#2e9a71] text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Experience Comfort & Luxury
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12">
          Our Current Status<span className="text-[#2e9a71]">.</span>
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center group">
              <div className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-2">
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              {/* Decorative Divider */}
              <div className="w-12 h-1 bg-[#2e9a71] mb-4 transition-all group-hover:w-20" />
              <p className="text-gray-500 font-medium text-lg max-w-[200px] leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;