import { by  } from 'protractor';
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
}