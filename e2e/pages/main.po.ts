import { promise } from 'protractor';

// import { NotSupportedException } from '@fluxgate/core';
import { BasePage, IAppComponent, TabComponent } from '../components';


/**
 * Basisklasse für alle Pages nach erfolgreichem Login
 * 
 * @export
 * @abstract
 * @class MainPage
 * @extends {BasePage}
 */
export class MainPage extends BasePage {
  protected static TAB_LOCATOR = '#uncontrolled-tab-example';

  // tslint:disable-next-line:variable-name
  private _mainTabs: TabComponent;

  constructor(app: IAppComponent, css: string) {
    super(css, app);

    this._mainTabs = new TabComponent(this, MainPage.TAB_LOCATOR,
      `${MainPage.TAB_LOCATOR} > ul > li > a`,
      'div',
      `${MainPage.TAB_LOCATOR}> ul > li.active > a`);
  }

  public getTitle(): promise.Promise<string> {
    throw new Error('currently not supported');
  }

  public getAppTitle(): promise.Promise<string> {
    return this.app.getAppTitle();
  }


  public get mainTabs(): TabComponent {
    return this._mainTabs;
  }
}
