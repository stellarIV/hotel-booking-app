import React, { useEffect, useState } from 'react';
import './ParallaxEffect.css';

const ParallaxEffect = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-background"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      ></div>
      <div className="foreground-content">
        <h1 className="headline">Welcome to Mikas Hotel</h1>
        <p>Your luxury eco-friendly retreat</p>
      </div>
    </div>
  );
};

export default ParallaxEffect;
