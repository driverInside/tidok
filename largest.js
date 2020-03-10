'use strict'
/**
 * largestWord
 * @description find the largest word in a string
 * @param {string} str String
 * @returns {string} The largest word in a string
 */
const largestWord = (str = '') => {
  if (str === '') return ''
  const words = str.replace(/[!@#$%^&*(),.?":{}|<>]/g, '').split(' ').sort((a, b) => {
    return a.length < b.length
  })
  return words[0]
}

module.exports = largestWord
