const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) 
  {
    this.page= page;
    this.signin= page.locator('text=Sign In');
    this.email= page.locator('input#Email');
    this.password= page.locator('input#Password');
    this.loginbutton= page.locator('id=btnSignIn');

  
  }

  async goto() {
    
    await this.page.goto('https://www.google.com/');
    
  }

  async validLogin(emailID, passwrd) {
    await this.signin.first().click();
    await this.email.fill(emailID);
    await this.password.fill(passwrd);
    await this.loginbutton.click();

  }

  
}