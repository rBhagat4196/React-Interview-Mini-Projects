import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

const Rating = ({ stars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  };

  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  // Array to hold the JSX elements
  const starComponents = [];

  for (let index = 1; index <= stars; index++) {
    starComponents.push(
      <FaStar
        key={index}
        onClick={() => handleClick(index)}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        className={`h-8 w-8 ${index <= hover ? 'text-yellow-300' : ''}`}
      />
    );
  }

  return <div className='flex justify-center gap-2'>{starComponents.map(star => star)}</div>;
};

export default Rating;
