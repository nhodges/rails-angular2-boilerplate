import { BoilerplatePage } from './app.po';

describe('boilerplate App', function() {
  let page: BoilerplatePage;

  beforeEach(() => {
    page = new BoilerplatePage();
  });

  it('should display message saying "Angular 2, Riding on Rails"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular 2, Riding on Rails!');
  });
});
