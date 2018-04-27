import { browser } from 'protractor';

import { IAppComponent } from '../components';
import { MainPage } from '../pages/main.po';


export class HomePage extends MainPage {
  protected static LOCATOR = '';

  constructor(app: IAppComponent) {
    super(app, HomePage.LOCATOR);
  }

  public navigateTo() {
    return browser.get('/');
    // return this.clickLink('Akquise Component');
  }

  

}