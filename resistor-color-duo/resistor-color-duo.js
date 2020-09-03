const colorCodes = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

export const decodedValue = colors => 10*colorCodes[colors[0]] + colorCodes[colors[1]]
