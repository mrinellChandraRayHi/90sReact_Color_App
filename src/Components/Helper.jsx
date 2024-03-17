
// Method return a random number from 0 to 255
const rgbValue = () => {
  return Math.floor(Math.random() * 256);
};

// Method generates an array of rgb colors
const generateColors = (num) => {
  let colors = [];

  for (let i = 0; i < num; i++) {
    const red = rgbValue();
    const blue = rgbValue();
    const green = rgbValue();
    colors.push(`rgb(${red},${blue},${green})`);
  }
  return colors;
};

const Box = ({ color, changeColor }) => {
  return (
    <div onClick={() => changeColor(color)}
      className="w-52 h-52 rounded-lg shadow-lg cursor-pointer"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export { rgbValue, generateColors, Box };
