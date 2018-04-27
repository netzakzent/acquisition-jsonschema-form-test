import { browser, promise } from 'protractor';

import { E2eComponent, IE2eComponent } from './e2e.component';
import { IInputState, InputHelper } from './input-helper';

/**
 * helper class for e2e tests of inputs
 *
 * @export
 */
export class InputComponent extends E2eComponent {

  constructor(parent: IE2eComponent, css: string) {
    super(css, parent);
  }


  public getText(): promise.Promise<string> {
    return this.getElement().getAttribute('ng-reflect-model');
  }


  public sendKeys(keys: string): promise.Promise<void> {
    return this.getElement().sendKeys(keys);
  }

  public clear(): promise.Promise<void> {
    return this.getElement().clear();
  }


  public isActive(): promise.Promise<boolean> {
    return this.getElement().equals(browser.driver.switchTo().activeElement());
  }

  public async expectState(inputStateExpected: IInputState): Promise<void> {
    return InputHelper.expectState(this.getElement(), inputStateExpected);
  }
}