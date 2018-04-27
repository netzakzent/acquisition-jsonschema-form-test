import { by, ElementArrayFinder, ElementFinder, promise } from 'protractor';
import { By } from 'selenium-webdriver';

export abstract class Page {

  // tslint:disable-next-line:variable-name
  protected constructor(private _selector: string) {

  }

  public get selector(): string {
    return this._selector;
  }

  public byCss(css: string): By {
    const fullCss = this.selector.concat(' ', css);
    // tslint:disable-next-line:no-console
    console.log(`byCss: selector = ${this.selector}: css = ${css} -> fullCss = ${fullCss}`)
    return by.css(fullCss);
  }


  public findElementsByText(elements: ElementArrayFinder, text: string): ElementArrayFinder {
    return this.findElements(elements, (element: ElementFinder) =>
      element.getText().then((value) => {
        return value === text;
      })
    );
  }


  protected findElements(elements: ElementArrayFinder, filter: (element: ElementFinder, index?: number) => boolean | promise.Promise<boolean>): ElementArrayFinder {
    return elements.filter(filter);
  }
}