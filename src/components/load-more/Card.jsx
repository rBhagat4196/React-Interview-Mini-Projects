import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div className="h-[200px] border-2 overflow-hidden">
      <img src={image} alt={title} className="mx-auto p-1 object-cover w-[120px] h-[120px]" />
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{title}</div>
      </div>
    </div>
  );
};

export default Card;