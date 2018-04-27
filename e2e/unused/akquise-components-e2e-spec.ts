import { AkquiseComponentsPage } from './akquise-components.po';

describe('start page', () => {
  let page: AkquiseComponentsPage;

  beforeEach(() => {
    page = new AkquiseComponentsPage('#root #uncontrolled-tab-example > ul > li > a[aria-controls=\'uncontrolled-tab-example-pane-3\']');
  });

  it('should find tab page', () => {
    page.navigateTo();
    expect(page.getPageHeader()).not.toBeNull();
  });

  it('should match page head text', () => {
    page.navigateTo();
    expect(page.getPageHeader().getText()).toContain('react-jsonschema-form');
  });

  const expectedTabCount = 8;
  it(`should find ${expectedTabCount} tabs`, () => {
    page.navigateTo();
    expect(page.getTabs().count()).toEqual(expectedTabCount);
  });

  const expectedTab = 'Akquise Components';
  it(`should find tab ${expectedTab}`, () => {
    page.navigateTo();
    expect(page.getTab(expectedTab)).not.toBeNull();
  });
});
