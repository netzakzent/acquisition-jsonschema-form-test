import { browser, by, element, ElementArrayFinder, ElementFinder, promise } from 'protractor';

// import { Assert, Utility } from '@fluxgate/core';

// import { log } from './util';

// TODO: nach fluxgate/libraries verschieben
/**
 * Hilfsklasse für Elemente.
 *
 * @export
 * @class ElementHelper
 */
export class ElementHelper {
  /**
   * Name für class-Attribut
   */
  public static CLASS = 'class';


  /**
   * Testet, ob das Element @param{element} im class-Attribut die Css-Klasse @param{expectedClass} hat.
   *
   * @static
   * @param {ElementFinder} element zu testendes Element
   * @param {string} expectedClass erwartete Css-Klasse
   * @param {boolean} [debug=false] falls true, wird debug Info ausgegeben
   * @returns {promise.Promise<boolean>}
   * @memberof ElementHelper
   */
  public static hasClass(elem: ElementFinder, expectedClass: string, debug: boolean = false):
    promise.Promise<boolean> {
    return elem.getAttribute(ElementHelper.CLASS).then((classes) => {
      return this.hasClasses(elem, [expectedClass], debug);
    });
  }


  /**
   * Testet, ob das Element @param{element} im class-Attribut alle Css-Klassen @param{expectedClasses} hat.
   *
   * @static
   * @param {ElementFinder} element zu testendes Element
   * @param {string[]} expectedClasses erwartete Css-Klassen als Array
   * @param {boolean} [debug=false] falls true, wird debug Info ausgegeben
   * @returns {promise.Promise<boolean>}
   * @memberof ElementHelper
   */
  public static hasClasses(elem: ElementFinder, expectedClasses: string[], debug: boolean = false):
    promise.Promise<boolean> {
    throw new Error(`currently not supported`);

      // return elem.getAttribute(ElementHelper.CLASS).then((classes) => {
    //   if (debug) {
    //     log(`hasClasses: expectedClasses = ${expectedClasses}, classes = ${classes}`);
    //   }

    //   return Utility.intersect(new Set(expectedClasses), new Set<string>(classes.split(' '))).size > 0;
    // });
  }


  /**
   * Liefert einen formatierten String mit
   *
   * @export
   * @param {ElementFinder} element
   * @param {string} name
   * @param {string} attributeName
   * @param {Function} cb
   */
  public static formatAttributes(elem: ElementFinder, attributeNames: string[], cb: (res: string) => void) {
    // Assert.notNull(attributeNames);
    // Assert.that(attributeNames.length >= 1, 'must not be empty');

    const text: string[] = [];
    const promises = [];

    for (const name of attributeNames) {
      promises.push(elem.getAttribute(name).then((value) => {
        text.push(`${name} = ${value}`);
      }));
    }

    promise.all(promises)
      .then(() => {
        cb(text.join(', '));
      });
  }


  /**
   * Liefert den .panel-heading Text unter einem Element mit Namen @param{parentElementName}
   *
   * @static
   * @param {string} prefix
   * @returns {promise.Promise<string>}
   *
   * @memberOf ElementHelper
   */
  public static getPanelHeading(parentElementName: string): promise.Promise<string> {
    return element(by.css(`${parentElementName} .panel-heading`)).getText();
  }


  /**
   * Liefert den Text eines Input-Fields.
   *
   * @static
   * @param {ElementFinder} element
   * @returns {promise.Promise<string>}
   *
   * @memberOf ElementHelper
   */
  public static getInputText(elem: ElementFinder): promise.Promise<string> {
    return elem.getAttribute('value');
  }


  /**
   * Liefert true, falls das angegebene Element @param{element} aktiv ist (den Focus hat).
   *
   * @static
   * @param {ElementFinder} element
   * @returns {promise.Promise<boolean>}
   * @memberof ElementHelper
   */
  public static isActive(elem: ElementFinder): promise.Promise<boolean> {
    return elem.equals(browser.driver.switchTo().activeElement());
  }


  public static async expectTextArray(inputElements: ElementArrayFinder, extectedText: string[],
    debug: boolean = false) {
    // Assert.notNull(inputElements);
    // Assert.notNullOrEmpty(extectedText);

    for (let i = 0; i < extectedText.length; i++) {
      expect(await inputElements.get(i).getText()).toBe(extectedText[i]);
    }
  }
}