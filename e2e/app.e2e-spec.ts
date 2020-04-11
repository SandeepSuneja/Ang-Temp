import { AngTempPage } from './app.po';

describe('ang-temp App', function() {
  let page: AngTempPage;

  beforeEach(() => {
    page = new AngTempPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
