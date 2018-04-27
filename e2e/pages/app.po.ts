import { browser, element, ElementArrayFinder, ElementFinder } from 'protractor';

import { Page } from './page.po';



// tslint:disable-next-line:max-classes-per-file
export class AppPage extends Page {

  public constructor(selector: string) {
    super(selector);
  }

  public navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  public getPageHeader(): ElementFinder {
    return element(this.byCss('div.page-header > h1'));
  }


  public getTabs(): ElementArrayFinder {
    return element.all(this.byCss('#uncontrolled-tab-example > ul > li'));
  }
}
