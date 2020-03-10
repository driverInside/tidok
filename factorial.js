'use strict'
/**
 * factorial
 * 
 * @description Calculates the factorial of a positive integer
 * @throws new Error if the number is negative
 * @param {integer} num Base
 * @returns {integer} Factorial of num
 */
const factorial = (num) => {
  if (num < 0) throw new Error('Negative number')

  if (num === 0 || num === 1) return 1

  return num * factorial(num - 1)
}

module.exports = factorial
