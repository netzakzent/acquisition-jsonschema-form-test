import { promise } from 'protractor';

import { IAppComponent } from './app.component.interface';
import { E2eComponent } from './e2e.component';


/**
 * e2e test helper class for modeling the root component of the app.
 *
 * @export
 * @class AppComponent
 * @extends {E2eComponent}
 */
export class AppComponent extends E2eComponent implements IAppComponent {

  // tslint:disable-next-line:variable-name
  constructor(css: string, private _titleCss: string) {
    super(css);
  }

  public getAppTitle(): promise.Promise<string> {
    return this.getElement().element(this.byCss(this._titleCss)).getText();
  }
}
