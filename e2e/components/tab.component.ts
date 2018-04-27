import { ElementArrayFinder, ElementFinder } from 'protractor';

import { ContainerComponent } from './container.component';
import { IE2eComponent } from './e2e.component';


/**
 * helper class for e2e tests of tabs
 *
 * @export
 */
export class TabComponent extends ContainerComponent {

  /**
   * Creates an instance of TabComponent.
   *
   * @param {IE2eComponent} parent
   * @param {string} css - locator css
   * @param {string} headerCss - locator css for tab header
   * @param {string} contentCss - locator css for content
   * @param {string} activeHeaderCss - locator css for active header
   * @memberof TabComponent
   */
  constructor(parent: IE2eComponent, css: string,
    private headerCss: string, private contentCss: string, private activeHeaderCss: string) {
    super(parent, css);
  }

  /**
   * returns the tab headers
   *
   * @returns {ElementArrayFinder}
   * @memberof TabComponent
   */
  public getHeaders(): ElementArrayFinder {
    return this.getElement().all(this.byCss(this.headerCss));
  }

  /**
   * returns the tab header at the given index
   *
   * @param {number} index
   * @returns {ElementFinder}
   * @memberof TabComponent
   */
  public getHeader(index: number): ElementFinder {
    return this.getHeaders().get(index);
  }

  /**
   * returns the tab header with the given title
   *
   * @param {0} index
   * @returns {ElementFinder}
   * @memberof TabComponent
   */
  public getHeaderByName(title: string): ElementFinder {
    return this.getHeaders().filter((elem, i) => {
      return elem.getText().then((val) => {
        return val === title;
      });
    }).first();
  }



  /**
   * returns the content of the current tab
   *
   * @returns {ElementArrayFinder}
   * @memberof TabComponent
   */
  public getContent(): ElementFinder {
    return this.getElement().element(this.byCss(this.contentCss));
  }

  /**
   * returns the active tab header
   *
   * @returns {ElementFinder}
   * @memberof TabComponent
   */
  public getActiveHeader(): ElementFinder {
    return this.getElement().element(this.byCss(this.activeHeaderCss));
  }

}