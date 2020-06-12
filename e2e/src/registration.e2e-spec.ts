import {RegistrationPage} from "./registration.po";
import {
  by,
  browser,
  element
} from "protractor";

describe("Registration tests", () => {
  let page: RegistrationPage;

  beforeEach(() => {
    page = new RegistrationPage();
    page.navigateTo();
  });

  /* SUCCESS TESTS
  --------------------------------------------------------------------------
  * */
  it("Should fill email && NOT username, password twice and it should return SUCCESS! (success)", () => {
    page.getEmailUsernameTxtbox().sendKeys("nejcgorsic1@gmail.com");
    page.getPasswordTxtbox().sendKeys("PasswordTest1234");
    page.getPassword2Txtbox().sendKeys("PasswordTest1234");

    page.getButton().click().then(function () {
      let txt = element(by.id('button')).getText();
      expect(txt).toContain('SUCCESS!');
    });
  });

  it("Should fill username && email, password twice and it should return SUCCESS! (success)", () => {
    page.getEmailUsernameTxtbox().sendKeys("TheUsernameTest");
    page.getPasswordTxtbox().sendKeys("PasswordTest1234");
    page.getPassword2Txtbox().sendKeys("PasswordTest1234");
    page.getEmailTxtbox().sendKeys('nejcgorsic1@gmail.com');

    page.getButton().click().then(function () {
      let txt = element(by.id('button')).getText();
      expect(txt).toContain('SUCCESS!');
    });
  });

  /* ERROR TESTS
--------------------------------------------------------------------------
* */
  it("Should fill email && NOT username, password was not confirmed and it should return CREATE ACCOUNT! (error)", () => {
    page.getEmailUsernameTxtbox().sendKeys("nejcgorsic1@gmail.com");
    page.getPasswordTxtbox().sendKeys("PasswordTest123");
    page.getPassword2Txtbox().sendKeys("PasswordTest1234");

    page.getButton().click().then(function () {
      let txt = element(by.id('button')).getText();
      expect(txt).toContain('CREATE ACCOUNT!');
    });
  });

  it("Should fill email && NOT username, wrong password regex and it should return CREATE ACCOUNT! (error)", () => {
    page.getEmailUsernameTxtbox().sendKeys("nejcgorsic1@gmail.com");
    page.getPasswordTxtbox().sendKeys("pass");
    page.getPassword2Txtbox().sendKeys("pass");

    page.getButton().click().then(function () {
      let txt = element(by.id('button')).getText();
      expect(txt).toContain('CREATE ACCOUNT!');
    });
  });

  it("Should fill username && wrong email, wrong password regex and it should return CREATE ACCOUNT! (error)", () => {
    page.getEmailUsernameTxtbox().sendKeys("NejcGorsic123");
    page.getPasswordTxtbox().sendKeys("pass");
    page.getPassword2Txtbox().sendKeys("pass");
    page.getEmailTxtbox().sendKeys('nejcgors')

    page.getButton().click().then(function () {
      let txt = element(by.id('button')).getText();
      expect(txt).toContain('CREATE ACCOUNT!');
    });
  });

  it("Should fill wrong username && wrong email, wrong password regex and it should return CREATE ACCOUNT! (error)", () => {
    page.getEmailUsernameTxtbox().sendKeys("nejcg");
    page.getPasswordTxtbox().sendKeys("pass");
    page.getPassword2Txtbox().sendKeys("pass");
    page.getEmailTxtbox().sendKeys('nejcgors')

    page.getButton().click().then(function () {
      let txt = element(by.id('button')).getText();
      expect(txt).toContain('CREATE ACCOUNT!');
    });
  });






});
