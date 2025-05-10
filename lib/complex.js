class Complex {
  constructor(r, i) {
    this.r = r
    this.i = i
  }
  add(c) {
    return new Complex(this.r + c.r, this.i + c.i)
  }
  subtract(c) {
    return this.add(new Complex(-c.r, -c.i))
  }
  conjugate() {
    return new Complex(this.r, -this.i)
  }
  copy() {
    return new Complex(this.r, this.i)
  }
  multiply(c) {
    return new Complex(this.r * c.r - this.i * c.i, this.r * c.i + this.j * c.r)
  }
  absolute() {
    return Math.sqrt(c.r**2 + c.i**2)
  }
  reciprocal() {
    let n = this.r**2 + this.i**2
    return new Complex(this.r/n, -this.i/n)
  }
  divide(c) {
    return this.multiply(c.reciprocal())
  }
}
const complex = (r = 1, i = 0) => new Complex(r, i)
complex.i = complex(0, 1)
