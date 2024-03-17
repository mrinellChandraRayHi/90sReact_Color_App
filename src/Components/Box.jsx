import React from 'react';

const Box = ({ color, changeColor }) => {
  const handleClick = () => {
    changeColor(color);
  };

  return (
    <div
      onClick={handleClick}
      className="w-52 h-52 bg-gray-300 rounded-lg shadow-lg cursor-pointer"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Box;

