import { promise } from 'protractor';

import { ContainerComponent, IE2eComponent, InputComponent, LabelComponent } from '../components';

export class LabeledTextFielComponents extends ContainerComponent {

  public constructor(parent: IE2eComponent, selector: string) {
    super(parent, selector);

    this.addComponent(new LabelComponent(this, '> label'));
    this.addComponent(new InputComponent(this, '> div > input'));
  }
}