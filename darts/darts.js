const pointMap = new Map([
  [1, 10],
  [5, 5],
  [10, 1]
]);

export const score = (x, y) => {
  let radius = [...pointMap.keys()].find(radius => coordinatesAreInsideCircle(x, y, radius));
  return radius ? pointMap.get(radius) : 0;
};

function coordinatesAreInsideCircle(x, y, radius) {
  // using the equation of a circle: x^2 + x^2 = r^2
  const xCoordinateIsInsideCircle = x**2 <= (radius**2 - y**2);
  const yCoordinateIsInsideCircle = y**2 <= (radius**2 - x**2);
  return xCoordinateIsInsideCircle && yCoordinateIsInsideCircle;
}