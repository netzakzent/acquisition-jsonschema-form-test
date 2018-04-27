import { promise } from 'protractor';

import { E2eComponent } from './e2e.component';


export class LabeledTextFielComponents extends E2eComponent {

  public constructor(selector: string) {
    super(selector);
  }
}