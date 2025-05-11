class Complex {
  constructor(r, i) {
    this.r = r
    this.i = i
  }
  /*
  this = z
  Re(c) = v
  Im(c) = w
  Re(z) = x
  Im(z) = y
  */
  // z + c = Ans
  add(c) {
    return new Complex(this.r + c.r, this.i + c.i)
  }
  // z - z = Ans
  subtract(c) {
    return this.add(new Complex(-c.r, -c.i))
  }
  // x - y*i = Ans
  conjugate() {
    return new Complex(this.r, -this.i)
  }
  // x + y = Ans
  copy() {
    return new Complex(this.r, this.i)
  }
  // x * v - y * w + yi * w + xi * w = Ans
  multiply(c) {
    return new Complex(this.r * c.r - this.i * c.i, this.i * c.i + this.r * c.i)
  }
  // Ans = √(x^2 + y^2)
  absolute() {
    return Math.sqrt(this.r**2 + this.i**2)
  }
  // |z|^2 = n
  // Ans = x/n - yi/n
  reciprocal() {
    let n = this.r**2 + this.i**2
    return new Complex(this.r/n, -this.i/n)
  }
  // Ans = z*rec(c)
  divide(c) {
    return this.multiply(c.reciprocal())
  }
  // Ans = atan2(x, y)
  phase() {
    return Math.atan2(this.i, this.r)
  }
  // quick exponation
  // c = |z|^n
  // And = c * cos(n * phase(z)) + ci * sin(n * phase(z))
  qPow(n) {
    let c = this.absolute()**n
    return new Complex(c * Math.cos(n * this.phase()), c * Math.sin(n * this.phase()))
  }
  
  pow(c) {
    let n = this.r**2 + this.i**2
    let o = n**c.i * Math.exp(-c.i * this.phase())
    let θ = c.r * this.phase() + c.i/2 * Math.log(n)
    return new Complex(o*Math.cos(θ), o*Math.sin(θ))
  }
  sqrt() {
    let l = this.absolute()
    let s = c.i<0 ? -1 : 1
    return new Complex(Math.sqrt((this.r+l)/2), s*Math.sqrt((len-this.r)/2))
  }
  log() {
    return new Complex(Math.log(this.absolute()), this.phase())
  }
  exp() {
    let er = Math.exp(this.r)
    return new Complex(er*Math.cos(this.i), er*Math.sin(this.i))
  }
  sin() {
    var negI = new Complex(0, -1)
    var n = complex.i.multiply(this).exp().subtract(negI.multiply(this).exp())
    return n.divide(new Complex(0, 2))
  }
  cos() {
    var negI = new Complex(0, -1)
    var n = complex.i.multiply(this).exp().add(negI.multiply(this).exp())
    return n.divide(new Complex(2, 0))
  }
  tan() {
    return this.sin().divide(this.cos())
  }
  equals(c) {
    return (this.r == c.r) && (this.i == c.i)
  }
  toString() {
    return this.i ? `${this.r}${this.i > 0 ? "+" : "" + this.i}` : String(this.r)
  }
}
const complex = (r = 1, i = 0) => new Complex(r, i)
complex.i = complex(0, 1)
