const factorial = require('./factorial')
const largestWord = require('./largest')

/* eslint-env jest */
describe('Factorial of a number', () => {
  it('should throw an error', () => {
    expect(
      () => factorial(-1)
    ).toThrowError(new Error('Negative number'))
  })

  it('should return 1', () => {
    expect(factorial(0)).toBe(1)
    expect(factorial(1)).toBe(1)
  })

  it('should calculate the factorial of a non negative number', () => {
    expect(factorial(2)).toBe(2)
    expect(factorial(3)).toBe(6)
    expect(factorial(4)).toBe(24)
    expect(factorial(5)).toBe(120)
  })
})

describe('Largest word in a string', () => {
  it('should return an empty string', () => {
    expect(largestWord()).toBe('')
  })

  it('should return "Foo"', () => {
    expect(largestWord('a b c Foo')).toBe('Foo')
  })

  it('should ignore special characters', () => {
    const sentence = 'The quick brown&&!! fox'
    expect(largestWord(sentence)).toBe('quick')
  })
})
