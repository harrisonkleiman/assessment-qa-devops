
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
  const title = await driver.findElement(By.id("title"))
  const displayed = await title.isDisplayed()
  expect(displayed).toBe(true)

    await driver.sleep(2000)
})

// Check that clicking an “Add to Duo” button displays the div with id = “player-duo”
test('Add to Duo button displays player-duo div', async () => {
    const addToDuoBtn = await driver.findElement(By.id('add-to-duo'))
    await addToDuoBtn.click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})

// Check that clicking the Draw button displays the div with id = “choices”
test('Draw button displays choices div', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(2000)
})