import { ElementFinder, promise } from 'protractor';

// import { Assert } from '@fluxgate/core';
import { ElementHelper } from './element-helper';
// import { log } from './util';

// TODO: nach fluxgate/libraries verschieben

/**
 * Status eines Input-Elements
 *
 * @export
 * @interface IInputState
 */
export interface IInputState {
  /**
   * true:    ng-pristine
   * false:   ng-dirty
   */
  pristine?: boolean;

  /**
   * true:    ng-untouched
   * false:   ng-touched
   */
  untouched?: boolean;

  /**
   * true:    ng-invalid
   * false:   ng-valid
   */
  invalid?: boolean;
}



/**
 * Helperklasse für Input-Elemente
 *
 * @export
 * @class InputHelper
 */
export class InputHelper {

  /**
   *
   */
  public static NG_VALID = 'ng-valid';
  public static NG_INVALID = 'ng-invalid';

  public static NG_PRISTINE = 'ng-pristine';
  public static NG_DIRTY = 'ng-dirty';

  public static NG_UNTOUCHED = 'ng-untouched';
  public static NG_TOUCHED = 'ng-touched';


  /**
   * initialer Status eines Inputfelds
   *
   * @static
   * @type {IInputState}
   * @memberOf InputHelper
   */
  public static INITIAL_STATE: IInputState = {
    invalid: true,
    pristine: true,
    untouched: true
  };

  /**
   * initialer Status eines Inputfelds, welches den Focus erhalten hat
   *
   * @static
   * @type {IInputState}
   * @memberOf InputHelper
   */
  public static INITIAL_STATE_FOCUSED: IInputState = {
    invalid: true,
    pristine: true,
    untouched: false
  };

  /**
   * Status eines Inputfelds, welches
   * - den Focus erhalten hatte
   * - valide Daten enthält
   *
   * @static
   * @type {IInputState}
   * @memberOf InputHelper
   */
  public static VALID_STATE: IInputState = {
    invalid: false,
    pristine: false,
    untouched: false,
  };

  /**
   * Testet, ob das Element @param{element} im class-Attribut den Wert 'ng-valid' hat.
   *
   * @export
   * @param {ElementFinder} element
   * @returns {promise.Promise<boolean>}
   */
  public static isValid(element: ElementFinder, debug: boolean = false): promise.Promise<boolean> {
    return ElementHelper.hasClass(element, InputHelper.NG_VALID, debug);
  }

  /**
   * Testet, ob das Element @param{element} im class-Attribut den Wert 'ng-invalid' hat.
   *
   * @export
   * @param {ElementFinder} element
   * @returns {promise.Promise<boolean>}
   */
  public static isInvalid(element: ElementFinder, debug: boolean = false): promise.Promise<boolean> {
    return ElementHelper.hasClass(element, InputHelper.NG_INVALID, debug);
  }



  /**
   * Testet, ob das Element @param{element} im class-Attribut den Wert 'ng-pristine' hat.
   *
   * @export
   * @param {ElementFinder} element
   * @returns {promise.Promise<boolean>}
   */
  public static isPristine(element: ElementFinder, debug: boolean = false): promise.Promise<boolean> {
    return ElementHelper.hasClass(element, InputHelper.NG_PRISTINE, debug);
  }


  /**
   * Testet, ob das Element @param{element} im class-Attribut den Wert 'ng-dirty' hat.
   *
   * @export
   * @param {ElementFinder} element
   * @returns {promise.Promise<boolean>}
   */
  public static isDirty(element: ElementFinder, debug: boolean = false): promise.Promise<boolean> {
    return ElementHelper.hasClass(element, InputHelper.NG_DIRTY, debug);
  }


  /**
   * Testet, ob das Element @param{element} im class-Attribut den Wert 'ng-untouched' hat.
   *
   * @export
   * @param {ElementFinder} element
   * @returns {promise.Promise<boolean>}
   */
  public static isUntouched(element: ElementFinder, debug: boolean = false): promise.Promise<boolean> {
    return ElementHelper.hasClass(element, InputHelper.NG_UNTOUCHED, debug);
  }

  /**
   * Testet, ob das Element @param{element} im class-Attribut den Wert 'ng-touched' hat.
   *
   * @export
   * @param {ElementFinder} element
   * @returns {promise.Promise<boolean>}
   */
  public static isTouched(element: ElementFinder, debug: boolean = false): promise.Promise<boolean> {
    return ElementHelper.hasClass(element, InputHelper.NG_TOUCHED, debug);
  }


  /**
   * Prüft, ob das @param{inputElement} einen erwarteten Status @param{inputStateExpected} aufweist.
   *
   * @static
   * @param {ElementFinder} inputElement
   * @param {IInputState} inputStateExpected - erwarteter Status
   *
   * @memberOf InputHelper
   */
  public static async expectState(inputElement: ElementFinder, inputStateExpected: IInputState,
    debug: boolean = false) {
    // Assert.notNull(inputElement);
    // Assert.notNull(inputStateExpected);

    if (debug) {
      ElementHelper.formatAttributes(inputElement, ['id', 'class'], (message) => {
        // log(message);
      });
    }

    if (inputStateExpected.untouched !== undefined) {
      if (inputStateExpected.untouched) {
        expect(await InputHelper.isUntouched(inputElement, debug)).toBeTruthy();
      } else {
        expect(await InputHelper.isTouched(inputElement, debug)).toBeTruthy();
      }
    }

    if (inputStateExpected.pristine !== undefined) {
      if (inputStateExpected.pristine) {
        expect(await InputHelper.isPristine(inputElement, debug)).toBeTruthy();
      } else {
        expect(await InputHelper.isDirty(inputElement, debug)).toBeTruthy();
      }
    }

    if (inputStateExpected.invalid !== undefined) {
      if (inputStateExpected.invalid) {
        expect(await InputHelper.isInvalid(inputElement, debug)).toBeTruthy();
      } else {
        expect(await InputHelper.isValid(inputElement, debug)).toBeTruthy();
      }
    }
  }
}