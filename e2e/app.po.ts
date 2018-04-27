import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  public getHead() {
    return element(by.css('head  > meta[content*="Heise"]'));
  }
}
