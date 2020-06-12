import {
  browser,
  by,
  element
} from "protractor";

export class RegistrationPage {
  navigateTo() {
    return browser.get("/registration");
  }

  getEmailUsernameTxtbox() {
    return element(by.id("username"));
  }

  getPasswordTxtbox() {
    return element(by.id("password"));
  }

  getPassword2Txtbox() {
    return element(by.id("confirmPassword"));
  }

  getEmailTxtbox() {
    return element(by.id("email"));
  }

  getButton() {
    return element(by.id('button'));
  }

  getSuccessMsg() {
    return element(by.css("#successfulluser"));
  }
}
