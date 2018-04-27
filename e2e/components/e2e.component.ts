import { by, element, ElementArrayFinder, ElementFinder, promise } from 'protractor';
import { By } from 'selenium-webdriver';


/**
 * Interface for e2e helper classes
 *
 * @export
 * @interface IE2eComponent
 */
export interface IE2eComponent {

  /**
   * returns the full css locator path from root component/page to this component.
   *
   * @type {string}
   * @memberof IE2eComponent
   */
  fullCss: string;

  /**
   * parent component
   *
   * @type {IE2eComponent}
   * @memberof IE2eComponent
   */
  parent: IE2eComponent | undefined;

  /**
   * returns the corresponding gui element as @see{ElementFinder}
   *
   * @returns {ElementFinder}
   * @memberof IE2eComponent
   */
  getElement(): ElementFinder;

  expectElements(): void;
}



/**
 * Base class for Protractor tests.
 *
 * Models a component to test.
 *
 * @export
 * @abstract
 * @class E2eComponent
 * @implements {IE2eComponent}
 */
export abstract class E2eComponent implements IE2eComponent {
  // protected static readonly logger = getLogger(E2eComponent);

  // tslint:disable-next-line:variable-name
  private _fullCss: string;

  /**
   * Creates an instance of E2eComponent.
   *
   * @param {IE2eComponent} _parent - parent component
   * @param {By} _locator - locator wto parent
   * @memberof E2eComponent
   */
  // tslint:disable-next-line:variable-name
  protected constructor( private _css: string, private _parent?: IE2eComponent) {
    // console.log(`locator = ${_locator}`);
    if (this._parent) {
      this._fullCss = this._parent.fullCss.concat(' ', this._css);
    } else {
      this._fullCss = this._css;
    }
  }


  /**
   * expects all components of a concrete parent component
   *
   * @memberof E2eComponent
   */
  public async expectElements() {
    // ok
  }


  /**
   * Returns an @see{ElementFinder} for the current component
   *
   * @abstract
   * @returns {ElementFinder}
   * @memberof E2eComponent
   */
  public getElement(): ElementFinder {
    // return using(new XLog(E2eComponent.logger, levels.INFO, 'getElement'), (log) => {
      // console.log(`getElement: type = ${Types.getClassName(this)}, fullCss = ${this.fullCss}`);

      return element(this.byCss(this.fullCss));
    // });
  }


  
  public findElementsByText(elements: ElementArrayFinder, text: string): ElementArrayFinder {
    return this.findElements(elements, (el: ElementFinder) =>
      el.getText().then((value) => {
        return value === text;
      })
    );
  }


  protected findElements(elements: ElementArrayFinder, filter: (element: ElementFinder, index?: number) => boolean | promise.Promise<boolean>): ElementArrayFinder {
    return elements.filter(filter);
  }


  protected byCss(css: string): By {
    // return using(new XLog(E2eComponent.logger, levels.INFO, 'byCss'), (log) => {
    //   if (log.isEnabled()) {
    //     log.log(`class ${Types.getClassName(this)}: css = ${css}`);
    //   }
      return by.css(css);
//    });
  }


  /**
   * Returns the parent component
   *
   * @readonly
   * @type {IE2eComponent}
   * @memberof E2eComponent
   */
  public get parent(): IE2eComponent | undefined {
    return this._parent;
  }

  public get css(): string {
    return this._css;
  }

  public get fullCss(): string {
    return this._fullCss;
  }
}