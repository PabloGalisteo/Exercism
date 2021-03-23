//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([color1, color2]) => {

  const indexColor1 = colors.indexOf(color1)
  const indexColor2 = colors.indexOf(color2)

  return Number(`${indexColor1}${indexColor2}`)

};

const colors = [
  'Black',
  'Brown',
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Violet',
  'Grey',
  'White'
]