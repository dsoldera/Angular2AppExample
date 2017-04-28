import { Angular2appexamplesPage } from './app.po';

describe('angular2appexamples App', () => {
  let page: Angular2appexamplesPage;

  beforeEach(() => {
    page = new Angular2appexamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
