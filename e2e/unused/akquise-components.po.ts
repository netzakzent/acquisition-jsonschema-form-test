import { promise } from 'protractor';

import { AppPage } from './app.po';



// tslint:disable-next-line:max-classes-per-file
export class AkquiseComponentsPage extends AppPage {

  public constructor(selector: string) {
    super(selector);
  }

  public navigateTo(): promise.Promise<any> {
    return new promise.Promise<any>((resolve, reject) => {
      super.navigateTo().then((x) => {
      
        resolve(this.getTab('Akquise Components').then((tab) => {
          tab.click();
        }));
      })
    });
  }

}
