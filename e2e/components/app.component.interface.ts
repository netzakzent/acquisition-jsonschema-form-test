import { promise } from 'protractor';
import { IE2eComponent } from './e2e.component';

export interface IAppComponent extends IE2eComponent {
  getAppTitle(): promise.Promise<string>;
}