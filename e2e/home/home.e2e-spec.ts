import { app } from '../app';
import { HomePage } from './home.po';


describe('Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage(app);
    page.navigateTo();
  });
  

  it('should match page head text', () => {    
    expect(page.getAppTitle()).toContain('react-jsonschema-form');
  });


  const expectedTab = 'Akquise Components';
  it(`should have active tab ${expectedTab}`, async () => {
    expect(await page.mainTabs.getActiveHeader().getText()).toEqual(expectedTab);
  });

  
  const expectedTabCount = 8;
  it(`should find ${expectedTabCount} tabs`, () => {
    expect(page.mainTabs.getHeaders().count()).toEqual(expectedTabCount);
  });

});