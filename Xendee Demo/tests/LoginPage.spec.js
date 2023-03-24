const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../Pages/LoginPage');
const dataset= JSON.parse(JSON.stringify(require('../TestData/LoginTestdata.json')));

test('Start application and Login', async ({page})=>
{
    const login= new LoginPage(page);
    login.goto();
    login.validLogin(dataset.emailID, dataset.passwrd);
    // console.log(await page.locator('id=profileName').textContent());
    // const locator = page.locator('.admin-heading.no-border.mb-3');
    // await expect(locator).toContainText('SadTest14');

})