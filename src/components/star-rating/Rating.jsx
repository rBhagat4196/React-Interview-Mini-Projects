import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";

const Rating = ({stars=10}) => {
  const [rating,setRating] = useState(0);
  const [hover,setHover] = useState(0);
  const handleClick = (currentIndex)=>{
    setRating(currentIndex)
  }

  const handleMouseEnter = (currentIndex)=>{
    setHover(currentIndex)
  }

  const handleMouseLeave = (currentIndex)=>{
    setHover(rating)
  }
  return (
    <div className='flex justify-center gap-2'>
      {
        [...Array(stars)].map((_,index)=>{
            index += 1
            return <FaStar
            key={index}
            onClick={()=>handleClick(index)}
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave(index)}
            className={`h-8 w-8 ${index <= hover ? "text-yellow-300" : ""}`}
            />
        })
      }
    </div>
  )
}

export default Rating
