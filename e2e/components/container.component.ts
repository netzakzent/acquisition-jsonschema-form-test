import { E2eComponent, IE2eComponent } from './e2e.component';


/**
 * helper class for container components (e.g. tab)
 *
 * @export
 */
export class ContainerComponent extends E2eComponent {

  // tslint:disable-next-line:variable-name
  private _children: IE2eComponent[];

  constructor(parent: IE2eComponent, css: string) {
    super(css, parent);

    this._children = [];
  }

  public async expectElements() {
    this._children.forEach((c) => {
      c.expectElements();
    });
  }

  public addComponent(component: IE2eComponent) {
    this._children.push(component);
  }

  public getComponent<T extends IE2eComponent>(index: number): T {
    // Assert.that(index >= 0 && index < this._children.length);
    return this._children[index] as T;
  }

}