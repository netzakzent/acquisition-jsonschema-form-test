import { AppPage } from './app.po';

describe('Heise', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should find head', () => {
    page.navigateTo();
    expect(page.getHead()).not.toBeNull();
  });
});
