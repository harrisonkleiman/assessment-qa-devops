const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
  test("return shuffled array", () => {
    // check that it returns an array of the same length as the argument sent in
    expect(shuffleArray(5).length).toBe(5)
  })

  // check that all the same items are in the array
    test('same items in array', () => {
        const arr = [1, 2, 3, 4, 5]
        const shuffled = shuffleArray(arr)
        expect(arr).toEqual(expect.arrayContaining(shuffled))
    })
})