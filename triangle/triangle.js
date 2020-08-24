export class Triangle {

  constructor(...sides) {
    this.sides = sides;
    this.sideSet = new Set([...this.sides]);
  }

  isEquilateral() {
    return this.isValid() && this.sideSet.size === 1;
  }

  isIsosceles() {
    return this.isValid() && (this.sideSet.size === 1 || this.sideSet.size === 2);
  }

  isScalene() {
    return this.isValid() && this.sideSet.size === 3;
  }

  isValid() {
    const [a, b, c] = this.sides;
    const triangleInequalityHolds = a + b >= c && a + c >= b && b + c >= a;
    const sidesArePositive = this.sides.every(side => side > 0);
    return triangleInequalityHolds && sidesArePositive;
  }

}
