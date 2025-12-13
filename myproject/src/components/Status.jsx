import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const statsData = [
  { id: 1, end: 75, suffix: '%', description: 'Occupancy Rate This Season' },
  { id: 2, end: 50, suffix: '+', description: 'Luxurious Rooms Available' },
  { id: 3, end: 30000, suffix: '+', description: 'Guests Served Since Opening' },
];

const Status = () => {
  return (
    <div className="text-center my-16">
      <h1 className='text-6xl font-bold mb-4'>Our Current Status.</h1>
      <h2 className="text-lg font-semibold text-green-500 mb-8">
        EXPERIENCE COMFORT AND LUXURY AT OUR <span className="text-quaternary">HOTEL</span>
      </h2>
      <div className="flex justify-center gap-12">
        {statsData.map(stat => (
          <StatItem key={stat.id} end={stat.end} suffix={stat.suffix} description={stat.description} />
        ))}
      </div>
    </div>
  );
};

const StatItem = ({ end, suffix, description }) => {
  const [hasCounted, setHasCounted] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasCounted(true);
          observer.unobserve(statRef.current); 
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) observer.unobserve(statRef.current);
    };
  }, []);

  return (
    <div ref={statRef} className="text-center">
      <h3 className="text-4xl font-bold">
        {hasCounted ? <CountUp start={0} end={end} duration={2.5} suffix={suffix} /> : 0}
      </h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Status;
