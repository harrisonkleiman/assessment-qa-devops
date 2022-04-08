const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
  // Check that it returns an array of the same length as the argument sent in
  test("shuffleArray should return shuffled array with same length", () => {
    const array = [1, 2, 3, 4, 5]
    const shuffledArray = shuffleArray(array)
    expect(shuffledArray.length).toBe(array.length)
  })

  // Check that all the same items are in the array
  test("same items in array", () => {
    const arr = [1, 2, 3, 4, 5]
    const shuffled = shuffleArray(arr)
    expect(arr).toEqual(expect.arrayContaining(shuffled))
  })
})