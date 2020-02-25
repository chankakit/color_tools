/* HEX to RGB function */
const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/* RGB to HEX function */
// const rgbToHex = (rgb) => {
//   rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
//   return (rgb && rgb.length === 4) ? "#" +
//     ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
//     ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
//     ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
// }


/* Function that gets the sRGB value of a color brightness value */
const checksRGB = (color) => {
  if (color <= 0.03928) {
    return (color / 12.92);
  } else {
    return (Math.pow(((color + 0.055) / 1.055), 2.4));
  }
}

/* Function that returns a color object */
const getColorObject = (color) => {
  const colorObj = {
    r: checksRGB(color.r / 255),
    g: checksRGB(color.g / 255),
    b: checksRGB(color.b / 255)
  };
  return colorObj;
};

/* Function that calculates the ratio between two colors */
const calculateRatio = (color1, color2) => {
  const colorOneObject = getColorObject(hexToRgb(color1));
  const colorTwoObject = getColorObject(hexToRgb(color2));
  const colorOneL = ((0.2126 * colorOneObject.r) + (0.7152 * colorOneObject.g) + (0.0722 * colorOneObject.b));
  const colorTwoL = ((0.2126 * colorTwoObject.r) + (0.7152 * colorTwoObject.g) + (0.0722 * colorTwoObject.b));
  if (colorOneL > colorTwoL) {
    return ((colorOneL + 0.05) / (colorTwoL + 0.05));
  } else {
    return ((colorTwoL + 0.05) / (colorOneL + 0.05));
  }
}

export default calculateRatio
