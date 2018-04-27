import { app } from '../app';
import { HomePage } from '../home/home.po';


describe('Akquise Components', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage(app);
    page.navigateTo();
  });
  
  const expectedTab = 'Akquise Components';
  it(`should have active tab ${expectedTab}`, async () => {
    expect(await page.mainTabs.getActiveHeader().getText()).toEqual(expectedTab);
  });

  it(`should have field firstname`, async () => {
    expect(page.mainTabs.getActiveHeader().$$('#Vorname')).not.toBeNull();
  });

  it(`should have field lastname`, async () => {
    expect(page.mainTabs.getActiveHeader().$$('#Nachname')).not.toBeNull();
  });

});