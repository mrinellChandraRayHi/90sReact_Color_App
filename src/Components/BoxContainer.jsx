import React, { useState } from 'react';
import Box from './Box';
import { rgbValue, generateColors } from './Helper';
import './BoxContainer.css';

const BoxContainer = ({ num }) => {
  const [colors, setColors] = useState(generateColors(num));

  const changeColor = (c) => {
    let newColor;
    do {
      newColor = `rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`;
    } while (newColor === c);

    // while (true) {
    //     newColor = `rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`;
    //     if (newColor !== c) {
    //       break;
    //     }
    //   }

    setColors((prevColors) =>
      prevColors.map((color) => (color !== c ? color : newColor))
    );
  };

  return (
    <div className='flex flex-wrap justify-center BoxContainer'>
      {colors.map((color, index) => (
        <Box key={index} color={color} changeColor={() => changeColor(color)} />
      ))}
    </div>
  );
};

export default BoxContainer;
