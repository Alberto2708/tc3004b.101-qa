// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const fs = require('fs')

describe('Invalid input', function() {
  this.timeout(30000)
  let driver
  let vars
  if (!fs.existsSync('./screenshots')) {

    fs.mkdirSync('./screenshots');

}

beforeEach(async function() {

const chrome = require('selenium-webdriver/chrome');

    const options = new chrome.Options();

    options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');

    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();





vars = {}

})
afterEach(async function () {

  if (driver) {

      // Take a screenshot of the result page

      const filename = this.currentTest.fullTitle()

          .replace(/['"]+/g, '')

          .replace(/[^a-z0-9]/gi, '_')

          .toLowerCase();;

      const encodedString = await driver.takeScreenshot();

      await fs.writeFileSync(`../screenshots/${filename}.png`,

          encodedString, 'base64');



      // Close the browser

      await driver.quit();

  }

});

it('test1', async function() {

await driver.get("http://localhost:8000/")

await driver.manage().window().setRect({ width: 1050, height: 652 })

await driver.findElement(By.id("num1")).click()

await driver.findElement(By.id("num1")).sendKeys("1")

await driver.findElement(By.id("num2")).click()

await driver.findElement(By.id("num2")).sendKeys("1")

await driver.findElement(By.css("button:nth-child(1)")).click()

const filename = 'invalidinput';

      const encodedString = await driver.takeScreenshot();

      await fs.writeFileSync(`../screenshots/${filename}.png`,

          encodedString, 'base64');

})

})
