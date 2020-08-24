export class Triangle {

  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    return this.isValid() && (this.sideA === this.sideB && this.sideB === this.sideC);
  }

  isIsosceles() {
    return this.isValid() && (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC);
  }

  isScalene() {
    return this.isValid() && (this.sideA != this.sideB && this.sideB != this.sideC);
  }

  isValid() {
    return (this.sideA > 0 && this.sideB > 0 && this.sideC > 0) &&
    this.sideA + this.sideB >= this.sideC && 
    this.sideA + this.sideC >= this.sideB && 
    this.sideB + this.sideC >= this.sideA;
  }

}
