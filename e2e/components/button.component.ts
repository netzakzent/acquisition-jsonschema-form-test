import { promise } from 'protractor';

import { E2eComponent, IE2eComponent } from './e2e.component';


/**
 * helper class for e2e tests of buttons
 *
 * @export
 */
export class ButtonComponent extends E2eComponent {

  constructor(parent: IE2eComponent, css: string) {
    super(css, parent);
  }


  public getText(): promise.Promise<string> {
    return this.getElement().getText();
  }

  public click(): promise.Promise<void> {
    return this.getElement().click();
  }

  public isEnabled(): promise.Promise<boolean> {
    return this.getElement().isEnabled();
  }
}