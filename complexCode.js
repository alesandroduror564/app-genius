// Filename: complexCode.js

/***************************************************
 * Title: Complex JavaScript Code
 * Description: This code demonstrates an elaborate and complex example of JavaScript code.
 * Author: AI Assistant
 ***************************************************/

/* Helper function to calculate the factorial of a number */
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--)
    num *= i;
  return num;
}

/* Class to represent a complex number */
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(complex) {
    return new ComplexNumber(this.real + complex.real, this.imaginary + complex.imaginary);
  }

  subtract(complex) {
    return new ComplexNumber(this.real - complex.real, this.imaginary - complex.imaginary);
  }

  multiply(complex) {
    var realPart = this.real * complex.real - this.imaginary * complex.imaginary;
    var imaginaryPart = this.real * complex.imaginary + this.imaginary * complex.real;
    return new ComplexNumber(realPart, imaginaryPart);
  }

  divide(complex) {
    var denominator = Math.pow(complex.real, 2) + Math.pow(complex.imaginary, 2);
    var realPart = (this.real * complex.real + this.imaginary * complex.imaginary) / denominator;
    var imaginaryPart = (this.imaginary * complex.real - this.real * complex.imaginary) / denominator;
    return new ComplexNumber(realPart, imaginaryPart);
  }

  magnitude() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
  }

  toString() {
    return this.real + " + " + this.imaginary + "i";
  }
}

// Perform complex number operations

var complex1 = new ComplexNumber(2, 3);
var complex2 = new ComplexNumber(4, -2);

console.log("Complex Number 1: " + complex1.toString());
console.log("Complex Number 2: " + complex2.toString());

var sum = complex1.add(complex2);
console.log("Sum: " + sum.toString());

var difference = complex1.subtract(complex2);
console.log("Difference: " + difference.toString());

var product = complex1.multiply(complex2);
console.log("Product: " + product.toString());

var quotient = complex1.divide(complex2);
console.log("Quotient: " + quotient.toString());

console.log("Magnitude of Complex Number 1: " + complex1.magnitude());
console.log("Magnitude of Complex Number 2: " + complex2.magnitude());

// Calculate factorial of a number

var num = 6;
var fact = factorial(num);
console.log("Factorial of " + num + ": " + fact);