import { AppPage } from './pages/app.po';

describe('start page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage('#root');
  });

  it('should find page head', () => {
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
