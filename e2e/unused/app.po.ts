import { browser, element, ElementArrayFinder, ElementFinder, promise } from 'protractor';

import { Page } from './page.po';



// tslint:disable-next-line:max-classes-per-file
export class AppPage extends Page {

  public constructor(selector: string) {
    super(selector);
  }

  public navigateTo(): promise.Promise<any> {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  public getPageHeader(): ElementFinder {
    return element(this.byCss('div.page-header > h1'));
  }


  public getTabs(): ElementArrayFinder {
    return element.all(this.byCss('#uncontrolled-tab-example > ul > li > a'));
  }


  public getTab(name: string): promise.Promise<ElementFinder> {
    const tabs = this.findElementsByText(this.getTabs(), name);
    return new promise.Promise<ElementFinder>((resolve, reject) => {
      tabs.then((items: ElementFinder[]) => {
        if (items.length <= 0) {
          resolve(undefined);
        } else if (items.length !== 1) {
          throw new Error(``);
        } else {
          resolve(items[0]);
        }
      });
    });    
  }

}
